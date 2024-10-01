import React from 'react'
import logo from "../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8'>
      <div className='w-full h-full flex flex-col items-center gap-8'>
        <img className='w-16' src={logo} alt="" />
        <h2 className='uppercase'>Contact me in</h2>
        <div className='flex gap-4'>
            <a href="https://www.facebook.com/profile.php?id=100004135008248" target='_blank'> 
            <span className='bannerIcon'>
                <FaFacebookF/>
                </span>
                </a>
            <a href="https://www.instagram.com/tuturuu_11/">
                <span className='bannerIcon'>
                <FaInstagram/>
                </span>
            </a>
                <span className='bannerIcon'>
                <FaLinkedin/>
                </span>
        </div>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase font-semibold text-designColor tracking-wider'>Quick Link</h3>
        <ul className='flex flex-col gap-4 font-medium overflow-hidden py-6'>
            <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>About<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
            <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Portfolio<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
            <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Services<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
            <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Blog<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
            <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Contact<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
            
        </ul>
      </div>
      <div className='w-full h-full'>
      <h3 className='text-xl uppercase font-semibold text-designColor tracking-wider'>Resources</h3>

      <ul className='flex flex-col gap-4 font-medium overflow-hidden py-6'>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>System Status<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Terms of Service<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Pricing<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Over Right<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      </ul>
      </div>
      <div className='w-full h-full'>
      <h3 className='text-xl font-semibold uppercase text-designColor tracking-wider'>Developers</h3>

      <ul className='flex flex-col gap-4 font-medium overflow-hidden py-6'>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Documentation<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>API Reference<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Support<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      <li><span className='w-full hover:text-designColor cursor-pointer duration-300 relative group'>Open Source<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span></span></li>
      </ul>
      </div>
    </div>
  )
}

export default Footer
