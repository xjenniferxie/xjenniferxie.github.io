import { Outlet } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

import resume from 'assets/home/Jennifer_Xie_Resume_2022.pdf'

import 'layouts/NavLayout.css'

function NavigationBar() {
	return (
		<nav>
			<div className='nav-container page-container'>
				<HashLink to='/#home' className='home-nav-link'>Jennifer Xie</HashLink>
				<div className='nav-menu'>
					<HashLink to='/#projects'>Projects</HashLink>
					<HashLink to='/#about'>About</HashLink>
          <a href={resume} target='_blank' rel='noreferrer'>Resume</a>
					<HashLink to='/#contact'>Contact</HashLink>
				</div>
			</div>
		</nav>
	)
}

function NavLayout() {
  return (
    <div>
			<NavigationBar />
      <Outlet />
    </div>
  )
}

export default NavLayout
