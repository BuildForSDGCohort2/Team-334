import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Img1 from '../assets/img_1.jpeg'
import Img2 from '../assets/img_2.jpg'
import Img3 from '../assets/img_3.jpg'
import Img4 from '../assets/img_4.jpg'

const SlideShow = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}
	const style = {
		width: "100vw",
		height: "70vh",
		opacity: ".75"
	}
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img src={Img1} alt="First Slide" style={style} />
				<Carousel.Caption>
					<h3 className="text-white"> Get diagnosed from the comfort of your home </h3>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={Img2} alt="First Slide" style={style} />
				<Carousel.Caption>
					<h3>Talk to professionals in real time</h3>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={Img3} alt="First Slide" style={style} />
				<Carousel.Caption>
					<h3>No spending time on Queue</h3>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={Img4} alt="First Slide" style={style} />
				<Carousel.Caption>
					<h3>Doctors on standby 24/7</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		)
}

export default SlideShow