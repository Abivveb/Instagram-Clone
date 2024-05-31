import React from 'react'
import './SignIn.scss'
import instaText from '../../../images/insta-text.png'
import facebookIcon from '../../../images/facebook.icon.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { enterUser } from '../../../store/slices/userSlice'

export const SignIn = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    

    const enterToSystem = () => {
        const user = {email, pass}
        dispatch(enterUser(user))
    }


  return (
    <>
        <div className="signIn">
            <img src={instaText} className='signIn__logo'/>

            <div className="signIn__elements">
                <div className="signIn__inputs">
                    <input onChange={(e) => setEmail(e.target.value)}type="text" placeholder='Телефон, имя пользователя или эл. адрес'/>
                    <input onChange={(e) => setPass(e.target.value)}type="password" placeholder='Пароль'/>
                </div>
                <button onClick={enterToSystem}>Войти</button>
            </div>

            <div className='signIn__divider'>
                <h4>или</h4>
            </div>

            <div className="facebook">
                <img src={facebookIcon} class/>
                <span>Войти через Facebook</span>
            </div>
            <span className="signIn__forgot-pass">Забыли пароль?</span>

            <div className="auth__signUp-link">
                      <span>Don't have an account yet?<Link to='/register'>register</Link></span>
            </div>
        </div>
    </>
  )
}
