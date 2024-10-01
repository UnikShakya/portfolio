import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/banner/Banner'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FooterBotttom from './components/FooterBotttom'

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
    <div className='max-w-screen-xl mx-auto' >
      <Navbar />
      <Banner/>
      <Project/>
      <Contact/>
      <Footer/>
      <FooterBotttom/>
    </div>

    </div>
  )
}

export default App
