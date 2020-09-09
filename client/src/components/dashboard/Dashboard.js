import React from 'react'
import Details from './sections/Details.js'
import Benefits from './sections/Benefits.js'
import Contact from './sections/Contact.js'
import Applications from './sections/Applicatins.js'
import SlideShow from './sections/Slideshow.js';

const Dashboard = () => {

	return (
		<div>
			<SlideShow />
			<Details />
			<Applications />
			<Benefits />
			<Contact />
		</div>
	)
}

export default Dashboard