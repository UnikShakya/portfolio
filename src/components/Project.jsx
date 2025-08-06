import React from 'react'
import ProjectCards from './ProjectCards'
import { Element } from 'react-scroll'
import recipe from "../assets/recipe.jpeg"
// import netflix from "../assets/netflix.png"
import VehicleParking from "../assets/vehicleParking.jpg"
import trello from "../assets/trello.png"


function Project() {
  return (
    <Element name="project">
    <section className='w-full h-auto py-12 border-b-[1px] border-b-designColor'>
      <h1 className='text-4xl md:text-5xl font-bold capitalize text-[#D1D5DB] text-center pb-4'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCards title="Recipe Sharing app" image={recipe} description="A web app to explore, share, and save recipes. Discover new dishes, create your own collections, and share your cooking with others." url="https://github.com/UnikShakya/RecipeSharingApp"/>
        <ProjectCards title="Trello Project" image={trello} description="A streamlined task and collaboration tool with Trello-inspired boards, drag-and-drop lists, and interactive cards featuring labels and assignable members." url="https://github.com/UnikShakya/My-Trello"/>
        <ProjectCards title="Vehicle Parking System" image={VehicleParking} description="A vehicle parking system that lets users find, reserve, and track parking spaces in real-time for a smoother parking experience." url="https://github.com/UnikShakya/Online_Parking_System"/>
        {/* <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards title="Recipe Sharing app"/>
        <ProjectCards title="Recipe Sharing app"/> */}
      </div>
        </section>
        </Element>

  )
}

export default Project
