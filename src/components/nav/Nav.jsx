import React, { useState } from 'react';
import './Nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { SlUserFemale } from "react-icons/sl";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className="nav">
      <a href="#" onClick={() => setActiveNav('#')} className={`nav__link ${activeNav === '#' ? 'nav__link--active' : ''}`}><IoHomeOutline/></a>
      <a href="#software" onClick={() => setActiveNav('#software')} className={`nav__link ${activeNav === '#software' ? 'nav__link--active' : ''}`}><PiProjectorScreenChartLight/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={`nav__link ${activeNav === '#about' ? 'nav__link--active' : ''}`}><SlUserFemale/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={`nav__link ${activeNav === '#contact' ? 'nav__link--active' : ''}`}><AiOutlineMessage/></a>
    </nav>
  );
};

export default Nav;
