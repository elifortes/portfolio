import React from 'react';
import './projects.css';
import { FaGithub } from "react-icons/fa";
import ImagesProject from '../../assets/project-images/csscourse.png';


const Projects = () => {
  return (
    <section id='projects'>
      <h2>Software Development</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <h3>UHost(fictional business)</h3>
          <h4>A website that demonstrate the use modern CSS features, such as Flexbox and CSS grid.</h4>

          <div className='portfolio_item-image'>
          <a href='https://elifortes.github.io/CSS-course/'>

          <img src={ImagesProject} alt='' />

          </a>

          <a href='https://github.com/elifortes/CSS-course.git' target='_blank'><FaGithub style={{color:'black'}}/></a>



          </div>
        </article>

      </div>


    </section>
  );
}

export default Projects;
