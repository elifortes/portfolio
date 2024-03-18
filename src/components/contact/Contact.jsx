import React, { useState } from 'react';
import './Contact.css';
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
<section id='contact' className='contact'>
  <div className='container contact__container'>
    <form ref={form} onSubmit={sendEmail} className='contact__form'>
      <input type='text' name='name' placeholder='Your Full Name*' required className='contact__input' />
      <input type='email' name='email' placeholder='Your Email*' required className='contact__input' />
      <textarea name='message' rows='10' placeholder='Your Message*' required className='contact__textarea'></textarea>
      {showSuccessMessage && <div className="contact__success-message">Your message has been successfully sent, I will get back to you ASAP!</div>}
      <button type='submit' className='contact__button'>Send Message</button>
    </form>
    <div className='contact__image-container'>
      <img className='contact__image' src={Girl} alt='Girl coding'></img>
    </div>
  </div>
</section>

  );
}

export default Contact;
