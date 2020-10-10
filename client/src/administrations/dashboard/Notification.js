import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notification = ({ data }) => {

	const [unanswered, setUnaswered] = useState(data.user.patients);

	const noti = unanswered !== null ? (unanswered.map(n => {
		return (
			<Card className="my-1" key={Math.random()}>
				<p className="p-1">{n.email}</p>
				<Link to={`/builder/${n.uid}`} className="btn-btn-outline-secondary">Respond</Link>
			</Card>
		)
	})): (<h5 className="text-center">No notifications yet...</h5>);

	return (
		<Container className="noti-wrapper">
			{ noti }
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		data: state.provider.data
	}
}

export default connect(mapStateToProps)(Notification);