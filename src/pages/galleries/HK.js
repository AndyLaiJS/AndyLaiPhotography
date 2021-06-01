import React from "react";
import { NavLink } from "react-router-dom";

import "../../Pages.css";

export default function HK() {
	return (
		<div>
			<h1> HONG KONG </h1>
			<p className="desc">
				Hong Kong is one of the most lively and largest cities in Asia. It is
				also where I am based at currently - as a student at The Chinese
				University of Hong Kong. The city offers a beautiful skyline, amazing
				food and also a unique cultural experience as being Asia’s World City.{" "}
			</p>
			<div className="galleryNavi">
				<NavLink to="/brunei" exact>
					&lt;&lt; Previous
				</NavLink>
				<NavLink to="/galleries" exact>
					Back to Galleries
				</NavLink>
				<NavLink to="/singapore" exact>
					Next &gt;&gt;
				</NavLink>
			</div>
			<p> hi </p>
		</div>
	);
}
