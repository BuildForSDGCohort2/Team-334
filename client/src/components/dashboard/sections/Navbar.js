import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<ul className="nav-container">
				<li>
					<NavLink to="/" >Home</NavLink>
				</li>
				<li>
					<NavLink to="/user" >About</NavLink>
				</li>
				<li>
					<NavLink to="/demo" >Demo</NavLink>
				</li>
				<li>
					<NavLink to="/staff-signup" >Signup</NavLink>
				</li>
				<li>
					<NavLink to="/staff-signin" >Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;