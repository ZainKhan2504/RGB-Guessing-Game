var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var square = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;
for (var i = 0; i < square.length; i++) {
	//add initial color to squares
	square[i].style.background = colors[i];
	//add click listeners to squares
	square[i].addEventListener("click", function () {
		//grab the color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor)
		{
			alert("Correct!!");
		}
		else
		{
			alert("Worng!!!");
		}
	});
}