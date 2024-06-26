import React from 'react'
import './Content.scss'
import { UserStories } from '../UserStories'
import { Posts } from '../Posts'
import { Recommend } from '../Recommendations'

export const Content = () => {
  return (
    <>
        <div className="content">
            <UserStories/>
            <Posts/>
        </div>
    </>
  )
}
