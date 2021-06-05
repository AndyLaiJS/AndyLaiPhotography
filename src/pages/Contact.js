import React from "react";
import "../Pages.css";

export default function Contact() {
	return (
		<div>
			<div className="header">I'd love to hear from you!</div>

			<hr></hr>
			<div
				className="desc"
				style={{
					textAlign: "center",
					width: "80%",
					padding: "0 8%",
					margin: "auto",
				}}
			>
				The Chinese University of Hong Kong | Shatin, New Territories, Hong Kong
			</div>
			<div
				style={{ fontSize: "1.3vh", letterSpacing: "1px", paddingTop: "0.8%" }}
			>
				(+852) 69949398 | (+673) 7288098 |{" "}
				<a href="mailto:andylaijs@gmail.com" style={{ color: "black" }}>
					andylaijs@gmail.com
				</a>
			</div>
			<hr style={{ paddingBottom: "0.5%" }}></hr>

			<div className="fContainer" style={{ paddingBottom: "0" }}>
				<div className="icons">
					<a href="https://www.linkedin.com/in/laijianshin/" target="_blank">
						<img src="/socialicons/linkedin.png" />
					</a>
					<a href="https://www.instagram.com/lai9879/" target="_blank">
						<img src="/socialicons/instagram.png" />
					</a>
					<a href="https://github.com/AndyPhoenix9879" target="_blank">
						<img src="/socialicons/github.png" />
					</a>
				</div>
			</div>

			<img
				className="picture"
				src="/photos/Dusk_Hassanil_Bolkiah_Mosque_Lai-01-10-16.jpg"
				onContextMenu={(e) => e.preventDefault()}
			/>
		</div>
	);
}
