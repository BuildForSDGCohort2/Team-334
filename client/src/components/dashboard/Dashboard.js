import React from 'react'
import Pic from './assets/img_1.jpeg'
import Details from './sections/Details.js'
import Benefits from './sections/Benefits.js'
import Contact from './sections/Contact.js'

const Dashboard = () => {
	const style = {
		width: "100%",
		height: "80vh"
	}
	return (
		<span>
			<img style={style} src={Pic} alt="background" />
			<Details />
			<Benefits />
			<Contact />
		</span>
		)
}

export default Dashboard