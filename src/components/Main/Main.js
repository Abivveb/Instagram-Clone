import React from 'react'
import './Main.scss'
import { SideBar } from './Sidebar'
import { Content } from './Content'

export const Main = () => {
  return (
    <>
        <div className="main">
            <SideBar/>
            <Content/>
        </div>
    </>
  )
}
