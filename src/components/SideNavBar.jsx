import React from 'react'

const SideNavBar = () => {
  return (
    <div className='SideNavBar'>
      <div style={{justifyItems:"center", padding:"30px", fontSize:"30px"}}>
          Blockchain Basics
        <h6>Back to Home</h6>
      </div>
      <div className='separatorline'></div>
      <div style={{marginLeft:"1px"}}>
        {/* <ul>
          <li style={{padding:"10px", display:"block", fontSize:"1rem"}}>Hey There</li>
        </ul> */}
        <div style={{padding:"3px", fontSize:"25px", alignItems:"center"}}>01. Lesson Introduction</div>
      </div>
      
    </div>
  )
}

export default SideNavBar