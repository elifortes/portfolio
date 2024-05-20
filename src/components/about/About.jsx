import React from 'react';
import './About.css';
import AboutMe from '../../assets/images/about.png';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='container about__container'>
          <div className='about__image'>
            <img src={AboutMe} alt='About me' className='about__img'/>
          </div>
        <div className='about__content'>
          <h2 className='about__header'> More about me </h2>
          <p className='about__text'>
            As an eternal learner, always fueled by curiosity and a firm belief that nothing is out of reach—it just hasn't been achieved yet.
            When I'm not immersed in learning new things, you might catch me on the tennis court, or taking walks with my trusty golden retriever.
            I have a deep appreciation for the simplicity and beauty of nature.
            Get in touch :) Let's talk about this role you have in your company!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
