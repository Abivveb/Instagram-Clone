import React from 'react'
import './UserStories.scss'


const usersIcons = [
    {id: 1, username: 'google', url: 'https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 2, username: 'nobody', url: 'https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 3, username: 'me', url: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 4, username: 'googlle', url: 'https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 5, username: 'hiuser', url:'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    {id: 6, username: 'latepro', url: 'https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 7, username: 'yandex', url: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 8, username: 'gpt', url: 'https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 9, username: 'chatOpenAi', url: 'https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 10, username: 'nothings', url: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
]
export const UserStories = () => {


    return (
        <div className="user-stories">
            {
                usersIcons.map(user => (
                    <div className="user-stories__user">
                        <img src={user.url} alt="" />
                        <span>{user.username}</span>
                    </div>
                ))
            }
        </div>
    )
}
