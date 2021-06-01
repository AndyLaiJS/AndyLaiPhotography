import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Galleries() {
	return (
		<div>
			{/* <BrowserRouter> */}
			<div className="overlayImg">
				<NavLink to="/hongkong" exact>
					<img
						src="/photos/Oriental-Skyline-22-05-2021.jpg"
						alt="Hong Kong"
						onContextMenu={(e) => e.preventDefault()}
					/>
					<div className="overlayTxt">HONG KONG</div>
				</NavLink>
			</div>
			<div className="overlayImg">
				<NavLink to="/singapore" exact>
					<img
						src="/photos/OtheroneCitySg.jpg"
						alt="The Lion City, Singapore"
						onContextMenu={(e) => e.preventDefault()}
					/>
					<div className="overlayTxt">SINGAPORE</div>
				</NavLink>
			</div>
			<div className="overlayImg">
				<NavLink to="/brunei" exact>
					<img
						src="/photos/Dusk_Hassanil_Bolkiah_Mosque_Lai-01-10-16.jpg"
						alt="Sultan Hassanil Bolkiah Mosque, Brunei Darussalam"
						onContextMenu={(e) => e.preventDefault()}
					/>
					<div className="overlayTxt">BRUNEI DARUSSALAM</div>
				</NavLink>
			</div>
			{/* The BrowserRouter and Switch are not necessary after you have already declared one in App.js */}
			{/* <Switch>
				<Route component={HongKong} path="/hongkong" exact />
				<Route component={Singapore} path="/singapore" exact />
				<Route component={Brunei} path="/brunei" exact />
			</Switch> */}
			{/* </BrowserRouter> */}
		</div>
	);
}
