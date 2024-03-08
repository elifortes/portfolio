import React from 'react';
import './header.css';
import CTA from './CTA';
import MeImage from '../../assets/ilustrations/me.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h4>Hello, I'm</h4>
        <h1>Eliane Fortes</h1>
        <h4 className='text-light'>Software Developer</h4>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={MeImage} alt='' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
