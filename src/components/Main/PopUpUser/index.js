import React from 'react'
import './PopUpUser.scss'
import { useSelector } from 'react-redux'
import defaultAva from '../../../images/defaultAva.png'

export const PopUpUser = () => {
    const {user} = useSelector(state => state.user)
    console.log(user)
  return (
    <div className='pop-user'>
        <div className="pop-user__ava">
            <img src={defaultAva} alt="" />
        </div>
        <div className="pop-user__names">
            <div className="pop-user__username">{user ? user.displayName : '...'}</div>
            <div className="pop-user__name">Nobody</div>
        </div>
        <button>change</button>
    </div>
  )
}
