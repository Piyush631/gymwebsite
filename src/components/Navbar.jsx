import React from 'react'

function Navbar() {
  return (
    <div className=' relative flex gap-16 p-8'>
      <div className='logo'>
        <img src='/public/logo.png'/>

      </div>
      <div className=' flex gap-12 items-center text-xl max-sm:gap-8'> 
      <p>Home</p>
      <p>Exercise</p>
      </div>

    </div>
  )
}

export default Navbar