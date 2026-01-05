import React from 'react'
import Video from '../componets/home/Video'
import HomeHeroText from '../componets/home/HomeHeroText'
import HomeBottomText from '../componets/home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
