import React from 'react'
import './SignIn.scss'
import instaText from '../../../images/insta-text.png'
import facebookIcon from '../../../images/facebook.icon.png'

export const SignIn = () => {
  return (
    <>
        <div className="signIn">
            <img src={instaText} className='signIn__logo'/>

            <div className="signIn__elements">
                <div className="signIn__inputs">
                    <input type="text" placeholder='Телефон, имя пользователя или эл. адрес'/>
                    <input type="password" placeholder='Пароль'/>
                </div>
                <button>Войти</button>
            </div>

            <div className='signIn__divider'>
                <h4>или</h4>
            </div>

            <div className="facebook">
                <img src={facebookIcon} class/>
                <span>Войти через Facebook</span>
            </div>
            <span className="signIn__forgot-pass">Забыли пароль?</span>
        </div>
    </>
  )
}
