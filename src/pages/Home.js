import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../Pages.css"; // why does this affect every pages files yea?

export default function Home() {
	return (
		<Carousel indicators={false}>
			<Carousel.Item interval={3000}>
				<img
					className="picture"
					src="/photos/Dusk_Hassanil_Bolkiah_Mosque_Lai-01-10-16.jpg"
					alt="Jame' Asr Hassanil Bolkiah Mosque, the Golden Mosque of Brunei Darussalam"
					onContextMenu={(e) => e.preventDefault()}
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="picture"
					src="/photos/OtheroneCitySg.jpg"
					alt="The Lion City, Panoramic view of Singapore from Marina Bay Sands"
					onContextMenu={(e) => e.preventDefault()}
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="picture"
					src="/photos/Oriental-Skyline-22-05-2021.jpg"
					alt="Victoria Harbour, Hong Kong city skyline"
					onContextMenu={(e) => e.preventDefault()}
				/>
			</Carousel.Item>
		</Carousel>
	);
}
