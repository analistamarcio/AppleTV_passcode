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
	} else {
		// rc move (changing coords)
		if (mode) {
			// calculate new coords (X)
			if ((event.clientX - brdX) > 0 && (event.clientX - brdX + remote_control_stage.offsetWidth) < window.innerWidth) {
				rcX1 = event.clientX - brdX;
				rcX2 = rcX1 + remote_control_stage.offsetWidth;
			}
			// calculate new coords (Y)
			if ((event.clientY - brdY) > 0 && (event.clientY - brdY + remote_control_stage.offsetHeight) < window.innerHeight) {
				rcY1 = event.clientY - brdY;
				rcY2 = rcY1 + remote_control_stage.offsetHeight;
			}
			// move remote control (X and/or Y)
			remote_control_stage.style.left = rcX1.toString() + "px";
			remote_control_stage.style.top = rcY1.toString() + "px";
		}
	}
}






