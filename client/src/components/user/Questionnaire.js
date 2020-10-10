import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

const Questionnaire = () => {
	useFirestoreConnect([
		{ path: 'user/questionnaire'}
	])

	const user = useSelector(state => state.firebase)

	console.log(user)


// 	const [questions, setQuestions] = useState([]);
// 
// 	const [answers, setAnswer] = useState([]);

	return (
		<>
			<Container>
				
			</Container>
		</>
	)
}

export default Questionnaire