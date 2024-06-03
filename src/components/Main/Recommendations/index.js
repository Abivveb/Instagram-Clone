import React from 'react'
import './Recommendation.scss'
import { auth, db } from '../../../config'
import defaultAva from '../../../images/defaultAva.png'
import { useSelector } from 'react-redux'


const fakeUsers = [
  {id: 1, user: 'dsad'},
  {id: 2, user: 'qwerty'},
  {id: 3, user: 'vbnm'},
  {id: 4, user: 'lllll'},
  {id: 5, user: 'lprt'},
]

export const Recommend = () => {
  const me = useSelector(state => state.user.user)
  const [usersF, setUsersF] = React.useState([])
  console.log(usersF)
  
  React.useEffect(() => {
    db.collection('users')
      .onSnapshot(snapshot => {
        const newUsers = snapshot.docs.map(doc => doc.data())
        setUsersF(newUsers)
      })
  }, [])
    
  return (
    <div className="recommend">
        <div className="recommend__title">
          <div className="recommend__title-left">Recommends</div>
          <div className="recommend__title-right">All</div>
        </div>
        <div className="recommend__items">
            {
              usersF.map(user => {
                if(user.uid !== me.uid){
                  return (
                    <div className='pop-user'>
                    <div className="pop-user__ava">
                        <img src={defaultAva} alt="" />
                    </div>
  
                    <div className="pop-user__names">
                        <div className="pop-user__username">{user.displayName}</div>
                        <div style={{fontSize: '12px'}}className="pop-user__name">Recommendation for you</div>
                    </div>
                  <button>subscribe</button>
                </div>
                  )

                }
              })
            }
        </div>
    </div>
  )
}
