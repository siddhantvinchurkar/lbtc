window.onload = function(){

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

	// Initialize Autocomplete
	$(document).ready(function(){
		$('input.autocomplete').autocomplete({
			data:{
				"Banashankari 2nd Stage": null,
				"Jayanagar 4th Block": null,
				"Shantinagar": null
			},
		});
	});

	// Handle Bangalorean Checkbox
	document.getElementById("bangaloreanCheckbox").onclick = function(){
		if(document.getElementById("bangaloreanCheckbox").checked){
			document.getElementById("address").disabled = false;
			document.getElementById("addressContainer").style.display = "";
		}
		else{
			document.getElementById("address").disabled = true;
			document.getElementById("addressContainer").style.display = "none";
		}
	}

}
