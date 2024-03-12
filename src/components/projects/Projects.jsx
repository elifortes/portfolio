import React from 'react';
import './projects.css';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import IMGCSS from '../../assets/project-images/csscourse.png';
import IMGBOAT from '../../assets/project-images/boat.png';
import Filter01 from '../../assets/project-images/filter.png';
import Section from '../shared/Section';

const softwareData = [

  {
    id: 1,
    titleh3: 'UHost(fictional business)',
    titleh4: 'A website that demonstrate the use modern CSS features, such as Flexbox and CSS grid.',
    titleh5: 'JS CSS Flexbox Grid',
    image: IMGCSS,
    github: 'https://github.com/elifortes/CSS-course.git',
    demo: 'https://elifortes.github.io/CSS-course/',
    icon: <FaGithub/>
  },
  {
    id: 2,
    titleh3: 'Airbnb Boat(fictional business)',
    titleh4: 'Is a conceptual project that illustrates a modern platform for renting boats.',
    titleh5: 'Ruby-on-Rails JS Bootstrap Heroku',
    image: IMGBOAT,
    github: 'https://github.com/elifortes/Airbnb-Boat.git',
    icon: <FaGithub/>
  },
  {
    id: 3,
    titleh3: 'Gift Genius',
    titleh4: 'Its a app and blabla.',
    titleh5: 'bla',
    image: IMGBOAT,
    github: 'https://github.com/elifortes/Airbnb-Boat.git',
    icon: <FaGithub/>
  }
]

const designingData = [
  {
    id: 4,
    titleh3: 'Instagram Filters',
    titleh4: 'Showcasing engaging and interactive Instagram filters created with Spark AR Studio.',
    titleh5: 'Canva Spark-AR-Studio Photoshop JS',
    image: Filter01,
    github: 'https://www.instagram.com/ar/1616459879160433/',
    icon: <FaInstagram/>
  },
]

const Projects = () => {

  return (
    <>
      <Section id='projects' title='Software Development' cardsData={softwareData} />
      <Section id='designProjects' title='Design' cardsData={designingData} />
    </>
  );
}

export default Projects;
