import React from 'react'
import recipe from "../assets/recipe.jpeg"; // Adjust according to your file's actual name and extension
import { BsGithub } from 'react-icons/bs';
import { BiLogoGithub } from 'react-icons/bi';
function ProjectCards({title}) {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
      <img className='w-full h-60 object-cover hover:scale-110 duration-300 cursor-pointer' src={recipe} alt="" />
        </div>
        <div>
            <div className='w-full mt-5'>
            <h3>{title}</h3>
            <div>
            <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover: text-designColor duration-300 cursor-pointer'><BiLogoGithub/></span>
        </div>
            </div>

            </div>

    </div>
  )
}

export default ProjectCards
