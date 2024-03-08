import React from 'react';
import './about.css';
import AboutMe from '../../assets/ilustrations/about.png';


const About = () => {
  return (
    <section id='about'>
      <h2> About Me </h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={AboutMe} alt=''/>
          </div>
        </div>
        <div className='about_content'>
          <p>
            As an eternal learner, always fueled by curiosity and a firm belief that nothing is out of reach—it just hasn't been achieved yet.
            When I'm not immersed in learning new things, you might catch me on the tennis court, or taking walks with my trusty golden retriever.
            I have a deep appreciation for the simplicity and beauty of nature.
            Get in touch :) Let's talk about this Developer Role you have in your company!
          </p>
          <a href='#contact' className='btn'>Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default About;
