import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://linkedin.com' target='_blank'> <FaLinkedin style={{color: 'black'}}/></a>
      <a href='https://github.com' target='_blank'><FaGithub style={{color:'black'}}/></a>
    </div>
  )
}

export default HeaderSocials;
