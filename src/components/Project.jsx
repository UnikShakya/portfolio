import React from 'react'
import ProjectCards from './ProjectCards'

function Project() {
  return (
    <section id='project' className='w-full h-auto py-12 border-b-[1px] border-b-designColor'>
      <h1 className='text-5xl font-bold capitalize text-[#D1D5DB] text-center'>Projects</h1>
      <div className='grid grid-cols-3 gap-20'>
        <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards/>
        <ProjectCards/>
        <ProjectCards/>
        <ProjectCards/>
        <ProjectCards/>
      </div>
        </section>

  )
}

export default Project
