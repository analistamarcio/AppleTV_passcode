// load and define the remote control image buttons
$(window).load(function() {
	var imgButtonDivs = document.getElementsByClassName("imgButton");
	for (var i = 0; i < 4; i++){
		imgButtonDivs[i].id = "img" + i.toString();
	}
	img0.style.backgroundImage = 'url("images/AppleTV_RC_bt_Left.png")'
	img1.style.backgroundImage = 'url("images/AppleTV_RC_bt_Select.png")'
	img2.style.backgroundImage = 'url("images/AppleTV_RC_bt_Right.png")'
	img3.style.backgroundImage = 'url("images/AppleTV_RC_bt_stby.png")'
});

function ChangeBgImg(imgIndex) {
	// change images z-index (show/hide image as hover)
	for (var i = 0; i < 4; i++) {
		image = document.getElementById("img" + i.toString());
		if (i == imgIndex) {
			image.style.zIndex = 6;
		} else {
			image.style.zIndex = i + 2;
		}
	}
}

function ButtonPressed(e) {
	if (e == 0) { // Left button click
		console.log("Left button");
	} else if (e == 1) { // Select button click
		console.log("Select button");
	} else { // Right button click
		console.log("Right button");
	}
}

function MoveRC(e) {
	if (e == 1) {
		// rc move start
		mode = true;
		brdX = event.clientX - rcX1;
		brdY = event.clientY - rcY1;
	} else if (e == 0) {
		// rc move end
		mode = false;
	} else {
		// rc move (changing coords)
		if (mode) {
			rcX1 = event.clientX - brdX;
			remote_control_stage.style.left = rcX1.toString() + "px";
			rcY1 = event.clientY - brdY;
			remote_control_stage.style.top = rcY1.toString() + "px";
			// console.log("rcX1 = " + rcX1 + " rc_posX = " + remote_control_stage.style.left);
		}
	}
}






