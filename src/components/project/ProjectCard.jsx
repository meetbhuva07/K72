import React from 'react'

const ProjectCard = (props) => {
  return (
     <div className='w-full h-200 flex mb-4 gap-4  '>
          
        <div className='w-1/2 group relative transition-all rounded-none h-full hover:rounded-[50px] overflow-hidden '>
          <img className='h-full object-cover ' src={props.image1} alt="" />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
            <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le  projets</h2>
          </div>
        </div>
        <div className='w-1/2 group relative transition-all rounded-none h-full hover:rounded-[50px] overflow-hidden '>
          <img className='h-full object-cover '  src={props.image2} alt="" />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
            <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le  projets</h2>
          </div>
        </div>
        
        </div>
  )
}

export default ProjectCard
