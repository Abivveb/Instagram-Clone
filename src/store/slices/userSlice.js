import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config";

const initialState = {
    user: null,
    error: null,
    loading: false,
}

export const createUser = createAsyncThunk(
    'createUser',
    async(user) => {
        try {
            const {email, pass, username} = user
            auth.createUserWithEmailAndPassword(email, pass)
                .then( () => {
                    if(auth.currentUser !== null){
                        auth.currentUser.updateProfile({
                            displayName: username
                        })
                    }
                })
                return auth.currentUser
        } catch (error) {
            console.log('error')
        }
    }
) 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
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
        })
    }

})

export default userSlice.reducer