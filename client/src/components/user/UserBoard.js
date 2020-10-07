import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/style.css'
import Sidebar from './Sidebar'
import Panel from './Panel'
import Questionnaire from './Questionnaire'

const UserBoard = () => {
	
	return (
		<BrowserRouter>
			<Sidebar />
			<Switch>
				<Route exact path="/user" component={Panel} />
				<Route path="/user/questionnaire" component={Questionnaire} />
			</Switch>
		</BrowserRouter>
	)
}

export default UserBoard