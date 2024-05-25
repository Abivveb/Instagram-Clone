import React from 'react'
import { Auth } from '../Auth'
import { Main } from '../Main/Main'
import { auth } from '../../config'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../Auth/SignIn'
import { SignUp } from '../Auth/SignUp'



export const App = () => {
  const [entered, setEntered] = React.useState(false) 
  const user = useSelector(state => state.user)
  console.log(user)

  console.log(auth)
  

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
