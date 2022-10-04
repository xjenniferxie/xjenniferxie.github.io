import { Outlet, Link } from "react-router-dom";

import 'layouts/NavLayout.css';

function NavigationBar() {
	return (
		<nav>
			<div className='nav-container page-container'>
				<Link to='/' className='home-nav-link'>Jennifer Xie</Link>
				<div className='nav-menu'>
					<Link to='/'>Projects</Link>
					<Link to='/'>About</Link>
					<Link to='/'>Resume</Link>
					<Link to='/'>Contact</Link>
				</div>
			</div>
		</nav>
	);
}

function NavLayout() {
  return (
    <div>
			<NavigationBar />
      <Outlet />
    </div>
  )
};

export default NavLayout;
