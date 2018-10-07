window.onload = function(){
	// Register a Service Worker
//	if('serviceWorker' in navigator) {
//	  navigator.serviceWorker
//	           .register('sw.js')
//	           .then(function() { console.log("%cService Worker Registered!", "background:#222222; color:#BADA55;"); });
//	}

	// Load Header
	$("#header").load("header.html");

	// Load Footer
	$("#footer").load("footer.html");

	// Load Final Section
	$("#finalSection").load("final_section.html");

	// Initialize Firebase
	firebase.initializeApp({
	apiKey: 'AIzaSyCAcZwPuicfi4Zn2Cj3V268YY26FXuzanE',
	authDomain: 'lets-be-the-change.firebaseapp.com',
	projectId: 'lets-be-the-change'
	});

	// Acknowledge Firestore timestamp changes
	firebase.firestore().settings({timestampsInSnapshots: true});

	// Initialize Cloud Firestore through Firebase
	var db = firebase.firestore();

	// Initialize Slider
	$(document).ready(function(){
		$('.slider').slider();
	});

	// Precautions.
	document.getElementById("requestRefresh").innerHTML = "Refresh?"

}
