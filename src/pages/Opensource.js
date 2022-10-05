import opensourceOriginal from 'assets/opensource/opensource_original.png'
import opensourceLofi1 from 'assets/opensource/opensource_lofi1.png'
import opensourceLofi2 from 'assets/opensource/opensource_lofi2.png'
import opensourceLofi3 from 'assets/opensource/opensource_lofi3.png'
import opensourceHifi1 from 'assets/opensource/opensource_hifi1.png'
import opensourceHifi2 from 'assets/opensource/opensource_hifi2.png'
import starIcon from 'assets/opensource/star_icon.svg'

import 'pages/Opensource.css'

function Opensource() {
  return (
    <div className='project-content'>
      <h5>Introduction</h5>
      <p>
        <a href='https://opensource.twitter.dev' target='_blank' rel='noreferrer'>
          opensource.twitter.com
        </a> is the public-facing website for all things related to Open Source at 
        Twitter. However, the website was extremely outdated.
      </p>
      <p>
        As an intern at Twitter, my project was to redesign and build a new version 
        of <a href='https://opensource.twitter.dev' target='_blank' rel='noreferrer'>
          opensource.twitter.com
        </a>.
      </p>
      <h6>Goals</h6>
      <p className='numbered'>
        1. Improve the website’s functionality and content.
      </p>
      <p className='numbered'>
        2. Give the website the “look and feel” of Twitter’s branding.
      </p>

      <h5>Lo-fi Mockups</h5>
      <p>
        <b>Home page:</b> We wanted the landing page to provide an overview of 
        Open Source at Twitter and showcase the projects, the blog, open jobs, 
        and the official @TwitterOSS account.
      </p>
      <img src={opensourceLofi1} alt='' />
      <p>
        <b>Project cards:</b> What information should be included for each 
        project, and how should the information be formatted?
      </p>
      <img src={opensourceLofi2} alt='' />
      <p>
        <b>Mobile responsive design:</b> How should each page be styled to 
        also behave optimally in mobile?
      </p>
      <img src={opensourceLofi3} alt='' />

      <h5>Hi-fi Mockups</h5>
      <img src={opensourceHifi1} alt='' />
      <img src={opensourceHifi2} alt='' />

      <h5>Final Website</h5>
      <div className='callout'>
        <img src={starIcon} alt='' />
        <p><b>Check it out: <a href='https://opensource.twitter.dev' target='_blank' rel='noreferrer'>
          opensource.twitter.com
        </a></b></p>
      </div>
    </div>
  )
}

export default Opensource
