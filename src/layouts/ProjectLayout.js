import React from 'react'
import { useParams } from 'react-router-dom'

import projectDetails from 'constants.js'
import ProjectCard from 'components/ProjectCard.js'
import HogwartsDiary from 'pages/HogwartsDiary.js'
import Creature from 'pages/Creature.js'
import SpellbindingSequences from 'pages/SpellbindingSequences.js'
import SeasonalUI from 'pages/SeasonalUI.js'
import Genshin from 'pages/Genshin.js'
import Mario from 'pages/Mario.js'
import Blackjack from 'pages/Blackjack.js'
import Opensource from 'pages/Opensource.js'
import Kubernetes from 'pages/Kubernetes.js'
// import Capacity from 'pages/Capacity.js'

import 'layouts/ProjectLayout.css'

function getProjectContent(project) {
  switch(project) {
    case 'hogwartsdiary':
      return <HogwartsDiary />
    case 'creature':
      return <Creature />
    case 'spellbindingsequences':
      return <SpellbindingSequences />
    case 'seasonalui':
      return <SeasonalUI />
    case 'genshin':
      return <Genshin />
    case 'mario':
      return <Mario />
    case 'blackjack':
      return <Blackjack />
    case 'opensource':
      return <Opensource />
    case 'kubernetes':
      return <Kubernetes />
    // case 'capacity':
    //   return <Capacity />
    default:
      return <div />
  }
}

function ProjectBanner({ project }) {
  return (
    <div className={`project-banner ${project} gold-border-bottom`}>
      <div className='page-container'>
        <img src={projectDetails[project].bannerImage} alt='' />
        <div className={`project-banner-text ${projectDetails[project].mode}`}>
          <h2>{projectDetails[project].title}</h2>
          <p>{projectDetails[project].company} &nbsp;•&nbsp; {projectDetails[project].year}</p>
        </div>
      </div>
    </div>
  )
}

function SimilarProjects({ project }) {
  return (
    <div className='similar-project-content'>
      <h5>Similar Projects</h5>
      <div className='projects-grid-row'>
        {projectDetails[project].similarProjects.map((k) => 
          <ProjectCard project={k} size='small' />
        )}
      </div>
    </div>
  )
}

function ProjectLayout() {
  let { projectId } = useParams();

  return (
    <div className='project-page'>
      <ProjectBanner project={projectId} />
      <div className='page-container'>
        {getProjectContent(projectId)}
        <SimilarProjects project={projectId} />
      </div>
    </div>
  )
}

export default ProjectLayout
