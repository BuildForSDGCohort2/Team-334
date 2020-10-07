import React from  'react'
import { Link } from 'react-router-dom'

const Details = () => {
	return (
		<div className="container details">
			<h2 className="details-heading ">Welcome to Virtual Care</h2>
			<p className="details-text ">Telemedicine allows healthcare professionals to evaluate, diagnose and treat patients at a distance using telecommunications technology. </p>
			<Link to="/staff" style={{backgroundColor: '#4951ec', color: '#92b5f9'}} className="demo btn">Learn more</Link>
			<div className="benefits-wrapper my-5">
				<p className="benefits-text ml-2">Save money and time, visit from the comfort of your home, stay safe from being exposed to potentially contagios patients</p>
			<Link to="/" variant="light" className="mt-3 mx-2 btn btn-light" style={{width: '95%', color: '#92b5f9'}}>Request Demo</Link>
			</div>
		</div>
	)
}

export default Details;