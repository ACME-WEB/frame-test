import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB77gFMizGbuIhEMdgAj4z2D6-QSHvPUQI",
	authDomain: "kcmic-admin.firebaseapp.com",
	databaseURL: "https://kcmic-admin.firebaseio.com",
	projectId: "kcmic-admin",
	storageBucket: "kcmic-admin.appspot.com",
	messagingSenderId: "875933999316",
	appId: "1:875933999316:web:1cac5345c064f701951b41",
	measurementId: "G-5TRV506CF5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
