import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Element } from 'react-scroll'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
function Home() {
  const [text] = useTypewriter({
    words: ['UI/UX Designer', 'Frontend Developer'],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 10,
    delaySpeed: 2000

  })
  return (
    <Element name="home">
      <section className='w-full max-w-[1280px] mx-auto pt-10 pb-20 border-b-[1px] border-b-designColor flex flex-col gap-10 lgl:gap-10 justify-center lgl:flex-row items-center'>

        <div className='flex flex-col gap-10 px-4 md:px-8'>
          <div className='flex flex-col gap-5'>
            <h4 className='text-base sm:text-lg'>
              Welcome to my Portfolio.
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
            <p className='text-sm sm:text-base text-justify leading-6 tracking-wide'>
              I’m a front-end developer who enjoys creating clean, responsive, and user-friendly websites. I have a strong interest in web design and development, and I work with technologies like React.js, Tailwind CSS, and JavaScript. I’m always eager to learn and improve, and I enjoy finding simple solutions to complex problems.
            </p>
          </div>

          <div className='flex flex-col gap-6 sm:items-center sm:text-center md:items-start md:text-left'>
            <h2 className='text-lg'>CONTACT WITH ME IN</h2>
            <div className='flex gap-4 sm:justify-center mdl:justify-start'>
              <span className='bannerIcon'><a href="https://www.facebook.com/unik.shakyea" target='_blank'>
                <FaFacebookF /></a></span>
              <span className='bannerIcon'><a href="https://www.instagram.com/tuturuu_11/" target='_blank'><FaInstagram /></a></span>
              <span className='bannerIcon'><a href="https://www.linkedin.com/in/unique-shakya-695133279/" target='_blank'><FaLinkedin /></a></span>
            </div>
          </div>


        </div>
      </section>
    </Element>

  )
}

export default Home
