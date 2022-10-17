import mario1 from 'assets/mario/mario_1.png'
import mario2 from 'assets/mario/mario_2.png'
import mario3 from 'assets/mario/mario_3.png'
import marioStylesheet from 'assets/mario/mario_stylesheet.png'

function Mario() {
  return (
    <div className='project-content'>
      <h5>The Idea</h5>
      <p>
        <b>What if Nintendo released a space edition of Mario Kart?</b> Imagine 
        it—maps set on Mars and Jupiter, updated vehicles for space racing, and 
        of course, a new futuristic UI to match.
      </p>
      <p>
        In this project, I explored what a sci-fi Mario Kart UI could look 
        like.
      </p>

      <h5>The Design</h5>
      <p>
        My goal was to maintain the placement and functionality of all the 
        Mario Kart UI components, while giving them a sci-fi makeover. I 
        focused on two elements throughout the redesign: holograms and metal.
      </p>
      <img src={mario1} alt='Mario Kart select race type screen' />
      <img src={mario2} alt='Mario Kart select vehicle gear screen' />
      <img src={mario3} alt='Mario Kart select race gear screen' />

      <h5>Style Guide</h5>
      <img src={marioStylesheet} alt='Style sheet of Mario Kart colors, buttons, and selections' />
    </div>
  )
}

export default Mario
