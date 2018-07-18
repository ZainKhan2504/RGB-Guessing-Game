var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function () {
			//grab the color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?"
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			}
			else
			{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	//generate new color
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.background = "none";
		}
	}
	//change h1 background
	h1.style.background = "steelblue";
}

// Reset Button
resetButton.addEventListener("click", function(){
	reset();
});

// Change color function
function changeColor(color) {
	// loop through all Squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

// picked color function
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// generate random color function
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat nums times
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		//get random color and push into arr
	}
	//return that arr
	return arr;
}

// random color fuction
function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}