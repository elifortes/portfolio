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
              I’m a customer-focused professional with over 7 years of
              experience in customer service and a background in business
              and data analytics.

              I enjoy connecting with people, understanding their needs
              and finding practical solutions. My analytical background
              allows me to approach challenges with curiosity, empathy
              and a problem-solving mindset.

              I hold a Bachelor’s degree in Business Administration,
              have studied Data Analytics at General Assembly and am
              an AWS Certified Cloud Practitioner.

              Outside work, you’ll find me on the tennis court or
              walking my golden retriever.

              Let’s connect!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
