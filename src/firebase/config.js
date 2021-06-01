import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyA-hu1C39KgbljmWoEjTuQKN0gJ4_03rx4",
	authDomain: "andylaiphoto-a8773.firebaseapp.com",
	projectId: "andylaiphoto-a8773",
	storageBucket: "andylaiphoto-a8773.appspot.com",
	messagingSenderId: "145745156034",
	appId: "1:145745156034:web:51480505f30e066cbce85b",
	measurementId: "G-TYLW1R62NG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const Storage = firebase.storage();
const Firestore = firebase.firestore();

export { Storage, Firestore };
