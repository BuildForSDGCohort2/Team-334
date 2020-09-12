import React from 'react'
import { Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navs = () => {
	return (
		<Container>
			<Nav activeKey="/">
				<Nav.Item>
					<Link to="/providers" className="nav-link">Home</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/providers" className="nav-link">Ready</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/session" className="nav-link">Room</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/providers" className="nav-link">Schedules</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/providers" className="nav-link">Profile</Link>
				</Nav.Item>
			</Nav>
		</Container>
	)
}

export default Navs