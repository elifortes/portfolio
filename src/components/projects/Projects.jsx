import React from 'react';
import './projects.css';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import IMGCSS from '../../assets/project-images/csscourse.png';
import IMGBOAT from '../../assets/project-images/boat.png';
import Filter01 from '../../assets/project-images/filter.png';


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
              <img src={IMGCSS} alt='' style={{width:'250px', height:'auto'}} />
              </a>
              <div className='portfolio_item-cta'>
                <a href='https://github.com/elifortes/CSS-course.git' target='_blank'><FaGithub style={{color:'black'}}/></a>
                <h5>JS CSS Flexbox Grid</h5>
              </div>
            </div>
        </article>


        <article className='portfolio_item'>
          <h3>Airbnb Boat(fictional business)</h3>
          <h4>Is a conceptual project that illustrates a modern platform for renting boats.</h4>

            <div className='portfolio_item-image'>
            <a href='https://github.com/elifortes/Airbnb-Boat.git'>
            <img src={IMGBOAT} alt='' style={{width:'250px', height:'auto'}} />
            </a>
              <div className='portfolio_item-cta'>
                <a href='https://github.com/elifortes/Airbnb-Boat.git' target='_blank'><FaGithub style={{color:'black'}}/></a>
                <h5>Ruby-on-Rails JS Bootstrap Heroku</h5>
              </div>
            </div>
        </article>
      </div>

      <h2>Digital Creativity</h2>
      <div className='portfolio_container-filter'>
        <article className='portfolio_item-filter'>
            <h3>Instagram Filters</h3>
            <h4>Showcasing engaging and interactive Instagram filters created with Spark AR Studio.</h4>
          <div className='portfolio_item-image-filter'>
              <a href='https://www.instagram.com/ar/1616459879160433/'>
              <img src={Filter01} alt='' style={{width:'250px', height:'auto'}} />
              </a>
            <div className='portfolio_item-cta'>
                <a href='https://www.instagram.com/ar/1616459879160433/' target='_blank'><FaInstagram style={{color:'black'}}/></a>
                <h5>Canva Spark-AR-Studio Photoshop JS </h5>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
