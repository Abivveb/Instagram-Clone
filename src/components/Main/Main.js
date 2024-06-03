import React, { useEffect } from 'react'
import './Main.scss'
import { SideBar } from './Sidebar'
import { Content } from './Content'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Recommend } from './Recommendations'
import { PopUpUser } from './PopUpUser'

export const Main = () => {

  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)


  useEffect(() => {
    console.log(user)
    if(!user){
      return navigate('/login')
    }
  }, [user])


  return (
    <>

        <div className="main">
            <SideBar/>
            <Content/>
            <div className="navbar">
              <PopUpUser/>
              <Recommend/>
            </div>
        </div>  

    </>
  )
}
