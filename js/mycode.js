// load and define the remote control image buttons
$(window).load(function() {
	var imgButtonDivs = document.getElementsByClassName("imgButton");
	for (var i = 0; i < 4; i++){
		imgButtonDivs[i].id = "img" + i.toString();
	}
	img0.style.backgroundImage = 'url("images/AppleTV_RC_bt_Left.png")';
	img1.style.backgroundImage = 'url("images/AppleTV_RC_bt_Select.png")';
	img2.style.backgroundImage = 'url("images/AppleTV_RC_bt_Right.png")';
	img3.style.backgroundImage = 'url("images/AppleTV_RC_bt_stby.png")';

	NewPasscodeRequire();

});

function NewPasscodeRequire() {
	// request passcode initialization
	Shuffle();
	currPasscodeDig = 0;
	result = 1;
	document.getElementsByClassName("pcPair" + (currDigPair + 1).toString() )[0].style.borderColor = "rgb(36,36,36)";
	currDigPair = 0;
	document.getElementsByClassName("pcPair" + (currDigPair + 1).toString() )[0].style.borderColor = "blue";
	document.getElementsByClassName("hash")[0].innerText = "";
	document.getElementsByClassName("hash")[0].style.color = "white";
	document.getElementsByClassName("result")[0].style.display = "none";
	document.getElementsByClassName("hash")[0].style.fontSize = "4em";
}

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
	var hashTag = "";
	if (e == 0) { // Left button click
		if (currDigPair > 0) {
			document.getElementsByClassName("pcPair" + (currDigPair + 1).toString() )[0].style.borderColor = "rgb(36,36,36)";
			currDigPair --;
			document.getElementsByClassName("pcPair" + (currDigPair + 1).toString() )[0].style.borderColor = "blue";
		}
	} else if (e == 1) { // Select button click
		if (currPasscodeDig < 4) {
			// update result var
			if (currentPass[currPasscodeDig] == stringPair[currDigPair * 2] || currentPass[currPasscodeDig] == stringPair[currDigPair * 2 + 1]) {
				result = result * 1;
			} else {
				result = result * 0;
			}
			// print hash simbols
			for (i = 0; i <= currPasscodeDig; i++) {
				hashTag = hashTag + "•";
			}
			document.getElementsByClassName("hash")[0].innerText = hashTag;
			// next pascode digit
			currPasscodeDig ++;
			if (currPasscodeDig == 4) { // show result
				if (result) {
					document.getElementsByClassName("hash")[0].innerText = "CORRECT";
					document.getElementsByClassName("hash")[0].style.color = "green";
				} else {
					document.getElementsByClassName("hash")[0].innerText = "INCORRECT";
					document.getElementsByClassName("hash")[0].style.color = "red";
				}
				document.getElementsByClassName("hash")[0].style.fontSize = "1.2em";
				document.getElementsByClassName("result")[0].style.fontSize = "0.8em";
				document.getElementsByClassName("result")[0].style.display = "inline";
			}
		}
	} else { // Right button click
		if (currDigPair < 4) {
			document.getElementsByClassName("pcPair" + (currDigPair + 1).toString() )[0].style.borderColor = "rgb(36,36,36)";
			currDigPair ++;
			document.getElementsByClassName("pcPair" + (currDigPair + 1).toString() )[0].style.borderColor = "blue";
		}
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

function Shuffle(){
	stringPair = [];
	var arrIndex = 0;
	var arrShuf = [];
	var numArray = [];

	// Array initialization with digits from 0 to 9
	for (var i = 0; i < 10; i++) {
		numArray[i] = i;
	}

	// Generate a shuffle array with elements of numArray
	for (var i = 0; i < 10; i++) {
		arrIndex = Math.floor((Math.random() * numArray.length));
		arrShuf[i] = numArray[arrIndex];
		numArray.splice(arrIndex,1);
	}

	// Generate an array with digits pairs (sorted pairs)
	for (var i = 0; i < 10; i = i + 2) {
		arrShuf[i] > arrShuf[i + 1] ? (stringPair[stringPair.length] = arrShuf[i + 1], stringPair[stringPair.length] = arrShuf[i]) : (stringPair[stringPair.length] = arrShuf[i], stringPair[stringPair.length] = arrShuf[i + 1])
		document.getElementsByClassName("pcPair" + ((i + 2)/2).toString() )[0].innerText = stringPair[i] + " - " + stringPair[i + 1];
	}
}
