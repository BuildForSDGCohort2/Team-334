import React from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import home from './assets/home.png'
import menu from './assets/menu.png'
import logout from './assets/logout.png'
import videocamera from './assets/video-camera.png'
import envelope from './assets/envelope.png'
import { signOut } from '../../store/actions/authActions'


const Sidebar = ({ signOut, auth }) => {
	// if (!auth.uid) return <Redirect to="/" />
	return (
		<>
			<div className="side-bar mt-3">
				<div className="vector ml-3 mt-2 p-3">
					<p className="vector-name text-dark">AY</p>
				</div>

				<div className="dashboard-navs">
					<span className="head-title text-center">
						<img src={menu} alt="" />
						<span>Menu</span>
					</span>

					<div className="navigate-1 my-3 ml-2">
						<Link to="/user" >
							<img src={home} alt="" />
							<span>Home</span>
						</Link>
					</div>
					<div className="navigate-1 my-3 ml-2">
						<Link to="/user/questionnaire" >
							<img src={envelope} alt="" />
							<span>Notifications</span>
						</Link>
					</div>
					<div className="navigate-3 my-3 ml-2">
						<Link to="/join/video-chat" >
							<img src={videocamera} alt="" />
							<span>Join</span>
						</Link>
					</div>
					<div className="navigate-4 my-3 ml-2">
						<Link to="#logout" onClick={() => signOut()} >
							<img src={logout} alt="" />
							<span>Logout</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);