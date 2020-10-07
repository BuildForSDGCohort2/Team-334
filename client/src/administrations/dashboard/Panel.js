import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import envelope from './assests/envelope.png'
import msg from './assests/email.png'
import trend from './assests/trend.png'
import settings from './assests/settings.png'

const Panel = () => {
	return (
		<>
			<div className="panel-wrapper">
				<div className="notifications">
					<img src={envelope} alt="" />
					<img src={msg} alt="" />
				</div>
				<Row className="mt-5 mx-0">
					<Col>
						<div className="box-1">
							<img src={trend} alt="" />
							<span>Demo text</span>
						</div>
					</Col>
					<Col>
						<div className="box-2">
							<Link to="/update">
								<img src={settings} alt="" />
								<span>Demo text-2</span>	
							</Link>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Panel