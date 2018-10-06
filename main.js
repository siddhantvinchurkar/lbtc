window.onload = function(){
	// Register a Service Worker
//	if('serviceWorker' in navigator) {
//	  navigator.serviceWorker
//	           .register('sw.js')
//	           .then(function() { console.log("%cService Worker Registered!", "background:#222222; color:#BADA55;"); });
//	}

	// Set year on footer
	document.getElementById("footerYear").innerHTML = new Date().getFullYear();

	// Initialize Firebase
	firebase.initializeApp({
	apiKey: 'AIzaSyCAcZwPuicfi4Zn2Cj3V268YY26FXuzanE',
	authDomain: 'lets-be-the-change.firebaseapp.com',
	projectId: 'lets-be-the-change'
	});

	// Acknowledge changes
	firebase.firestore().settings({timestampsInSnapshots: true});

	// Initialize Cloud Firestore through Firebase
	var db = firebase.firestore();

	console.log("%cFirebase Initialized!", "background:#222222; color:#BADA55;");

	// Initialize Slider
	$(document).ready(function(){
		$('.slider').slider();
	});
}
