import React, { useState } from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Girl from '../../assets/project-images/girl.png';

const Contact = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rpwt8ua', 'template_g0teo4y', form.current, 'YitBCP1i8stJ91RGg')
      .then((result) => {
          console.log('SUCCESS!');
          setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <section id='contact'>
      <div className='container contact_container'>
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name*' required />
        <input type='email' name='email' placeholder='Your Email*' required />
        <textarea name='message' rows='10' placeholder='Your Message*' required />
        <button type='submit' className='btn-contact'>Send Message</button>
        {showSuccessMessage && <div className="success-message">Your message has been successfully sent, I will get back to you ASAP!</div>}
        </form>
        <div className='girl_pic_container'>
          <img className='girl_pic' src={Girl} alt='Girl coding'></img>
        </div>
      </div>
    </section>
  );
}

export default Contact;
