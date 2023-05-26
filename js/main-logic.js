var pbArray = null;

function start() {
	alert("Your step is first!");

	pbArray =
		[
			document.getElementById("pb-11"),
			document.getElementById("pb-12"),
			document.getElementById("pb-13"),
			document.getElementById("pb-21"),
			document.getElementById("pb-22"),
			document.getElementById("pb-23"),
			document.getElementById("pb-31"),
			document.getElementById("pb-32"),
			document.getElementById("pb-33")
		];

	for (element of pbArray) {
		element.addEventListener("click", setForm);
	}
}

start();

function restart() {
	location.reload();
}

class Person {
	name = "You";
	img = "url('img/x.png')";
	imgWord = "X";
}

class Computer {
	name = "Computer";
	img = "url('img/0.png')";
	imgWord = "0";
}

var person = new Person();
var compuret = new Computer();

function isWinner(gamer) {
	if (pbArray[0].title === gamer.imgWord &&
		pbArray[1].title === gamer.imgWord &&
		pbArray[2].title === gamer.imgWord) {
		return [pbArray[0], pbArray[1], pbArray[2]];
	}
	if (pbArray[3].title === gamer.imgWord &&
		pbArray[4].title === gamer.imgWord &&
		pbArray[5].title === gamer.imgWord) {
		return [pbArray[3], pbArray[4], pbArray[5]];;
	}
	if (pbArray[6].title === gamer.imgWord &&
		pbArray[7].title === gamer.imgWord &&
		pbArray[8].title === gamer.imgWord) {
		return [pbArray[6], pbArray[7], pbArray[8]];;
	}
	if (pbArray[0].title === gamer.imgWord &&
		pbArray[3].title === gamer.imgWord &&
		pbArray[6].title === gamer.imgWord) {
		return [pbArray[0], pbArray[3], pbArray[6]];;
	}
	if (pbArray[1].title === gamer.imgWord &&
		pbArray[4].title === gamer.imgWord &&
		pbArray[7].title === gamer.imgWord) {
		return [pbArray[1], pbArray[4], pbArray[7]];;
	}
	if (pbArray[2].title === gamer.imgWord &&
		pbArray[5].title === gamer.imgWord &&
		pbArray[8].title === gamer.imgWord) {
		return [pbArray[2], pbArray[5], pbArray[8]];;
	}
	if (pbArray[0].title === gamer.imgWord &&
		pbArray[4].title === gamer.imgWord &&
		pbArray[8].title === gamer.imgWord) {
		return [pbArray[0], pbArray[4], pbArray[8]];;
	}
	if (pbArray[2].title === gamer.imgWord &&
		pbArray[4].title === gamer.imgWord &&
		pbArray[6].title === gamer.imgWord) {
		return [pbArray[2], pbArray[4], pbArray[6]];;
	}
	return null;
}

function setWinnerColor(winnerLine) {
	for (pb of winnerLine) {
		pb.style.background = "yellow";
	}
}

/**
 * Return true if gamer begin winner after this step, other false.
*/
function step(gamer, pb) {
	var img = null;
	var imgWord = null;
	if (gamer === person) {
		img = gamer.img;
		imgWord = gamer.imgWord;
	}
	if (gamer === compuret) {
		img = gamer.img;
		imgWord = gamer.imgWord;
	}
	pb.style.backgroundImage = img;
	pb.title = imgWord;
	pb.style.pointerEvents = "none";
	pb.removeEventListener('click', setForm);
	var winnerLine = isWinner(gamer);
	if (winnerLine !== null) {
		setWinnerColor(winnerLine);
		setTimeout(function() {
			alert(gamer.name + " " + "win!");
		}, 1000);
		setTimeout(restart, 1000);
		return true;
	}
	return false;
}

function getStep() {
	var box = null;
	while (true) {
		box = Math.floor(Math.random() * 10);
		if (pbArray[box].title !== "X" && pbArray[box].title !== "0") {
			return pbArray[box];
		}
	}
}

function setForm(event) {
	var isWinner = null;
	for (let pb of pbArray) {
		if (event.target === pb) {
			isWinner = step(person, pb);
			break;
		}
	}
	if (!isWinner) {
		step(compuret, getStep());
	}
}