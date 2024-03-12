import React from 'react';
import './projects.css';
import { FaGithub, FaInstagram } from "react-icons/fa";
import IMGCSS from '../../assets/project-images/csscourse.png';
import IMGBOAT from '../../assets/project-images/boat.png';
import Filter01 from '../../assets/project-images/filter.png';
import SectionCard from '../shared/SectionCard';

const SoftwareItem = [

  {
    id: 1,
    icon: <FaGithub />,
    titleH3: 'UHost(fictional business)',
    titleH4: 'A website that demonstrate the use modern CSS features, such as Flexbox and CSS grid.',
    titleH5: 'JS CSS Flexbox Grid',
    image: IMGCSS,
    liveURL: 'https://elifortes.github.io/CSS-course/',
    codeURL: 'https://github.com/elifortes/CSS-course.git',
  },
  {
    id: 2,
    icon: <FaGithub />,
    titleH3: 'Airbnb Boat(fictional business)',
    titleH4: 'Is a conceptual project that illustrates a modern platform for renting boats.',
    titleH5: 'Ruby-on-Rails JS Bootstrap Heroku',
    image: IMGBOAT,
    liveURL: 'https://github.com/elifortes/Airbnb-Boat.git',
    codeURL: 'https://github.com/elifortes/Airbnb-Boat.git',
  },
  {
    id: 3,
    icon: <FaGithub />,
    titleH3: 'Gift Genius',
    titleH4: 'Its a app and blabla.',
    titleH5: 'bla',
    image: IMGBOAT,
    liveURL: 'https://github.com/elifortes/Airbnb-Boat.git',
    codeURL: 'https://github.com/elifortes/Airbnb-Boat.git',
  },
]

const DesignItem = [
  {
    id: 4,
    icon: <FaInstagram />,
    titleH3: 'Instagram Filters',
    titleH4: 'Showcasing engaging and interactive Instagram filters created with Spark AR Studio.',
    titleH5: 'Canva Spark-AR-Studio Photoshop JS',
    image: Filter01,
    liveURL: 'https://www.instagram.com/ar/1616459879160433/',
    codeURL: 'https://www.instagram.com/ar/1616459879160433/',
  },
]



const Projects = () => {
  return (
    <>
    <SectionCard id='software' title='Software Development' cardsData={SoftwareItem} />
    <SectionCard id='design' title='Social Media Design' cardsData={DesignItem} />
    </>
  );
}

export default Projects;
