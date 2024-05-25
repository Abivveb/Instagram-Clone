import React from 'react'
import './Posts.scss'
import like from '../../../images/heart.png'
import liked from '../../../images/heart (1).png'
import comment from '../../../images/chat.png'
import send from '../../../images/send.png'
import saved from '../../../images/save-instagram.png'
import arrow from '../../../images/arrow (1).png'







export const Posts = () => {

    const images = [
        {id: 1, url: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {id: 2, url: 'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        {id: 3, url: 'https://images.pexels.com/photos/164769/pexels-photo-164769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    ]

    const [ind, setInd] = React.useState(0)
    let imgs = images.length - 1
    console.log(imgs)

    const swipeSlide = () => {
        if(ind > imgs){
          setInd(0)
        }
        else if(ind < 0){
          setInd(imgs)
        }
      }

      const swipeLeft = () => {
        if(ind == 0){
          console.log('start')
        }else{
          setInd(ind - 1)
          swipeSlide()
        }
      }
    
      const swipeRight = () => {
        if(ind == imgs){
          console.log('end')
        }else{
          setInd(ind + 1)
          swipeSlide()
        }
      }


    return (
        <div className="posts">
            <div className="posts__post">
                <div className="posts__user">
                    <div className="user__icon"></div>
                    <div className="user__username">Abi</div>

                </div>
                <div className="posts__slider">
                    <div 
                    style={{
                        transform: `translateX(${-ind * 100}%)`
                    }}
                    className="posts__slide">
                        {
                            images.map(img => (
                                <img src={img.url} alt="" />
                            ))
                        }
                    </div>
                    <img src={arrow} 
                    style={{
                        visibility: ind == 0 ? 'hidden' : 'visible'
                    }}
                    onClick={swipeLeft} className='posts__left' />
                    <img src={arrow}
                    style={{
                        visibility: ind == imgs ? 'hidden' : 'visible'
                    }}
                    onClick={swipeRight} className='posts__right' />
                </div>
                <div className="posts__icons">
                    <div>
                    <img src={like}  alt="" />
                    <img src={comment} alt="" />
                    <img src={send} alt="" />
                    </div>
                    <img src={saved} alt="" />
                </div>
                <div className="post__info"></div>
                <div className="post__comments"></div>
            </div>
        </div>
    )
}
