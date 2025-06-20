import spellbindingSequencesLofi from 'assets/spellbindingsequences/spellbindingsequences_lofi_mockup.png'
import spellbindingSequencesHifi from 'assets/spellbindingsequences/spellbindingsequences_hifi_mockup.png'
import spellbindingSequencesFinal from 'assets/spellbindingsequences/spellbindingsequences_final.mov'
// TODO_2025: Convert mov to mp4

function SpellbindingSequences() {
  return (
    <div className='project-content'>
      <h5>Introduction</h5>
      <p>
        Spellbinding Sequences is a new sale event in <i>Harry Potter: Hogwarts 
        Mystery</i>. The sale offers follow a sequential ladder structure, 
        where players must purchase each offer in order.
      </p>
      <p>
        As the feature's UI Designer, my goal was to make the ladder purchase 
        concept easy to use and understand for players, while giving the UI a 
        magical visual theme that draws from the <i>Harry Potter</i> IP.
      </p>

      <h5>Lo-fi Mockups</h5>
      <p>
        We identified that purchase cells should support the following:
      </p>
      <ul>
        <li>
          Different combinations of game currency and 3D model rewards
        </li>
        <li>
          3 purchase types: Free, Game currency, or IAP (in-app purchase)
        </li>
        <li>
          Arrow and lock icons to indicate the cells' purchase order
        </li>
      </ul>
      <img src={spellbindingSequencesLofi} alt='TODO_2025_IMAGE' />

      <h5>Hi-fi Mockups</h5>
      <p>
        After brainstorming with the team, I explored 2 potential visual themes:
      </p>
      <ul>
        <li>
          <b>Marauder's Map</b> — Playing on the idea that the moving footsteps 
          guide you between each cell.
        </li>
        <li>
          <b>Grand Staircase</b> — An ode to the moving staircases in Hogwarts, 
          and the portraits that line the walls.
        </li>
      </ul>
      <img src={spellbindingSequencesHifi} alt='TODO_2025_IMAGE' />

      <h5>Final Feature</h5>
      <p>
        Stakeholders decided to move forward with the Grand Staircase 
        visual theme. Here is the final feature, complete with animations!
      </p>
      <video controls>
        <source src={spellbindingSequencesFinal} type='video/mp4' />
      </video>
    </div>
  )
}

export default SpellbindingSequences
