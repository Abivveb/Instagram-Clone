import React from 'react'
import { Auth } from '../Auth'
import { Main } from '../Main/Main'
import { auth } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { SignIn } from '../Auth/SignIn'
import { SignUp } from '../Auth/SignUp'
import { setUser } from '../../store/slices/userSlice'



export const App = () => {
  const navigate = useNavigate()
  const [entered, setEntered] = React.useState(false) 
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  

  console.log(auth)

  React.useEffect( () => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(setUser(user))
        console.log(user)
      }
    })
  }, [])

  React.useEffect(() => {
    if(user){
      navigate('/')
    }
  }, [user])
  

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}
