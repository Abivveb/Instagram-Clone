import React from 'react'
import { Auth } from '../Auth'
import { Main } from '../Main/Main'

export const App = () => {
  const [entered, setEntered] = React.useState(false) 
  return (
    <div className="app">
      {
        entered ? <Auth/> : <Main/>
      }
    </div>
  )
}
