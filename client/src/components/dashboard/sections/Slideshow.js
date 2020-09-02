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
	const text = {
		background: "rgba(0, 0, 50, .3)",
		borderRadius: "5px"
	}
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img src={Img1} alt="First Slide" style={style} />
				<Carousel.Caption>
					<h5 className="text-light py-2" style={text}> Get diagnosed from the comfort of your home </h5>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={Img2} alt="Second Slide" style={style} />
				<Carousel.Caption>
					<h5 className="text-light py-2" style={text}>Talk to professionals in real time</h5>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={Img3} alt="Third Slide" style={style} />
				<Carousel.Caption>
					<h5 className="text-light py-2" style={text}>No spending time on Queue</h5>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img src={Img4} alt="Fourth Slide" style={style} />
				<Carousel.Caption>
					<h5 className="text-light py-2" style={text}>Doctors on standby 24/7</h5>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		)
}

export default SlideShow