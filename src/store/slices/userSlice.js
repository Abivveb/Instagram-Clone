import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../config";

const initialState = {
    user: null,
    error: null,
    loading: false,
}

export const createUser = createAsyncThunk(
    'createUser',
    async(user) => {
        try {
            const {email, pass, username, fullName} = user
            await auth.createUserWithEmailAndPassword(email, pass)
            
                if(auth.currentUser == null) return
                    await auth.currentUser.updateProfile({
                        displayName: username
                    })
                    
    
                        const {displayName, photoURL, uid} = auth.currentUser
            
                        await db.collection('users').doc(auth.currentUser.uid).set({
                            displayName,
                            email,
                            uid,
                            fullName,
                            photoURL
                        })
                    

                
           
            console.log(auth.currentUser)
            return auth.currentUser
        } catch (error) {
            console.log('error')
        }
    }
) 

export const enterUser = createAsyncThunk(
    'enterUser',
    async(user) => {
        try {
            const {email, pass} = user
            const userCredential = await auth.signInWithEmailAndPassword(email, pass)
            console.log(userCredential.user)

            return userCredential.user
            
        } catch (error) {
            console.log('error')
        }
    }
)



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: builder => {
        return builder.addCase(createUser.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        }),
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        }),

        builder.addCase(enterUser.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(enterUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        }),
        builder.addCase(enterUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
    }

})

export const { setUser } = userSlice.actions
export default userSlice.reducer