import React, { useState } from 'react'
import { Link } from 'react-scroll';  // Import Link from react-scroll
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='w-full h-20 mx-auto sticky z-10 top-0 bg-bodyColor flex justify-between items-center border-b-[1px] border-b-[#939597]'>
      <div className='flex items-center'>
        <span className='italic font-bold text-designColor text-5xl'>U</span>
        <span className='italic font-bold text-lightText text-3xl'>NI</span>
        <span className='italic font-bold text-designColor text-5xl'>K</span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex justify-center items-center gap-6 lg:gap-12">
          <li className='cursor-pointer text-gray-400 text-base tracking-wide hover:text-designColor duration-300'>
            <Link to="home" smooth={true} duration={500} offset={-80}>Home</Link>
          </li>
          <li className='cursor-pointer text-gray-400 text-base tracking-wide hover:text-designColor duration-300'>
            <Link to="project" smooth={true} duration={500} offset={-80}>Projects</Link>
          </li>
          
          <li className='cursor-pointer text-gray-400 text-base tracking-wide hover:text-designColor duration-300'>
            <Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link>
          </li>

        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className='text-2xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'><FiMenu /></span>
      </div>
      {
        showMenu && (
          <div className="absolute top-0 left-0 bg-gray-900 p-4 w-[80%] h-screen">
            <div className='flex flex-col gap-8 py-4 relative'>
              <div>
                <div className='flex items-center'>
                  <span className='italic font-bold text-designColor text-3xl'>U</span>
                  <span className='italic font-bold text-lightText text-xl'>NI</span>
                  <span className='italic font-bold text-designColor text-3xl'>K</span>
                </div>
                <p className='text-sm text-gray-400 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ratione.</p>
              </div>
              <ul className="flex flex-col gap-4 items-center">
                <li className='cursor-pointer text-gray-400 text-base tracking-wide hover:text-designColor duration-300'>
                  <Link to="home" smooth={true} duration={500} offset={-80} onClick={() => setShowMenu(false)}>Home</Link>

                </li>
                <li className='cursor-pointer text-gray-400 text-base tracking-wide hover:text-designColor duration-300'>
                  <Link to="project" smooth={true} duration={500} offset={-80}onClick={() => setShowMenu(false)}>Projects</Link>

                </li>

                <li className='cursor-pointer text-gray-400 text-base tracking-wide hover:text-designColor duration-300'>
                  <Link to="contact" smooth={true} duration={500} offset={-80}onClick={() => setShowMenu(false)}>Contact</Link>

                </li>

              </ul>
              <div className='flex flex-col gap-6 sm:items-center sm:text-center md:items-start md:text-left'>
                <h2 className='text-base uppercase'>Contact with me in</h2>
                <div className='flex gap-4'>
                  <span className='bannerIcon'>
                    <FaFacebookF />
                  </span>
                  <span className='bannerIcon'>
                    <FaInstagram />
                  </span>
                  <span className='bannerIcon'>
                    <BsLinkedin />
                  </span>
                </div>

              </div>
              <span onClick={() => setShowMenu(false)} className='hover:text-designColor cursor-pointer absolute top-4 right-4 text-2xl text-gray-400 duration-300'>
                <MdClose />
              </span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Navbar
