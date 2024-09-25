import React from 'react'
function Navbar() {
  return (
    <div className='w-full h-20 mx-auto sticky top-0 bg-bodyColor flex justify-between items-center border-b-[1px] border-b-[#939597]'>
        <div className='flex items-center'>
            <span className='italic font-bold text-designColor text-5xl'>U</span>
            <span className='italic font-bold text-lightText text-3xl'>NI</span>
            <span className='italic font-bold text-designColor text-5xl'>K</span>
        </div>
        <div>
            <ul className="flex justify-center items-center space-x-8">
                <li className='cursor-pointer hover:text-designColor duration-300'>Home</li>
                <li className='cursor-pointer hover:text-designColor duration-300'>Projects </li>
                <li className='cursor-pointer hover:text-designColor duration-300'>Resume</li>
                <li className='cursor-pointer hover:text-designColor duration-300'>Contact</li>
                <li className='cursor-pointer hover:text-designColor duration-300'>Home</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
