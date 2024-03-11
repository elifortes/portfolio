import React from 'react';
import './footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Pic from '../../assets/ilustrations/wave.png';


const Footer = () => {
  return (
    <footer>
    <div className='footer_image'>
      <img src={Pic} alt=''></img>
    </div>
      <div className='footer_name'>
        <h2>Eliane Fortes</h2>
      </div>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_copy'>
      <small>&copy;  All rights are reserved | 2024 | Made with 💖 by Eliane Fortes. </small>
        <a href='https://linkedin.com'><FaLinkedin style={{color: 'black'}}/></a>
        <a href='https://github.com'><FaGithub style={{color:'black'}}/></a>
      </div>

    </footer>
  )
}

export default Footer;
