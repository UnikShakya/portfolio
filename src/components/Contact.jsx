import React, { useState } from 'react'

import ContactLeft from './ContactLeft'
function Contact() {

    const [username, setUsername]= useState("");
    const [phonenumber, setPhonenumber]= useState("");
    const [email, setEmail]= useState("");
    const [subject, setSubject]= useState("");
    const [message, setMessage]= useState("");
    const [errMsg, setErrMsg]= useState("");
    const [successMsg, setSuccessMsg]=useState("");

    const handleSend = (e)=>{
        e.preventDefault();
        if(username === ""){
            setErrMsg("username is required!");
        }
        else if(phonenumber === ""){
                setErrMsg("phonenumber is required!");
                }
        else if(email === ""){
            setErrMsg("email is required!");
        }
        else if(subject === ""){
            setErrMsg("subject is required!");
        }
        else if(message === ""){
            setErrMsg("message is required!");
        }
        else{
            setSuccessMsg("Message sent successfully!");
            setErrMsg("")
            setUsername("")
            setPhonenumber("")
            setEmail("")
            setSubject("")
            setMessage("")
        }
        }
    

  return (
    <section id="contact" className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
      <h1 className='text-5xl font-bold capitalize text-[#D1D5DB] text-center'>Contacts</h1>
      </div>
      <div className='w-full'>
            <div className='w-full h-auto flex justify-between'>
                <ContactLeft/>
            <div className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1b1d20] to-[#212427] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne'>
                <form className='w-full flex flex-col gap-6 py-2'>
                    <div className='w-full flex gap-8'>

                    <div className='w-1/2 flex flex-col gap-2'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name:</p>
                        <input onChange={(e)=>setUsername(e.target.value)} value={username} className='contactInput' type="text" />
                    </div>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number:</p>
                        <input onChange={(e)=>setPhonenumber(e.target.value)} className='contactInput' type="text" />
                    </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Email:</p>
                        <input onChange={(e)=>setEmail(e.target.value)} className='contactInput' type="email" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject:</p>
                        <input onChange={(e)=>setSubject(e.target.value)} className='contactInput' type="text" />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Message:</p>
                        <textarea onChange={(e)=>setMessage(e.target.value)} className='contactTextarea' rows="8" cols="30"></textarea>
                    </div>
                    </div>
                    <div className='w-full'>
                        <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-lightText border-transparent'>Send Message</button>
                    </div>
                </form>
                 </div>
            </div>
      </div>
    </section>
  )
}

export default Contact
