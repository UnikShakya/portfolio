import React from 'react'
import contactimg from "../assets/contact.png"
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
function ContactLeft() {
  return (
            <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 shadow-shadowOne rounded-lg flex flex-col gap-8 justify-center'>
                    <img className='w-full h-64 object-cover rounded-lg' src={contactimg} alt="" />
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-3xl font-bold text-white'>Unique Shakya</h3>
                        <p className='text-lg font-normal text-gray-200'>Frontend Developer</p>
                        <p className='text-base text-gray-200 tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quas quis suscipit in ex quibusdam?</p>
                        <p className='text-base text-gray-400 flex items-center gap-3'>Phone: <span className='text-lightText'>+977 9847693340</span></p>
                        <p className='text-base text-gray-400 flex items-center gap-3'>Email: <span className='text-lightText'>shakyaunik123@gmail.com</span></p>
                    </div>
                    <div>
                        <h2 className='text-base uppercase mb-4'>Contact with me in</h2>
                        <div className='flex gap-4'>
            <span className='bannerIcon'>
                <FaFacebookF/>
                </span>
                <span className='bannerIcon'>
                <FaInstagram/>
                </span>
                <span className='bannerIcon'>
                <BsLinkedin/>
                </span>
        </div>
     
                    </div>
    </div>
  )
}

export default ContactLeft
