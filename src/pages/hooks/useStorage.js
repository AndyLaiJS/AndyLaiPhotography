import { useState, useEffect } from "react";
import { Storage, Firestore } from "../../firebase/config";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// references
		const storageRef = Storage.ref(file.name);
		const collectionRef = Firestore.collection("images");

		storageRef.put(file).on(
			"state_changed",
			(snap) => {},
			(err) => {
				setError(err);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				await collectionRef.add({ url });
			}
		);
	}, [file]);

	return { progress, url, error };
};

export default useStorage;
