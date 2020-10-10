import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assests/css/style.css'
import Sidebar from './Sidebar'
import Panel from './Panel'
import UpdateDetails from './UpdateDetails'
import Notification from './Notification'

const ProviderBoard = () => {
// 	const [view, setView ] = useState('');
// 
// 	const handleViewChange = useCallback(e => {
// 		setView(e);
// 	}, []);
	
	return (
		<>
			<BrowserRouter>
				<Sidebar />
				<Switch>
					<Route exact path="/staff" component={Panel} />
					<Route path="/staff/noti" component={Notification} />
					<Route path="/staff/profile" component={UpdateDetails} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default ProviderBoard