import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../Pages.css"; // why does this affect every pages files yea?

export default function Home() {
	var template = "/photos/";
	var dtype = ".jpg";

	var l = [];
	var fpic, spic, tpic;
	fpic = Math.floor(Math.random() * 7 + 1);
	l.push(fpic);

	do {
		spic = Math.floor(Math.random() * 7 + 1);
	} while (l.includes(spic));
	l.push(spic);

	do {
		tpic = Math.floor(Math.random() * 7 + 1);
	} while (l.includes(tpic));
	l.push(tpic);

	var src1, src2, src3;
	src1 = template + fpic + dtype;
	src2 = template + spic + dtype;
	src3 = template + tpic + dtype;

	return (
		<Carousel indicators={false}>
			<Carousel.Item interval={3000}>
				<img
					className="picture"
					src={src1}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="picture"
					src={src2}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="picture"
					src={src3}
					onContextMenu={(e) => e.preventDefault()}
				/>
			</Carousel.Item>
		</Carousel>
	);
}
