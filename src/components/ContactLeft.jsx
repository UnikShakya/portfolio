import React from 'react'
import contactimg from "../assets/contact.png"
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
function ContactLeft() {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 lgl:p-8 shadow-shadowOne rounded-lg flex flex-col gap-8 justify-center'>
      <img className='w-full h-64 object-cover rounded-lg' src={contactimg} alt="" />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>Unique Shakya</h3>
        <p className='text-lg font-normal text-gray-200'>Frontend Developer</p>
        <p className='text-base text-gray-200 tracking-wide'>I'm currently available to take on new projects, so feel free to contact me that you want me to work. You can contact anytime.</p>
        <p className='text-base text-gray-400 flex items-center gap-3'>Phone: <span className='text-lightText'>+977 9847693340</span></p>
        <p className='text-base text-gray-400 flex items-center gap-3'>Email: <span className='text-lightText'>shakyaunik123@gmail.com</span></p>
      </div>
      <div className='flex flex-col gap-6 sm:items-center sm:text-center md:items-start md:text-left'>
        <h2 className='text-base uppercase'>Contact with me in</h2>
        <div className='flex gap-4'>
          <a href="https://www.facebook.com/unik.shakyea/" target='_blank'>

            <span className='bannerIcon'>
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.instagram.com/tuturuu_11/" target='_blank'>

            <span className='bannerIcon'>
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/unique-shakya-695133279/" target='_blank'>

            <span className='bannerIcon'>
              <BsLinkedin />
            </span>
          </a>
        </div>

      </div>
    </div>
  )
}

export default ContactLeft
