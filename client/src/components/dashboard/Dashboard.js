import React from 'react'
import './assets/dashboard.css'
import Navbar from './sections/Navbar'
import Details from './sections/Details'
import background from './assets/telemed.png'

const Dashboard = () => {
	const style = {
		backgroundImage: `url(${background})`
	}

	return (
		<div className="landing-bg" style={style}>
			<Navbar />
			<Details />
		</div>
	)
}

export default Dashboard