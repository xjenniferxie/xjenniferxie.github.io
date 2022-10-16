import { Link } from 'react-router-dom'

import projectDetails from 'constants.js'

import 'components/ProjectCard.css'

// TODO remove project from className after removing placeholder functionality
function ProjectCard({project, size='large'}) {
  return (
    <Link to={`/${project}`} className={`project-card ${project}`}>
      <img src={projectDetails[project].cardImage} alt='' />
      <div className={`project-card-text ${size} ${projectDetails[project].mode}`}>
        <h4>{projectDetails[project].title}</h4>
        <p>{projectDetails[project].company} &nbsp;•&nbsp; {projectDetails[project].year}</p>
      </div>
      <div className='project-card-selection' />
    </Link>
  )
}

export default ProjectCard
