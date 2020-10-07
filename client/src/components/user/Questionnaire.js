import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getQ } from '../../store/actions/authActions'

const Questionnaire = ({ auth, data }) => {
	const [questions, setQuestions] = useState([{label: 'Name', type: 'text'},{label: 'age', type: 'number'},{label: 'Do you feel dizzy', type: 'text'}]);

	const [answers, setAnswer] = useState([]);

	useEffect(() => {
		const { uid } = auth;
		getQ(uid);
		// setQuestions([...questions, data]);
		console.log(uid, data)
	}, [auth, data]);

	const handleSubmit = e => {
		e.preventDefault();
		console.log(answers);

		axios.post('/api/reg/send', {
			answers,
			email: data[0].myEmail
		})
		.then(({ data }) => alert(data.msg))
		.catch(err => console.log(err));
	}

	const inputs = questions.length ? (questions.map(q => {
		return (
			<div className="form-group" key={Math.random()}>
				<label htmlFor={q.label}>{ q.label }</label>
				<input type={q.type} onChange={e => setAnswer([...answers, e.target.value])} placeholder="Your answer..." className="form-control" />
			</div>
		)
	})) : (<h5 className="text-center">Loading...</h5>);

	return (
		<div className="container questionnaire-wrapper">
			<form style={{ maxWidth: '600px'}} >
				<h3 className="my-2 text-center">Answer the following</h3>
				{ inputs }
				<button className="btn btn-primary btn-block" onSubmit={handleSubmit}>Submit</button>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		data: state.auth.data
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getQ: uid => dispatch(getQ(uid))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Questionnaire);