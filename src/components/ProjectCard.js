import React from 'react';
import { Link } from "react-router-dom";

import genshinCard from 'assets/home/project_card_genshin.png'
import marioCard from 'assets/home/project_card_mario.png'
import blackjackCard from 'assets/home/project_card_blackjack.png'
import opensourceCard from 'assets/home/project_card_opensource.png'
import kubernetesCard from 'assets/home/project_card_kubernetes.png'
import capacityCard from 'assets/home/project_card_capacity.png'

import 'components/ProjectCard.css'

const projectCardDetails = {
  'genshin': {
    image: genshinCard,
    title: 'Genshin Impact: Improve Furniture UX',
    company: 'Personal Project',
    year: '2022',
    mode: 'light'
  },
  'mario': {
    image: marioCard,
    title: 'Mario Kart UI: Sci-Fi Edition',
    company: 'Personal Project',
    year: '2022',
    mode: 'dark'
  },
  'blackjack': {
    image: blackjackCard,
    title: 'Fantasy Blackjack Icons',
    company: 'Personal Project',
    year: '2022',
    mode: 'light'
  },
  'opensource': {
    image: opensourceCard,
    title: 'opensource.twitter.com',
    company: 'Twitter',
    year: '2018',
    mode: 'light'
  },
  'kubernetes': {
    image: kubernetesCard,
    title: 'Kubernetes Dashboard',
    company: 'Twitter',
    year: '2021',
    mode: 'dark'
  },
  'capacity': {
    image: capacityCard,
    title: 'Capacity Dashboard',
    company: 'Twitter',
    year: '2020',
    mode: 'light'
  },
}

function ProjectCard({project, size='large'}) {
  return (
    <Link to={project} className='project-card'>
      <img src={projectCardDetails[project].image} alt='' />
      <div className={`project-card-text ${size} ${projectCardDetails[project].mode}`}>
        <h3>{projectCardDetails[project].title}</h3>
        <p>{projectCardDetails[project].company} • {projectCardDetails[project].year}</p>
      </div>
      <div className='project-card-selection' />
    </Link>
  );
}

export default ProjectCard;
