import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer__name">
        <h2>Eliane Fortes</h2>
      </div>

      <ul className="footer__permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#software">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copy">
        <small>&copy; All rights are reserved | 2024 | Made with 💖 by Eliane Fortes.</small>
        <a href="https://linkedin.com"><FaLinkedin /></a>
        <a href="https://github.com"><FaGithub /></a>
      </div>

    </footer>
  )
}

export default Footer;
