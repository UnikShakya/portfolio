import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/banner/Banner'
import Project from './components/Project'

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
    <div className='max-w-screen-xl mx-auto' >
      <Navbar />
      <Banner/>
      <Project/>
    </div>

    </div>
  )
}

export default App
