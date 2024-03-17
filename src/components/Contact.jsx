import React from 'react'

const Contact = () => {

  const handleClick = (contact) => {
    switch(contact) {
      case 'whatsapp':
        window.open('https://wa.me/+917488230355', '_blank');
        break;
      case 'gmail':
        window.open('mailto:madhukarbabulal5@gmail.com', '_blank');
        break;
      default:
        break;
    }
  }


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
            Send
          </button>
        </form>
      </div>
      <div className="socialMedia">
          <button className="whatsapp" onClick={() => handleClick('whatsapp')}>WhatsApp
            <p>+917488230355</p>
          </button>
          <button className="gmail" onClick={() => handleClick('gmail')}>Gmail
            <p>madhukarbabulal5@gmail.com</p>
          </button>
        </div>
    </div>
  )
}

export default Contact;