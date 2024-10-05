import React from 'react'
import ProjectCards from './ProjectCards'
import { Element } from 'react-scroll'

function Project() {
  return (
    <Element name="project">
    <section className='w-full h-auto py-12 border-b-[1px] border-b-designColor'>
      <h1 className='text-4xl md:text-5xl font-bold capitalize text-[#D1D5DB] text-center pb-4'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards title="Recipe Sharing app"/>
      </div>
        </section>
        </Element>

  )
}

export default Project
