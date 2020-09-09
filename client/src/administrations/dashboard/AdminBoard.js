import React from 'react'
import Navs from './layouts/Navs.js'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Welcome from './layouts/Welcome.js'

const  AdminBoard = ({ auth }) => {
	if (!auth.uid) return <Redirect to="/" />
	return (
		<div>
			<Navs />
			<Welcome />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(AdminBoard)