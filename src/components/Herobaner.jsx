import React from 'react'

function Herobaner() {
  return (
    <div>
         <div className='flex gap-4'>
      <div className=' p-32 pl-12 flex flex-col gap-4 font-sans '> 
        <p className='text-2xl text-[#FF2625] font-bold max-[640px]:font-semibold' >Fitness Club</p>
        <div className='text-5xl font-semibold leading-normal max-[640px]:text-2xl'>
          <p>Sweat,Smile</p>
          <p>And Repeat</p>
        </div>
        <p className='text-xl  max-[640px]:text-md'>Check out the most effective exercises personalized to you</p>
        <div>
          <button className='bg-[#FF2625]  p-2 rounded-md pl-3 pr-3 text-white text-xl mt-2'>Explore Exercises</button>
        </div>
      </div>
      <div className='absolute flex hidden xl:flex -top-9 left-[45%]'>
        <img src="/public/mainpic.png" className='h-[75%] w-[90%] '  alt="" />
      </div>
    
    </div>




    </div>
  )
}

export default Herobaner