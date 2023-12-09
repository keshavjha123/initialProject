import React from 'react'
import SideNavBar from '../components/SideNavBar'
import MiddleBar from '../components/MiddleBar'
import "../cssClass/IntroPage.css"

const IntroPage = () => {
  return (
    <div className="IntroPage">
      <SideNavBar/>
      <MiddleBar/>
    </div>
  )
}

export default IntroPage