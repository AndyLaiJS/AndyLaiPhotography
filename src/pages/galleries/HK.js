import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Storage, Firestore } from "../../firebase/config";

import "../../Pages.css";

export default function HK() {
	const [dbdata, setDBdata] = useState([]);
	var data = [];
	useEffect(() => {
		Firestore.collection("images").onSnapshot((snap) => {
			data = [];
			snap.forEach((doc) => {
				// documents.push({ ...doc.data(), id: doc.id });
				console.log(doc.data());
				data.push(doc.data());
			});
			setDBdata(data);
			// setDocs(documents);
		});
		// this is a cleanup function that react will run when
		// a component using the hook unmounts
	}, []);

	console.log(dbdata);
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
			{/* Photo Galleries starts here */}
			{dbdata && dbdata.map((data) => <img src={data.url} />)}
		</div>
	);
}