import creatureOriginal from 'assets/creature/creature_original.png'
import creatureOverview1 from 'assets/creature/creature_overview.png'
import creatureOverview2 from 'assets/creature/creature_overview_states.png'
import creatureBulk from 'assets/creature/creature_bulk.png'
import creatureHappiness from 'assets/creature/creature_happiness.png'
import creatureReserve1 from 'assets/creature/creature_reserve_icons.png'
import creatureReserve2 from 'assets/creature/creature_reserve.png'

function Creature() {
  return (
    <div className='project-content'>
      <div className='project-row'>
        <div className='project-row-item'>
          <h5>Introduction</h5>
          <p>
            <i>Harry Potter: Hogwarts Mystery</i>’s magical creature system is one 
            of the player bases’s favorite features, so we decided it deserved 
            some serious quality of life improvements and feature updates.
          </p>
          <p>
            For reference, this is what the original Creatures Overview UI looked 
            like.
          </p>
        </div>
        <img 
          src={creatureOriginal} 
          alt='Original Creatures Overview UI. Simple column list of creatures.' 
          className='project-row-item' 
          id='creature-original' />
      </div>

      <h5>Creatures Overview</h5>
      <p>
        With 50+ creatures now in the game, a single scrollable column was not 
        going to cut it. We switched to a table structure, where tapping on a 
        creature’s cell would bring up the creature’s details in the right-hand 
        panel.
      </p>
      <img src={creatureOverview1} alt='Creatures Overview UI. Table of creatures, with information about the selected creature.' />
      <p>
        These are all the different states a creature's cell and details panel 
        can be in:
      </p>
      <img src={creatureOverview2} alt='5 different states of creatures: owned, owned on active expedition, adoptable, adoptable and locked, and adoptable on sale' />

      <h5>Bulk Feed & Bond</h5>
      <p>
        Individually feeding and bonding with each creature was time-consuming 
        for players, so we added a highly requested feature: Bulk Feed and 
        Bulk Bond! Now, players can select multiple creatures and feed/bond with 
        them with just one click.
      </p>
      <img src={creatureBulk} alt='Bulk Feed UI. Table of creatures eligible for bulk feed.' />

      <h5>Happiness XP</h5>
      <p>
        We also added a new Creature Happiness XP mechanic! Interacting with a 
        creature increases its Happiness XP, while neglecting it causes its 
        Happiness XP to decay.
      </p>
      <img src={creatureHappiness} alt='Happiness XP progress bar, 4 happiness emojis, and Happiness XP icon' />

      <h5>Creature Reserve</h5>
      <p>
        Finally, we released 2 new progression systems to accompany the 
        Happiness XP mechanic.
      </p>
      <ul>
        <li>
          <b>Rating</b> — Every week, you earn a rating of 
          None/Bronze/Silver/Gold based on how much cumulative Happiness 
          XP your creatures have at the weekly check-in time.
        </li>
        <li>
          <b>Rank</b> — You permanently earn Rank XP from the weekly check-in. 
          The amount of Rank XP depends on how much cumulative Happiness XP 
          your creatures have, if you adopted any new creatures, and if you 
          completed any creature side quests.
        </li>
      </ul>
      <img src={creatureReserve1} alt='Rank number background, and 4 different rating medals' />
      <img src={creatureReserve2} alt='Creature Reserve UI. Rank section with progress bar and upcoming Rank XP, and Rating section with current rating medal and upcoming rating progress bar.' />
    </div>
  )
}

export default Creature
