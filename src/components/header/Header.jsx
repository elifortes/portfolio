import React from 'react';
import './Header.css';
import CV from '../../assets/download/CV.pdf';
import ElianePic from '../../assets/images/profile-pic.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const CTA = () => {
  return (
    <div className='header__cta'>
      <a href={CV} download className='btn header__btn'>Download Resume</a>
      <a href='#contact' className='btn header__btn'>Let's Talk</a>
    </div>
  )
}

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank' rel="noreferrer" className='header__social-link'> <FaLinkedin/> </a>
      <a href='https://github.com' target='_blank' rel="noreferrer" className='header__social-link'> <FaGithub /> </a>
    </div>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <h4>Hello, I'm</h4>
        <h1>Eliane Fortes </h1>
        <h4 className='header__text-light'>Software Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className='header__pic'>
          <img src={ElianePic} alt='Eliane Fortes' />
        </div>
      </div>
    </header>
  );
}

export default Header;
