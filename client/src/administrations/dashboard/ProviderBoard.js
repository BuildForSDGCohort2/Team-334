import React from 'react'
import './assests/sidebar.css'
import Sidebar from './Sidebar'
// import Panel from './Panel'
import WaitRoom from './WaitRoom'

const ProviderBoard = () => {
	return (
		<>
				<Sidebar />
			<div className="provider-grid">
				{/* <Panel /> */}
				<WaitRoom />
			</div>
		</>
	)
}

export default ProviderBoard