import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Firestore } from "../../firebase/config";

import "../../Pages.css";

export default function SG() {
	const [dbdata, setDBdata] = useState([]);
	const [selectedImg, setSelectedImg] = useState(null);

	const hideModal = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setSelectedImg(null);
		}
	};

	var data = [];
	useEffect(() => {
		Firestore.collection("sg")
			.orderBy("createdAt", "desc")
			.onSnapshot((snap) => {
				data = [];
				snap.forEach((doc) => {
					// documents.push({ ...doc.data(), id: doc.id });
					data.push(doc.data());
				});
				setDBdata(data);
				// setDocs(documents);
			});
	}, []);

	return (
		<div>
			<h1> SINGAPORE </h1>
			<p className="desc">
				Singapore is also one of the most vibrant and largest cities in Asia. It
				is a place I like to consider as a tropical beauty. The city offers a
				skyline that is modern, clean and impeccably beautiful. Expect epic food
				and a unique cultural experience in one of the greatest cities in South
				East Asia!{" "}
			</p>
			<div className="galleryNavi">
				<NavLink to="/hongkong" exact>
					&lt;&lt; Previous
				</NavLink>
				<NavLink to="/galleries" exact>
					Back to Galleries
				</NavLink>
				<NavLink to="/brunei" exact>
					Next &gt;&gt;
				</NavLink>
			</div>
			{/* Photo Galleries starts here */}
			<div className="img-grid">
				{dbdata &&
					dbdata.map((data) =>
						data.height > data.width ? (
							<div className="vertical" key={data.createdAt}>
								<img
									src={data.url}
									alt={data.alt}
									onContextMenu={(e) => e.preventDefault()}
									onClick={(e) => setSelectedImg(data.url)}
								/>
								<div className="i-title">{data.title}</div>
								<div className="i-desc">{data.desc}</div>
							</div>
						) : (
							<div className="horizontal" key={data.createdAt}>
								<img
									src={data.url}
									alt={data.alt}
									onContextMenu={(e) => e.preventDefault()}
									onClick={(e) => setSelectedImg(data.url)}
								/>
								<div className="i-title">{data.title}</div>
								<div className="i-desc">{data.desc}</div>
							</div>
						)
					)}
			</div>
			{selectedImg && (
				<div
					className="backdrop"
					onClick={hideModal}
					onContextMenu={(e) => e.preventDefault()}
				>
					<img src={selectedImg} alt="enlarged pic" />
				</div>
			)}
		</div>
	);
}
