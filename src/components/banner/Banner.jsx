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
    <section 
  id='home' 
  className='w-full max-w-[1280px] mx-auto pt-10 pb-20 border-b-[1px] border-b-designColor flex flex-col gap-10 lgl:gap-10 justify-center lgl:flex-row items-center'>
  
  <div className='flex flex-col gap-12 px-4 md:px-8'>
    <div className='flex flex-col gap-4'>
      <h4 className='text-base sm:text-lg'>
        Welcome to my World
      </h4>
      <h1 className='text-4xl sm:text-4xl lgl:text-5xl font-bold text-white'>
        Hi I 'am <span className='capitalize text-designColor'>Unique Shakya</span>,
      </h1>
      <h2 className='text-2xl sm:text-4xl lgl:text-5xl font-bold text-white'>
        a <span>{text}</span> 
        <Cursor
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor="#FF014F"
        />
      </h2>
      <p className='text-sm sm:text-base leading-6 tracking-wide'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error atque magnam quidem magni tenetur modi aut tempore nulla omnis, excepturi, quibusdam officia blanditiis qui nihil, rerum distinctio ex dolorem iusto?
      </p>
    </div>

    <div className='flex flex-col gap-8 sm:items-center sm:text-center mdl:items-start mdl:text-left'>
  <h2 className='text-lg'>CONTACT WITH ME IN</h2>
  <div className='flex gap-4 sm:justify-center mdl:justify-start'>
    <span className='bannerIcon'><FaFacebookF/></span>
    <span className='bannerIcon'><FaInstagram/></span>
    <span className='bannerIcon'><FaLinkedin/></span>
  </div>
</div>


  </div>
</section>

  )
}

export default Banner
