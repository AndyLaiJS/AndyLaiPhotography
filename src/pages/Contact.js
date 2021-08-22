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
				style={{
					fontSize: "0.75rem",
					letterSpacing: "1px",
					paddingTop: "0.8%",
				}}
			>
				(+852) 69949398 | (+673) 7288098 |{" "}
				<a href="mailto:andylaijs@gmail.com" style={{ color: "black" }}>
					andylaijs@gmail.com
				</a>
			</div>
			<hr style={{ paddingBottom: "0.5%" }}></hr>

			<div className="fContainer">
				<div className="icons">
					<a
						href="https://www.linkedin.com/in/laijianshin/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/AndyLaiPhotography/socialIcons/linkedin.png"
							alt="LinkedIn Logo"
						/>
					</a>
					<a
						href="https://www.instagram.com/lai9879/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/AndyLaiPhotography/socialIcons/instagram.png"
							alt="Instagram Logo"
						/>
					</a>
					<a
						href="https://github.com/AndyPhoenix9879"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/AndyLaiPhotography/socialIcons/github.png"
							alt="Github Logo"
						/>
					</a>
				</div>
			</div>

			<img
				className="picture"
				src="/AndyLaiPhotography/photos/2.jpg"
				alt="Jame'Asr Hassanil Bolkiah Mosque, Brunei"
				onContextMenu={(e) => e.preventDefault()}
			/>
		</div>
	);
}
