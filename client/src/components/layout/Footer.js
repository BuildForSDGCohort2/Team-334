import React from 'react'
import { Container } from 'react-bootstrap'
import fb from './assets/facebook.png'
import ig from './assets/instagram.png'
import li from './assets/linkedin.png'
import tw from './assets/twitter.png'

const Footer = () => {

	return (
		<div style={{backgroundColor: "#005faf", height: "40vh"}}>
			<Container fluid className="text-light text-center">
				<div className="pt-5 social-icons">
					<h5>Our mission</h5>
					<p>To help you have access to high-quality and effective care at any time</p>
					<a href="#home"><img src={tw} alt="insta" /></a>
					<a href="#home"><img src={ig} alt="twitter" /></a>
					<a href="#home"><img src={li} alt="linkedin" /></a>
					<a href="#home"><img src={fb} alt="facebook" /></a>
					<div>
						<span> &#169; Vcare </span>
						<span> 2020 |  <a className="text-light mt-3" href="#sss">support.virtualcare.com</a></span>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Footer