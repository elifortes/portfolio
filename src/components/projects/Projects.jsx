import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import IMGCSS from '../../assets/project-images/css-course.png';
import IMGBOAT from '../../assets/project-images/boat.png';
import IMGIFT from '../../assets/project-images/Gift_Genius.png';
import IMGSNAKE from '../../assets/project-images/game.png';
import IMGDA from '../../assets/project-images/IMGDA.png';
import IMGRECIPE from '../../assets/project-images/IMGRECIPE.png';
import Filter01 from '../../assets/project-images/filter.png';
import SectionCard from '../shared/SectionCard';

const SoftwareItems = [
  {
    id: 1,
    icon: <FaGithub />,
    title: 'UHost(fictional business)',
    subtitle: 'A website that demonstrate the use modern CSS features, such as Flexbox and CSS grid.',
    techStack: 'JS CSS Flexbox Grid',
    image: IMGCSS,
    liveURL: 'https://elifortes.github.io/CSS-course/',
    codeURL: 'https://github.com/elifortes/CSS-course.git',
  },
  {
    id: 2,
    icon: <FaGithub />,
    title: 'Airbnb Boat(fictional business)',
    subtitle: 'Is a conceptual project that illustrates a modern platform for renting boats.',
    techStack: 'Ruby-on-Rails JS Bootstrap Heroku',
    image: IMGBOAT,
    liveURL: 'https://github.com/elifortes/Airbnb-Boat.git',
    codeURL: 'https://github.com/elifortes/Airbnb-Boat.git',
  },
  {
    id: 3,
    icon: <FaGithub />,
    title: 'Gift Genius',
    subtitle: 'Anyone looking to find thoughtful and personalized gifts can use this app.',
    techStack: 'Ruby-on-Rails JS Bootstrap Heroku',
    image: IMGIFT,
    liveURL: 'https://github.com/elifortes/Gift-Genius.git',
    codeURL: 'https://github.com/elifortes/Gift-Genius.git',
  },
  {
    id: 4,
    icon: <FaGithub />,
    title: 'Snake Game',
    subtitle: 'The classic Snake Game: How Long Can You Go?',
    techStack: 'JS',
    image: IMGSNAKE,
    liveURL: 'https://github.com/elifortes/Snake_Game.git',
    codeURL: 'https://github.com/elifortes/Snake_Game.git',
  },
  {
    id: 5,
    icon: <FaLinkedin/>,
    title: 'Chicago City Council',
    subtitle: "Examining complaints by councilperson's area.",
    techStack: 'Tableau Excel SQL',
    image: IMGDA,
    liveURL: 'https://linkedin.com',
  },
  {
    id: 6,
    icon: <FaGithub />,
    title: 'SimplEli Recipes',
    subtitle: 'A website that demonstrate a variety of delicious recipes.',
    techStack: 'JS CSS',
    image: IMGRECIPE,
    liveURL: 'https://elifortes.github.io/final-project-frontend-GA/',
    codeURL: 'https://github.com/elifortes/final-project-frontend-GA',
  },
];

const DesignItems = [
  {
    id: 4,
    icon: <FaInstagram />,
    title: 'Instagram Filters',
    subtitle: 'Showcasing engaging and interactive Instagram filters created with Spark AR Studio.',
    techStack: 'Canva Spark-AR-Studio Photoshop JS',
    image: Filter01,
    liveURL: 'https://www.instagram.com/ar/1616459879160433/',
    codeURL: 'https://www.instagram.com/ar/1616459879160433/',
  },
];

const Projects = () => {
  return (
    <>
      <SectionCard id='software' title='Projects' cardsData={SoftwareItems} />
      <SectionCard id='design' title='Social Media Design' cardsData={DesignItems} />
    </>
  );
}

export default Projects;
