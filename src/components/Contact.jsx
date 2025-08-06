import React, { useState } from 'react';
import ContactLeft from './ContactLeft';

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const phoneValidation = (phone) => {
    // Strict 10-digit validation for Nepali numbers (example: 9847693340)
    return /^[9][0-9]{9}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For phone number, only allow numbers and limit to 10 digits
    if (name === "phonenumber") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    // Destructure form data
    const { username, phonenumber, email, subject, message } = formData;

    // Form validation
    if (!username.trim()) {
      setErrMsg("Username is required!");
      return;
    }
    if (!phonenumber.trim()) {
      setErrMsg("Phone number is required!");
      return;
    }
    if (!phoneValidation(phonenumber)) {
      setErrMsg("Please provide a valid 10-digit phone number");
      return;
    }
    if (!email.trim()) {
      setErrMsg("Email is required!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email.");
      return;
    }
    if (!subject.trim()) {
      setErrMsg("Subject is required!");
      return;
    }
    if (!message.trim()) {
      setErrMsg("Message is required!");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "93bbedf5-801c-4e52-a7c8-c15e3683a521",
          name: username,
          phone: phonenumber,
          email: email,
          subject: subject,
          message: message
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMsg("Message sent successfully!");
        setFormData({
          username: "",
          phonenumber: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setErrMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrMsg("Failed to send the message. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="w-full py-12 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold capitalize text-[#D1D5DB] text-center">
          Contact Me
        </h1>
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1b1d20] to-[#212427] flex flex-col gap-8 p-6 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-8">
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name:</p>
                  <input
                    onChange={handleChange}
                    value={formData.username}
                    className="contactInput"
                    type="text"
                    name="username"
                    aria-label="Your Name"
                    required
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number:</p>
                  <input
                    onChange={handleChange}
                    value={formData.phonenumber}
                    className="contactInput"
                    type="tel"
                    name="phonenumber"
                    aria-label="Phone Number"
                    pattern="[9]{1}[0-9]{9}"
                    title="Please enter a valid 10-digit phone number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Email:</p>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    className="contactInput"
                    type="email"
                    name="email"
                    aria-label="Email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Subject:</p>
                  <input
                    onChange={handleChange}
                    value={formData.subject}
                    className="contactInput"
                    type="text"
                    name="subject"
                    aria-label="Subject"
                    required
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Message:</p>
                  <textarea
                    onChange={handleChange}
                    value={formData.message}
                    className="contactTextarea"
                    rows="8"
                    cols="30"
                    name="message"
                    aria-label="Your Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-lightText border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && <p className="text-red-500 py-2 text-center">{errMsg}</p>}
              {successMsg && <p className="text-green-500 py-2 text-center">{successMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;