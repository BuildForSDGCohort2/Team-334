import React from 'react'
import { signOut } from '../../store/actions/providerAction'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import home from './assests/home.png'
import patient from './assests/medical.png'
import videocamera from './assests/video-camera.png'
import logout from './assests/logout.png'
import git from './assests/github.png'
import menu from './assests/menu.png'

const Sidebar = ({ signOut }) => {
	return (
		<>
			<div className="side-bar mt-3">
				<div className="vector ml-3 mt-2 p-3">
					<img src={git} alt="" />
					<p className="vector-name text-dark">Dr. Abdul</p>
				</div>

				<div className="dashboard-navs">
					<span className="head-title text-center">
						<img src={menu} alt="" />
						<span>Menu</span>
					</span>

					<div className="navigate-1 my-3 ml-2">
						<Link to="/staff" >
							<img src={home} alt="" />
							<span>Home</span>
						</Link>
					</div>
					<div className="navigate-2 my-3 ml-2">
						<Link to="/staff/noti" >
							<img src={patient} alt="" />
							<span>Patients</span>
						</Link>
					</div>
					<div className="navigate-3 my-3 ml-2">
						<Link to="/video-chat">
							<img src={videocamera} alt="" />
							<span>Create</span>
						</Link>
					</div>
					<div className="navigate-4 my-3 ml-2">
						<Link to="#logout" onClick={() => signOut()}>
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
		data: state.provider.data
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);