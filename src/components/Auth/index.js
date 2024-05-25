import React from 'react'
import './Auth.scss'
import phoneV from '../../images/image.png'
import gP from '../../images/google-play.png'
import micS from '../../images/microsoft-downl.png'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'


export const Auth = () => {
    const showRegistered = React.useState(true)

    return (
      <>
        <div className="auth">
          
            {/* <img src={phoneV} style={{
              height: '95%',
              width: '400px',
              objectFit: 'cover',
            }}/> */}
          
            <div className="auth__modal">
              { showRegistered == false? 
                <>
                  <SignIn/>
                  <div className="auth__signUp-link">
                      <span>Don't have an account yet?<a href="">register</a></span>
                  </div>
                </>:
                <>
                  <SignUp/>
                  <div className="auth__signIn-link">
                      <span>Have an account?<a href="">enter</a></span>
                  </div>
                </>
              }
                <div className="auth__installApps">
                  <span>Установите приложение.</span>
                      <div>
                          <img src={gP} alt="" />
                          <img src={micS} alt="" />
                      </div>
                </div>
            </div>
        </div>
      </>
    )
}
