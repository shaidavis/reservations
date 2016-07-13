var button = document.getElementById("theButton"),
value =  button.form.valueId.value;
button.onclick = function() {
    foo(value);
}

var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true },
}

// var name = prompt('Please enter the name for your reservation');
name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase(); // capitalize the first letter of the given name and make the rest of the string lower case

var claimReservation = function () {
	
	// reservations[name] = reservations[name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()];

	if (reservations.hasOwnProperty(name)) 
	{
		if (reservations[name].claimed === false) {
			alert("Come on in, " + name + "!");
		} else if (reservations[name].claimed === true) {
			alert("You're already here, " + name + "!");		
		} 
	} else {
			// alert("No dice, " + name + "!"); 
			reservations[name] = name;
			reservations[name].claimed = true;
			alert("Good news! We found you a table, " + name + "!");
		}
}

claimReservation();


