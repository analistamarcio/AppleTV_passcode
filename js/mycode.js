function ChangeBgImg(e) {
	if (e == 1) { // Left button
		document.getElementById("rc_butons").style.backgroundImage = "url('images/AppleTV_RC_bt_Left.png')";
	} else if (e == 2) { // Select button
		document.getElementById("rc_butons").style.backgroundImage = "url('images/AppleTV_RC_bt_Select.png')";
	} else if (e == 3) { // Right button
		document.getElementById("rc_butons").style.backgroundImage = "url('images/AppleTV_RC_bt_Right.png')";
	} else { // Standby button (default)
		document.getElementById("rc_butons").style.backgroundImage = "url('images/AppleTV_RC_bt_stby.png')";
	}
}

function ButtonPressed(e) {
	if (e == 1) { // Left button click
		console.log("Left button");
	} else if (e == 2) { // Select button click
		console.log("Select button");
	} else { // Right button click
		console.log("Right button");
	}
}