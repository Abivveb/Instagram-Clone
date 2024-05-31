import React from 'react'
import instaText from '../../../images/insta-text.png'
import threads from '../../../images/threads.png'
import homeIcon from '../../../images/hut.png'
import search from '../../../images/search.png'
import compass from '../../../images/compass.png'
import reels from '../../../images/video.png'
import messageIcon from '../../../images/chatIcon.png'
import notification from '../../../images/heart.png'
import create from '../../../images/create.png'
import defaultAva from '../../../images/user.png'
import './Sidebar.scss'
import { auth } from '../../../config'
import { useNavigate } from 'react-router-dom'

const sideBarItems = [
    {id: 1, title: 'Главная', url: homeIcon},
    {id: 2, title: 'Поисковый запрос', url: search},
    {id: 3, title: 'Интересное', url: compass},
    {id: 4, title: 'Reels', url: reels},
    {id: 5, title: 'Сообщения', url: messageIcon},
    {id: 6, title: 'Уведомления', url: notification},
    {id: 7, title: 'Создать', url: create},
    {id: 8, title: 'Профиль', url: defaultAva},
]

const settingsItems = [
    {id: 1, title: 'Настройки'},
    {id: 2, title: 'Ваши действия'},
    {id: 3, title: 'Сохраненное'},
    {id: 4, title: 'Переключить режим'},
    {id: 5, title: 'Сообщение о проблеме'},
    {id: 6, title: 'Switch off between accounts'},
    {id: 7, title: 'Sign Out'},
]



export const SideBar = () => {

    const [showSettings, setShowSettings] = React.useState(false)
    const navigate = useNavigate()
    
    const leaveSystem = (e) => {
        if(e === 'Sign Out'){
            auth.signOut()
            navigate('/login')
        }
    }


  return (
    <>
    <div className="wrapper">
        <div className="sidebar">
            <img src={instaText} className='sidebar__logo'/>
            <div className="sidebar__items">
                {
                    sideBarItems.map(item => (
                        <div className='sidebar__item'>
                            <div>
                                <img src={item.url}/>
                                <span>{item.title}</span>
                            </div>
                        </div>  
                    ))
                }
            </div>
            <div className="sidebar__settings">
                <div className="sidebar__threads">
                    <div>
                        <img src={threads} alt="" />
                        <h4>Threads</h4>
                    </div>
                </div>
                <div onClick={() => setShowSettings(!showSettings)}className="sidebar__more" >
                    <div>
                        <div className="burger"></div>
                        <span 
                        style={{
                            fontWeight: showSettings ? '700' : '400',
                        }}
                        >More</span>
                    </div>

                </div>

               {
                showSettings ? 
                <div className="sidebar__modal">
                    {
                       settingsItems.map(item => (
                        <div onClick={(e) => leaveSystem(e.target.innerText)} className="settings__item">
                            <div>
                                <span>{item.title}</span>
                            </div>
                        </div>
                       ))
                    }
                </div> : false
               } 
            </div>
        </div>
    </div>
    </>
  )
}
