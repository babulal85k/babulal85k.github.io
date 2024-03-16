import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/mvoegwnv" method="post" id="contactForm">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter  Your Name..."
            name="name"
            required=""
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email Adress..."
            name="email"
            required=""
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your massage"
            rows={4}
            required=""
            defaultValue={""}
          />
          <button type="submit" id="sub">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;