import capacityNavigationStructure from 'assets/capacity/capacity_navigation_structure.png'
import capacityLofiMockup from 'assets/capacity/capacity_lofi_mockup.png'
import capacityUserResearch from 'assets/capacity/capacity_user_research.png'
import capacityHifiMockup from 'assets/capacity/capacity_hifi_mockup.png'


function Capacity() {
  return (
    <div className='project-content'>
      <h5>Introduction</h5>
      <h6>Problem: Swapping hosts between roles was a tedious manual process</h6>
      <p>
        Twitter runs services from its own datacenters, which are comprised of 
        hosts (computers). Each host belongs to a role, but sometimes, Role A 
        has too many hosts and Role B needs more hosts, so the logical 
        solution is to transfer some hosts from Role A to Role B.
      </p>
      <p>
        However, swapping hosts between roles was a tedious manual process that 
        only administrators could do, which led to burdensome work for admin 
        engineers and long wait times for requesting engineers. 
      </p>
      <h6>Solution: Create a Capacity Dashboard</h6>
      <p>
        My team decided to build a Capacity Dashboard so engineers could easily 
        swap hosts between roles on their own.
      </p>
      <p>
      As the team's UI/UX designer, I led the Capacity Dashboard's design process
      —I brainstormed ideas, iterated on mockups, and appiled feedback from our 
      engineers and the project's stakeholders.
      </p>

      <h5>Navigation Structure</h5>
      <img src={capacityNavigationStructure} alt='Diagram of user and admin flow' />

      <h5>Lo-fi Mockups</h5>
      <img src={capacityLofiMockup} alt='Capacity Dashboard Requests and Approve page' />

      <h5>User Research: Prototype Testing</h5>
      <img src={capacityUserResearch} alt='Feedback on Requests tab and Request details' />

      <h5>Hi-fi Mockups</h5>
      <img src={capacityHifiMockup} alt='Mockup of New Request Form, Requests tab, and Approve tab' />
    </div>
  )
}

export default Capacity
