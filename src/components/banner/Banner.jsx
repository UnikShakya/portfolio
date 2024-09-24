import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
function Banner() {
    const [text] = useTypewriter({
        words: ['UI/UX Designer','Frontend Developer'],
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delaySpeed: 2000
        
    })
  return (
    <section  className='w-full h-[80vh] border-b-[1px] border-b-designColor m-auto flex items-center justify-center'>
      <div className=''>
        <div className='flex flex-col gap-4'>
      <h4 className='text-lg'>
        Welcome to my World
      </h4>
      <h1 className='text-6xl font-bold text-[#fff]'>Hi I 'am <span className='capitalize text-designColor'>Unique Shakya</span>,</h1>
      <h2 className='text-4xl font-bold text-[#fff]'>a <span>{text} </span> <Cursor
       cursorBlinking="false"
        cursorStyle="|"
         cursorColor="#FF014F"
      /></h2>
      <p className='text-base leading-6 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque magnam quidem magni tenetur modi aut tempore nulla omnis, excepturi, quibusdam officia blanditiis qui nihil, rerum distinctio ex dolorem iusto? </p>
      <div>
        <h2 className='mt-9'>CONTACT WITH ME IN</h2>
        <div className='flex gap-4'>
            <span className='bannerIcon'>
                <FaFacebookF/>
                </span>
                <span className='bannerIcon'>
                <FaInstagram/>
                </span>
                <span className='bannerIcon'>
                <FaLinkedin/>
                </span>
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Banner
