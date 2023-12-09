import React from 'react'
import "../cssClass/IntroPage.css"
import VideoPlayer from './VideoPlayer';

const MiddleBar = () => {
  function changeState() {
    console.log("changeState");
  }
  return (
    <div className='outerHeader'>
        <div className='introHeader'>
          <div  style={{"marginRight":"70px", fontSize:"15px", borderRadius:"20px", border:"2px pink", display:"flex", alignItems:"center" }}>
              <div onClick={changeState} className='hamburger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
              </div>
              <h1>
                  01. Lesson Introduction
              </h1>
          </div>
        </div>
        <div style={{marginLeft:"10px", fontSize:"30px", marginTop:"10px"}}>Lesson Introduction</div>
        <VideoPlayer/>
        <hr style={{ borderTop: '1px dotted #000', 
            width: '100%',
            margin: '10px 0',}}/>
        <div style={{marginLeft:"10px"}}>
          <h2 style={{fontSize:"1rem"}}>Lesson 1: Blockchain Basics</h2>
          <p style={{marginBottom:"10px"}}>
            In Lesson 1: Blockchain Basics we'll cover the basics of Blockchain and are introduced to topics like Bitcoin to begin creating your very own blockchain identity.

            Things like blocks, hash values, memory pools, consensus, and more will all be introduced, defined, and added to your understanding of the blockchain!
          </p>

          <h2 style={{fontSize:"1rem"}}>Project</h2>
          <p style={{marginBottom:"10px"}}>
            This lesson will also help prepare you for the project, where you'll create and manage your own blockchain identity. Feel free to check out this project to better understand what you'll be working on.
          </p>


          <h2 style={{fontSize:"1rem"}}>Get Started</h2>
          <p style={{marginBottom:"10px"}}>
            When you're ready, join us in the next section as we get started with the Blockchain Basics!
          </p>

        
        </div>
    </div>
  )
}

export default MiddleBar