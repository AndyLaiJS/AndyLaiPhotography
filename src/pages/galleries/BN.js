import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Firestore } from "../../firebase/config";

import "../../Pages.css";

export default function BN() {
	const [dbdata, setDBdata] = useState([]);
	var data = [];
	useEffect(() => {
		Firestore.collection("bn")
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				data = [];
				snap.forEach((doc) => {
					// documents.push({ ...doc.data(), id: doc.id });
					console.log(doc.data());
					data.push(doc.data());
				});
				setDBdata(data);
				// setDocs(documents);
			});
	}, []);

	console.log(dbdata);
	return (
		<div>
			<h1> BRUNEI DARUSSALAM </h1>
			<p className="desc">
				A tiny nation on the northern coast of Borneo Island. It is my home
				country, and calls itself the "Green Heart of Borneo". The country is
				rich in not only oil but also in its lush greeneries of forests and
				jungles that has been impeccably preserved for generations to come. A
				tropical paradise.{" "}
			</p>
			<div className="galleryNavi">
				<NavLink to="/singapore" exact>
					&lt;&lt; Previous
				</NavLink>
				<NavLink to="/galleries" exact>
					Back to Galleries
				</NavLink>
				<NavLink to="/hongkong" exact>
					Next &gt;&gt;
				</NavLink>
			</div>
			{/* Photo Galleries starts here */}
			<div className="img-grid">
				{dbdata &&
					dbdata.map((data) =>
						data.height > data.width ? (
							<div className="vertical">
								<img src={data.url} />
								<div className="i-title">{data.title}</div>
								<div className="i-desc">{data.desc}</div>
							</div>
						) : (
							<div className="horizontal">
								<img src={data.url} />
								<div className="i-title">{data.title}</div>
								<div className="i-desc">{data.desc}</div>
							</div>
						)
					)}
			</div>
		</div>
	);
}
