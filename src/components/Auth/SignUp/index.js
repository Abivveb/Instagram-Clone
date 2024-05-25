import React from 'react'
import instaText from '../../../images/insta-text.png'
import './SignUp.scss'
import { Link } from 'react-router-dom'
import { createUser } from '../../../store/slices/userSlice'
import { useDispatch } from 'react-redux'

export const SignUp = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [username, setUsername] = React.useState('')

  const registerUser = () => {
    const user = {
      email,
      pass,
      username
    }
    dispatch(createUser(user))
  }


  return (
    <div className="signUp">
        <img src={instaText} className='signUp__logo' />
        <span>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</span>
        <button>Войти via Facebook</button>

        <div className="signUp__divider">
            <h4>или</h4>
        </div>

        <div className="signUp__inputs">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}placeholder='Эл. адрес'/>
            <input type="text" placeholder='Имя и фамилия'/>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Имя пользователя'/>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Пароль'/>
        </div>

        <div className="text">
            <p>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. Подробнее</p>
            <p>Регистрируясь, вы принимаете наши Условия, Политику конфиденциальности и Политику в отношении файлов cookie.</p>
        </div>

        <button onClick={registerUser}>Регистрация</button>

        <div className="auth__signIn-link">
                      <span>Have an account?<Link to='/login'>enter</Link></span>
        </div>

    </div>
  )
}
