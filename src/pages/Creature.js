import kubedashBrainstorm2 from 'assets/kubernetes/kubernetes_brainstorm2.png'
import opensourceOriginal from 'assets/opensource/opensource_original.png'

function Creature() {
  return (
    <div className='project-content'>
      <div className='project-columns'>
        <div className='project-columns-item'>
          <h5>Introduction</h5>
          <p>
            <i>Harry Potter: Hogwarts Mystery</i>'s magical creature system is one 
            of the player bases's favorite features, and we decided it deserved 
            some serious quality of life improvements and feature updates.
          </p>
          <p>
            For reference, this is what the original Creatures Overview UI looked 
            like.
          </p>
        </div>
        <img src={opensourceOriginal} alt='' className='project-columns-item' />
      </div>

      <h5>Creatures Overview</h5>
      <p>
        With 50+ creatures now in the game, a single scrollable column was not 
        going to cut it. We switched to a table structure, where tapping on a 
        creature's cell would bring up the creature's details in the right-hand 
        panel.
      </p>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />
      <p>
        These are all the possible states a creature's cell and details panel 
        can be in:
      </p>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />

      <h5>Bulk Feed & Bond</h5>
      <p>
        Individually feeding and bonding with each creature was time-consuming 
        for players, so we added a highly requested feature: Bulk Feed and 
        Bulk Bond! New players can select multiple creatures and feed/bond with 
        them with just one click.
      </p>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />

      <h5>Happiness XP</h5>
      <p>
        We also added a new Creature Happiness XP mechanic. Interacting with a 
        creature increases its Happiness XP, while neglecting it causes its 
        Happiness XP to decay.
      </p>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />

      <h5>Creature Reserve</h5>
      <p>
        Finally, we released 2 new progression systems to accompany the 
        Happiness XP mechanic.
      </p>
      <ul>
        <li>
          <b>Rating</b> — Every week, you earn a rating of 
          None/Bronze/Silver/Gold depending on how much cumulative Happiness 
          XP your creatures have at the weekly check-in time.
        </li>
        <li>
          <b>Rank</b> — You permanently earn Rank XP from the weekly check-in. 
          The amount of Rank XP depends on how much cumulative Happiness XP 
          your creatures have, if you adopted any new creatures, and if you 
          completed any creature side quests.
        </li>
      </ul>
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />
      <img src={kubedashBrainstorm2} alt='TODO_2025_IMAGE' />
    </div>
  )
}

export default Creature
