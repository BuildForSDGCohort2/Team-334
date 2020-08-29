import React from 'react'
import Pic from './assets/img_1.jpeg'
import Details from './sections/Details.js'
import Benefits from './sections/Benefits.js'
import Contact from './sections/Contact.js'
import Applications from './sections/Applicatins.js'

const Dashboard = () => {
	const style = {
		width: "100%",
		height: "80vh"
	}
	return (
		<div>
			<img style={style} src={Pic} alt="background" />
			<Details />
			<Applications />
			<Benefits />
			<Contact />
		</div>
		)
}

export default Dashboard