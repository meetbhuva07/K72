import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5 '>
      <div className="border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] h-44 flex items-center border-white rounded-full px-14 uppercase">
        <Link className='text-[6vw] mt-6' to='/project'>Project</Link>
      </div>
      <div className="hover:border-[#d3fd50] hover:text-[#d3fd50] border-3 h-44 flex items-center border-white rounded-full px-14 uppercase">
        <Link className='text-[6vw] mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
