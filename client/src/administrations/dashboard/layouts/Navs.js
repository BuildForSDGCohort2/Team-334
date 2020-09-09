import React from 'react'
import { Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navs = () => {
	return (
		<Container>
			<Nav activeKey="/">
				<Nav.Item>
					<Link to="/providers" className="nav-link">Ready</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/providers" className="nav-link">Patients</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="/providers" className="nav-link">Schedules</Link>
				</Nav.Item>
				<Nav.Item>
					<Link to="session" className="nav-link">Create Room</Link>
				</Nav.Item>
			</Nav>
		</Container>
	)
}

export default Navs