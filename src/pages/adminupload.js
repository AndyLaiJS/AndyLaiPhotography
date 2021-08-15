import React, { useState, useEffect } from "react";
import { Storage, Firestore, timestamp } from "../firebase/config";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [region, setRegion] = useState(null);
	const [error, setError] = useState(null);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [alt, setAlt] = useState(null);

	useEffect(() => {
		if (file != null && region != null) {
			var name = file.name;
			const storageRef = Storage.ref(name);
			const collectionRef = Firestore.collection(region);

			storageRef.put(file).on(
				"state_changed",
				(snap) => {},
				(err) => {
					// console.log(err);
					setError(err);
				},
				async () => {
					const url = await storageRef.getDownloadURL();
					const createdAt = timestamp();
					var img = new Image();
					img.onload = async function () {
						// for getting the height and width
						var height = img.height;
						var width = img.width;
						// then send it to firestore
						await collectionRef.add({
							name,
							url,
							title,
							desc,
							height,
							width,
							createdAt,
							alt,
						});
					};
					img.src = url;
				}
			);
		}
	}, [file]);
	const types = ["image/png", "image/jpeg"];

	const HandleChange = (e) => {
		let selected = e.target.files[0];
		// var imgData = null;
		// // get URL of the img being uploaded
		// var img = new Image();
		// var love = "Wisely Natalia";
		// img.src = URL.createObjectURL(selected);
		// // once img is loaded, run this function
		// img.onload = function () {
		// 	imgData = getBase64Image(img);
		// 	// console.log(imgData); // imgData is our base64 encoding
		// 	var length = imgData.length;
		// 	var imageBytes = new ArrayBuffer(length);
		// 	var ua = new Uint8Array(imageBytes);
		// 	for (var i = 0; i < length; i++) {
		// 		ua[i] = imgData.charCodeAt(i);
		// 	}
		// 	console.log(imageBytes);
		// 	// the amazon stuff after here (hopefully no problems)
		// };

		// // copy pasted to convert into base64
		// // var xhr = new XMLHttpRequest();
		// // xhr.responseType = "blob";

		// // xhr.onload = function () {
		// // 	var recoveredBlob = xhr.response;

		// // 	var reader = new FileReader();

		// // 	reader.onload = function () {
		// // 		var blobAsDataUrl = reader.result;
		// // 		console.log(blobAsDataUrl);
		// // 	};

		// // 	reader.readAsDataURL(recoveredBlob);
		// // };
		// // xhr.open("GET", img); // no idea wats this
		// // xhr.send(); // no idea wats this

		// // attempt at storing works, but idk where is it even stored
		// localStorage.setItem("someimgs", img.src);
		// // history.push("/test");
		// history.push({
		// 	pathname: "/test",
		// 	state: love,
		// });
		// // console.log(lol);

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError("");
		} else {
			setFile(null);
			setError("Please select an image file (png or jpg)");
		}
	};

	const handleRegion = (e) => {
		setRegion(e.target.value);
	};

	const handleTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleDesc = (e) => {
		setDesc(e.target.value);
	};

	const handleAlt = (e) => {
		setAlt(e.target.value);
	};

	const showtxt = (e) => {
		console.log("REEE");
	};
	return (
		<form>
			<label>Region:</label>
			<input type="text" onChange={handleRegion}></input>

			<label>Title:</label>
			<input type="text" onChange={handleTitle}></input>
			<br></br>

			<label>Description:</label>
			<textarea rows="4" cols="50" onChange={handleDesc}></textarea>
			<br></br>

			<label>alt:</label>
			<input type="text" onChange={handleAlt}></input>
			<br></br>

			<label>
				<input type="file" onChange={HandleChange} />
			</label>
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>SUCCESS!</div>}
				<p>{region}</p>
				<p>{title}</p>
				<p>{desc}</p>
			</div>
		</form>
	);
};

export default UploadForm;
