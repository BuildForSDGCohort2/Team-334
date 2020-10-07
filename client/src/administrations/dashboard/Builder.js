import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addQ } from '../../store/actions/authActions';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Builder = ({ addQ , match, data }) => {
	const [q, setQ] = useState('');
	const[type, setType] = useState('text');

	const [fields, setFields] = useState([{label: 'you sick', type: 'text'},{label: 'your no', type: 'tel'}]);

	const handleAdd = e => {
		e.preventDefault();
		if(q !== '' && type !== '') {
			setFields([...fields, {label: q, type}]);
		}
	}

	const handleSend = e => {
		e.preventDefault();
		const myEmail = data.email;
		const { email } = match.params;
		addQ({email, myEmail, fields});
		console.log(email, myEmail, fields);
	}

	const outputs = fields && fields.map(field => {
		return (
			<Card className="my-1" style={{ maxWidth: '600px'}} >
				<p className="p-1">Question Asked: <b>{field.label}</b></p>
				<span className="p-1">Expected answer type: <b>{field.type}</b></span>
			</Card>
		)
	});

	return (
		<Container className="builder-wrapper">
			<Container className="my-3">
				{ outputs }
				<Button onClick={handleSend} variant="outline-primary" style={{ maxWidth: '600px'}}  block>Send</Button>
			</Container>
			<Form style={{ maxWidth: '600px'}}>
				<h4 className="text-center text-dark">Create a Questionnaire</h4>
				<Form.Group controlId="text">
					<Form.Label></Form.Label>
					<Form.Control type="text" placeholder="Enter Question" onChange={e => setQ(e.target.value)} />
				</Form.Group>

				<Form.Group controlId="type" >
					<Form.Label>Expected answer type </Form.Label>
					<Form.Control as="select" onChange={e => setType(e.target.value)} >
						<option>text</option>
						<option>number</option>
						<option>email</option>
						<option>tel</option>
					</Form.Control>
				</Form.Group>

				<Button variant="outline-primary" onClick={handleAdd} block>Add</Button>
			</Form>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		data: state.provider.data
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addQ: creds => dispatch(addQ(creds))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Builder);