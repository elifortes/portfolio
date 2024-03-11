import React, { useState } from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rpwt8ua', 'template_g0teo4y', form.current, 'YitBCP1i8stJ91RGg')
      .then((result) => {
          console.log('SUCCESS!');
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.log('FAILED...');
        },
);
  };


  return (
    <section id='contact'>
      <div className='container contact_container'>
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name*' required />
        <input type='email' name='email' placeholder='Your Email*' required />
        <textarea name='message' rows='10' placeholder='Your Message*' required />
        <button type='submit' className='btn'>Send Message</button>
        {submitted && <p className='sucess-message'>Your message has been successfully sent, I will get back to you ASAP!</p>}

        </form>
      </div>
    </section>
  );
}

export default Contact;
