import React from 'react'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FooterBotttom from './components/FooterBotttom'
import Home from './components/banner/Home'

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
    <div className='max-w-screen-xl mx-auto' >
      <Navbar />
      <Home/>
      <Project/>
      <Contact/>
      <Footer/>
      <FooterBotttom/>
    </div>

    </div>
  )
}

export default App
