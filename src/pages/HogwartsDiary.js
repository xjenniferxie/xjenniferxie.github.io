import diaryLofi1 from 'assets/hogwartsdiary/diary_lofi_main_page.png'
import diaryLofi2 from 'assets/hogwartsdiary/diary_lofi_mockup.png'
import diaryVisual1 from 'assets/hogwartsdiary/diary_visual_mockups.png'
import diaryVisual2 from 'assets/hogwartsdiary/diary_visual_decorations.png'
import diaryFinal1 from 'assets/hogwartsdiary/diary_final1.png'
import diaryFinal2 from 'assets/hogwartsdiary/diary_final2.png'
import diaryFinal3 from 'assets/hogwartsdiary/diary_final3.png'
import diaryFinal4 from 'assets/hogwartsdiary/diary_final4.png'
import diaryFinalVideo from 'assets/hogwartsdiary/diary_final_video.mp4'
import bullhornIcon from 'assets/hogwartsdiary/bullhorn_icon.svg'

function HogwartsDiary() {
  return (
    <div className='project-content'>
      <h5>Introduction</h5>
      <p>
        <i>Harry Potter: Hogwarts Mystery</i>’s major feature update of 2024 
        was Hogwarts Diary, a story collection event where players collect 
        gacha packs and open them to complete puzzle pictures, earn rewards, 
        and unlock story content.
      </p>
      <p>
        I’m thrilled to have led the UI design for the feature! I created a 
        brand new multi-page UI for the event, and also updated UI throughout 
        the entire game to support the new gacha pack reward type.
      </p>

      <h5>UI/UX Mockups</h5>
      <p>
        The main page of the Hogwarts UI needed to pack in a lot of details. I 
        experimented with different layouts, looking for a way to clearly and 
        accurately display information while optimizing limited screen space.
      </p>
      <img src={diaryLofi1} alt='Mockups of 3 different layouts for the main page. Horizontal and vertical variations of the progress bar and grand prize.' />
      <p>
        After discussion with stakeholders, I settled on the following designs 
        for the main page and sub-pages.
      </p>
      <img src={diaryLofi2} alt='Low-fidelity mockups of the main page, picture page, event shop, and duplicates shop.' />

      <h5>Visual Design</h5>
      <p>
        We knew we wanted to pursue a diary book concept for the event’s 
        visual design, but there were still plenty of subsequent design 
        questions to explore. I had a lot of fun trying out various color 
        schemes and decorative elements for each part of the UI.
      </p>
      <img src={diaryVisual1} alt='Colored variations of the Hogwarts Diary main page and picture page.' />
      <img src={diaryVisual2} alt='4 different book corner designs and 3 container background designs.' />

      <h5>Final Feature</h5>
      <p>
        And... *drumroll*... this is the final event!
      </p>
      <div className='project-grid'>
        <img 
          src={diaryFinal1} 
          alt='Main Page UI. Milestone and Grand Prize rewards on the left, and an album book of pictures on the right.' 
          className='project-grid-item' />
        <img 
          src={diaryFinal2} 
          alt='Picture Page UI. In-progress picture, with completion rewards and an unused inkwell on the side.' 
          className='project-grid-item' />
        <img 
          src={diaryFinal3} 
          alt='Event Shop UI. 4 types of packs available for purchase.' 
          className='project-grid-item' />
        <img 
          src={diaryFinal4} 
          alt='Duplicates Shop UI. Row of rewards available for purchase with duplicate currency.' 
          className='project-grid-item' />
      </div>
      <p>
        Here is a playthrough, showcasing all the interactable UI as well as 
        the Art team’s amazing models and animations!
      </p>
      <video controls>
        <source src={diaryFinalVideo} type='video/mp4' />
      </video>

      <div className='callout'>
        <img src={bullhornIcon} alt='' className='icon' />
        <div>
          <b>Shoutouts:</b> Creating Hogwarts Diary was a massive 
          collaborative effort across the entire studio, and it wouldn’t have 
          been possible without everyone from the following teams: Engineering, 
          Game Design, Art, Animation, Narrative, Product, Analytics, LiveOps, 
          Content, QA, and Production. Kudos to all of you—we pulled it off!
        </div>
      </div>
    </div>
  )
}

export default HogwartsDiary
