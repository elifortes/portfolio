import React from 'react';
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { SlUserFemale } from "react-icons/sl";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><IoHomeOutline/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><PiProjectorScreenChartLight/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SlUserFemale/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav;
