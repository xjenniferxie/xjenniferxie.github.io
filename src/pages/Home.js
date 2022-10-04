import React, { useState } from 'react';

import ProjectCard from 'components/ProjectCard.js'

import headerIllustration from 'assets/home/header_illustration.png'
import footerIllustration from 'assets/home/header_illustration.png'
import resumeButton from 'assets/home/resume_button.png'
import resumeHoverButton from 'assets/home/resume_button_hover.png'
import resume from 'assets/home/Jennifer_Xie_Resume_2022.pdf'

import 'pages/Home.css'


const skillsLists = {
  'art': {
    title: 'Art',
    color: 'purple',
    skills: ['Photoshop', 'Illustrator']
  },
  'ui': {
    title: 'UI/UX',
    color: 'pink',
    skills: ['Figma', 'Sketch']
  },
  'gamedev': {
    title: 'Game Dev',
    color: 'red',
    skills: ['Unity', 'C#', 'C++']
  },
  'frontend': {
    title: 'Front-end',
    color: 'orange',
    skills: ['HTML', 'CSS', 'Javascript', 'React']
  },
  'backend': {
    title: 'Back-end',
    color: 'yellow',
    skills: ['Python', 'Java', 'Go', 'SQL']
  },
}

function SkillItem({ skill }) {
  return (
    <div className='skills-item'>
      <h4 className={skillsLists[skill].color}>{skillsLists[skill].title}</h4>
      <ul>
        {skillsLists[skill].skills.map((s) => <li key={skill}>{s}</li>)}
      </ul>
    </div>
  );
}

function Home() {
  const [rButton, setRButton] = useState(resumeButton)

  return (
    <div className='home-page'>
      <div className='home-section'>
        <div className='page-container'>
          <div className='home-header'>
            <img src={headerIllustration} alt='' />
            <div className='home-header-text'>
              <h1>Jennifer Xie</h1>
              <p>
                Hey there! I'm a Game UI Artist with previous experience as a 
                UI/UX designer and software engineer at Twitter.
              </p>
            </div>
          </div>

          <div className='projects-grid'>
            <div className='projects-grid-row'>
              <ProjectCard project='genshin' />
              <ProjectCard project='mario' mode='dark' />
            </div>
            <div className='projects-grid-row'>
              <ProjectCard project='blackjack' />
              <ProjectCard project='opensource' />
            </div>
            <div className='projects-grid-row'>
              <ProjectCard project='kubernetes' mode='dark' />
              <ProjectCard project='capacity' />
            </div>
          </div>
        </div>
      </div>

      <div className='about-section'>
        <div className='page-container'>
          <div className='about-header'>
            <h2>About</h2>
            <a href={resume} target='_blank' rel='noreferrer'>
              <img 
                src={rButton} 
                alt='Resume button' 
                onMouseEnter={() => setRButton(resumeHoverButton)}
                onMouseOut={() => setRButton(resumeButton)}
              />
            </a>
          </div>
          <p>
            I specialize in UI/UX design, but my skills span a broad spectrum—
            I have experience in everything from drawing illustrations to 
            programming React Apps and APIs. Here’s an overview of my skillset:
          </p>
          <div className='skills-row'>
            {Object.keys(skillsLists).map((k) => <SkillItem skill={k} />)}
          </div>
        </div>
      </div>

      <div className='contact-section'>
        <div className='page-container'>
          <h2>Contact</h2>
        </div>
      </div>

    </div>
  );
}

export default Home;
