import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import envelope from './assets/envelope.png'
import msg from './assets/email.png'

const Panel = () => {
	const [doctors, setDoctors] = useState(null);

	useEffect(() => {

		axios.get('/api/user/auth/staffs')
			.then(({ data }) => {
				console.log(data.staffs);
				setDoctors(data.staffs)
			})
			.catch(err => console.log(err));

	}, []);

	const staff = doctors !== null ? (doctors.map(doctor => {
		return (
			<Col key={doctor._id} className="my-1 px-2">
				<div className="doc-card">
					<img src={msg} alt="" className="doc-img" />
					<span className="doc-about">
						<h5 className="doc-name ml-3 mt-3">Dr. {doctor.firstname} {doctor.lastname}</h5>
						{/* <p className="doc-field">{doctor.field}</p> */}
						<Link to={`/book/${doctor._id}`} className="btn btn-primary btn-block my-1 px-2">Book</Link>
					</span>
				</div>
			</Col>
		)
	})) : (<h4 className="text-center">Loading...</h4>);
	console.log(doctors);
	return (
		<>
			<div className="panel-wrapper">
				<div className="notifications">
					<img src={envelope} alt="" />
					<img src={msg} alt="" />
				</div>
				<Row>
					{staff}
				</Row>
			</div>
		</>
	)
}

export default Panel