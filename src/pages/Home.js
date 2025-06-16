import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ProjectCard from 'components/ProjectCard.js'

import headerIllustration from 'assets/home/header_illustration.png'
import footerIllustration from 'assets/home/footer_illustration.png'
import resumeButton from 'assets/home/resume_button.png'
import resumeHoverButton from 'assets/home/resume_button_hover.png'
import resume from 'assets/home/Jennifer_Xie_Resume_2022.pdf'

import 'pages/Home.css'

const skillDetails = {
  'art': {
    title: 'UI Art',
    color: 'purple',
    skills: ['Photoshop', 'Illustrator']
  },
  'design': {
    title: 'UX Design',
    color: 'pink',
    skills: ['Figma']
  },
  'dev': {
    title: 'UI Development',
    color: 'red',
    skills: ['Unity', 'C#', 'Lua']
  },
  'programming': {
    title: 'Programming',
    color: 'yellow',
    skills: ['HTML/CSS/JS + React', 'Python', 'Java', 'Go']
  },
}

const contactDetails = {
  'email': {
    icon: faSquareEnvelope,
    text: 'xjenniferxie@gmail.com',
    link: 'mailto:xjenniferxie@gmail.com'
  },
  'linkedin': {
    icon: faLinkedin,
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jennifer-xie'
  },
}

function SkillItem({ skill }) {
  return (
    <div className='skills-item'>
      <h5 className={skillDetails[skill].color}>{skillDetails[skill].title}</h5>
      <ul>
        {skillDetails[skill].skills.map((s) => <li key={skill}>{s}</li>)}
      </ul>
    </div>
  )
}

function ContactItem({ type }) {
  return (
    <div className='contact-item'>
      <FontAwesomeIcon icon={contactDetails[type].icon} className='fa-lg' />
      <a href={contactDetails[type].link} target='_blank' rel='noreferrer'>{contactDetails[type].text}</a>
    </div>
  )
}

function Home() {
  const [rButton, setRButton] = useState(resumeButton)

  return (
    <div className='home-page'>
      <div className='home-section gold-border-bottom'>
        <div className='page-container'>
          <div className='home-header'>
            <img src={headerIllustration} alt='' />
            <div className='home-header-text'>
              <h1>Jennifer Xie</h1>
              <p>
                Hey there! I'm a Senior Game UI/UX designer at Jam City, working on 
                the mobile RPG <a href='https://www.harrypotterhogwartsmystery.com/' target='_blank' rel='noreferrer'>
                  Harry Potter: Hogwarts Mystery
                </a>. I previously worked 
                as a UI/UX Designer and Software Engineer at Twitter.
              </p>
            </div>
          </div>

          <div className='projects-grid' id='projects'>
            <div className='projects-grid-row'>
              <ProjectCard project='genshin' />
              <ProjectCard project='mario' />
            </div>
            <div className='projects-grid-row'>
              <ProjectCard project='kubernetes' />
              <ProjectCard project='opensource' />
            </div>
            <div className='projects-grid-row'>
              <ProjectCard project='capacity' />
              <ProjectCard project='placeholder' />
            </div>
          </div>
        </div>
      </div>

      <div className='about-section gold-border-bottom' id='about'>
        <div className='page-container'>
          <div className='about-header'>
            <h3>About</h3>
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
            I specialize in Game UI, working across UI Art, UX Design, and UI Development. 
            My professional experience goes beyond that though—I've worked on everything 
            from graphic design to programming. Here's an overview of my skillset:
          </p>
          <div className='skills-row'>
            {Object.keys(skillDetails).map((k) => <SkillItem skill={k} />)}
          </div>
        </div>
      </div>

      <div className='contact-section' id='contact'>
        <div className='page-container'>
          <div className='contact-content'>
            <div>
              <h3>Contact</h3>
              <div className='contact-column'>
                {Object.keys(contactDetails).map((k) => <ContactItem type={k} />)}
              </div>
            </div>
            <img src={footerIllustration} alt='' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
