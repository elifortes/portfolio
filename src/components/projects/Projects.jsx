import React from 'react';
import './projects.css';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import IMGCSS from '../../assets/project-images/csscourse.png';
import IMGBOAT from '../../assets/project-images/boat.png';
import Filter01 from '../../assets/project-images/filter.png';

const data = [

  {
    id: 1,
    titleh3: 'UHost(fictional business)',
    titleh4: 'A website that demonstrate the use modern CSS features, such as Flexbox and CSS grid.',
    titleh5: 'JS CSS Flexbox Grid',
    image: IMGCSS,
    github: 'https://elifortes.github.io/CSS-course/',
    demo: 'https://github.com/elifortes/CSS-course.git',
  },
  {
    id: 2,
    titleh3: 'Airbnb Boat(fictional business)',
    titleh4: 'Is a conceptual project that illustrates a modern platform for renting boats.',
    titleh5: 'Ruby-on-Rails JS Bootstrap Heroku',
    image: IMGBOAT,
    github: 'https://github.com/elifortes/Airbnb-Boat.git',
    demo: 'https://github.com/elifortes/Airbnb-Boat.git',
  },
  {
    id: 3,
    titleh3: 'Gift Genius',
    titleh4: 'Its a app and blabla.',
    titleh5: 'bla',
    image: IMGBOAT,
    github: 'https://github.com/elifortes/Airbnb-Boat.git',
    demo: 'https://github.com/elifortes/Airbnb-Boat.git',
  },
  {
    id: 4,
    titleh3: 'Instagram Filters',
    titleh4: 'Showcasing engaging and interactive Instagram filters created with Spark AR Studio.',
    titleh5: 'Canva Spark-AR-Studio Photoshop JS',
    image: Filter01,
    github: 'https://www.instagram.com/ar/1616459879160433/',
    demo: 'https://www.instagram.com/ar/1616459879160433/',
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Software Development</h2>
      <div className='container portfolio_container'>
      {
        data.map(({id, titleh3, titleh4, titleh5, image, github, demo}) => {
          return (
          <article key={id} className='portfolio_item'>
          <h3>{titleh3}</h3>
          <h4>{titleh4}</h4>
            <div className='portfolio_item-image'>
              <a href={github}>
              <img src={image} alt='' />
              </a>
              <div className='portfolio_item-cta'>
                <a href={demo} target='_blank'><FaGithub/></a>
                <h5>{titleh5}</h5>
              </div>
            </div>
          </article>
          )
        })
      }

      </div>
    </section>
  );
}

export default Projects;
