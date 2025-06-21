import halloweenModal from 'assets/seasonalui/seasonalui_halloween_modal.png'
import halloweenMagicalMilestones from 'assets/seasonalui/seasonalui_halloween_magicalmilestones.png'
import christmasModal from 'assets/seasonalui/seasonalui_christmas_modal.png'

function SeasonalUI() {
  return (
    <div className='project-content'>
      <h5>Seasonal UI Themes</h5>
      <p>
        Our UI team creates themed backgrounds for each month's events, sales, 
        and modals. From the backgrounds I've worked on, here are some of my 
        personal favorites!
      </p>

      <h5>Halloween</h5>
      <img src={halloweenModal} alt='TODO_2025_IMAGE' />
      <img src={halloweenMagicalMilestones} alt='TODO_2025_IMAGE' />

      <h5>Christmas</h5>
      <img src={christmasModal} alt='TODO_2025_IMAGE' />
    </div>
  )
}

export default SeasonalUI
