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