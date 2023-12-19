import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt--96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold p-0'>Evolve swiftly </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with us</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl text-[#00df9a] font-bold py-4'>
            Learn Wth US
          </p>
          </div>
          <p className='md:text-2xl text-xl font-bold text-white'>We help businesses imagine and create the digital experiences of tomorrow. We succeed together, through the fusion of startup agility, enterprise standards, and world-class engineering.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
      
    </div>
  )
}

export default Hero