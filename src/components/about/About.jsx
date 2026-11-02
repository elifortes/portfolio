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
            I’m a Data Analyst with a background in business analysis in the automotive industry.
            I’ve studied data analytics at General Assembly and Le Wagon and hold the AWS Cloud Practitioner certification.
            I enjoy turning messy data into clear answers that help businesses make better decisions.
            Outside work, you’ll find me on the tennis court or walking my golden retriever.
            Let’s talk!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
