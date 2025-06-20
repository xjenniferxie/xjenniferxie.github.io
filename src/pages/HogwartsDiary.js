import kubedashBrainstorm2 from 'assets/kubernetes/kubernetes_brainstorm2.png'
import oldKubernetes from 'assets/kubernetes/old_kubernetes.mp4'
import bullhornIcon from 'assets/hogwartsdiary/bullhorn_icon.svg'

function HogwartsDiary() {
  return (
    <div className='project-content'>
      <h5>Introduction</h5>
      <p>
        <i>Harry Potter: Hogwarts Mystery</i>'s major feature update of 2024 
        was Hogwarts Diary, a story collection event where players collect 
        gacha packs and open them to complete puzzle pictures, earn rewards, 
        and unlock story content.
      </p>
      <p>
        I'm thrilled to have led the UI design for the feature! I created a 
        brand new multi-page UI for the event, and also updated UI throughout 
        the entire game to support the new gacha pack reward type.
      </p>

      <h5>Lo-fi Mockups</h5>
      <p>
        The main page of the Hogwarts UI needed to pack in a lot of details. I 
        experimented with different layouts, looking for a way to clearly and 
        accurately display information while optimizing limited screen space.
      </p>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />
      <p>
        After discussion with stakeholders, I settled on the following designs 
        for the main page and sub-pages.
      </p>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />

      <h5>Hi-fi Mockups</h5>
      <p>
        We knew we wanted to pursue a diary book concept for the event's 
        visual design, but there were still plenty of subsequent design 
        questions to explore. I had a lot of fun trying out various color 
        schemes and decorative elements for each part of the UI.
      </p>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />

      <h5>Final Feature</h5>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />
      <video controls>
        <source src={oldKubernetes} type='video/mp4' />
      </video>

      <div className='callout'>
        <img src={bullhornIcon} alt='' className='icon' />
        <div>
          <b>Shoutouts:</b> Creating Hogwarts Diary was a massive 
          collaborative effort across the entire studio, and it wouldn't have 
          been possible without everyone from the following teams: Engineering, 
          Game Design, Art, Animation, Narrative, Product, Analytics, LiveOps, 
          Content, QA, and Production. Kudos to all of you—we pulled it off!
        </div>
      </div>
    </div>
  )
}

export default HogwartsDiary
