import React from 'react'
import instaText from '../../../images/insta-text.png'
import './SignUp.scss'

export const SignUp = () => {
  return (
    <div className="signUp">
        <img src={instaText} className='signUp__logo' />
        <span>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</span>
        <button>Войти via Facebook</button>

        <div className="signUp__divider">
            <h4>или</h4>
        </div>

        <div className="signUp__inputs">
            <input type="text" placeholder='Моб. телефон или эл. адрес'/>
            <input type="text" placeholder='Имя и фамилия'/>
            <input type="text" placeholder='Имя пользователя'/>
            <input type="password" placeholder='Пароль'/>
        </div>

        <div className="text">
            <p>Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram. Подробнее</p>
            <p>Регистрируясь, вы принимаете наши Условия, Политику конфиденциальности и Политику в отношении файлов cookie.</p>
        </div>

        <button>Регистрация</button>

    </div>
  )
}
