import React from 'react'
import instaText from '../../../images/insta-text.png'
import threads from '../../../images/threads.png'
import homeIcon from '../../../images/hut.png'
import './Sidebar.scss'

const sideBarItems= [
    {id: 1, title: 'Главная', url: homeIcon},
    {id: 2, title: 'Поисковый запрос', url: ''},
    {id: 3, title: 'Интересное', url: ''},
    {id: 4, title: 'Reels', url: ''},
    {id: 5, title: 'Сообщения', url: ''},
    {id: 6, title: 'Уведомления', url: ''},
    {id: 7, title: 'Создать', url: ''},
    {id: 8, title: 'Профиль', url: ''},
]



export const SideBar = () => {
    const [selectedItem, setSelectedItem] = React.useState(null)
    console.log(selectedItem)

  return (
    <>
    <div className="wrapper">

        <div className="sidebar">
            <img src={instaText} className='sidebar__logo'/>
            <div className="sidebar__items">
                {
                    sideBarItems.map(item => (
                        <div onClick={() => setSelectedItem(item)}
                        className='sidebar__item'>
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
                <div className="sidebar__more">
                    <div>
                        <div className="burger"></div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}