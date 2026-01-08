import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] py-5 text-center'>
      <div className='text-[9.5vw] uppercase  justify-center flex items-center leading-[8vw]'>The spark for</div>
      <div className='text-[9.5vw] uppercase justify-center flex items-satrt leading-[8vw]'>
        all <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'> <Video /> </div> things</div>
      <div className='text-[9.5vw] uppercase justify-center flex items-center leading-[8vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText
