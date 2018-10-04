window.onload = function(){
	// Set year on footer
	document.getElementById("footerYear").innerHTML = new Date().getFullYear();

	// Initialize Firebase
	firebase.initializeApp({
	apiKey: 'AIzaSyBgEsyiffCICWGf32cc4SspPa4MvKJf1Hw',
	authDomain: 'bengaluru-plog-run.firebaseapp.com',
	projectId: 'bengaluru-plog-run'
	});

	// Acknowledge changes
	firebase.firestore().settings({timestampsInSnapshots: true});

	// Initialize Cloud Firestore through Firebase
	var db = firebase.firestore();
}
