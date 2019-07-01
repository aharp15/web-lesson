function $(id){
	return document.getElementById(id);
}

var name = "anthony"; //strings are words and are always put inside of "" <-- quotation marks
var one = 1; //numbers don't need to be put in anything

window.onload = function(){
	
	alert(name + " " + one);
	
	//Make a variable for the div with the id of red
	var redButton = $("red");
	var blueButton = $("blue");
	var greenButton = $("green");
	
	redButton.addEventListener("click", changeToRed);
	blueButton.addEventListener("click", changeToBlue);
	greenButton.addEventListener("click", changeToGreen);
} 



function changeToRed(){
	$('HW').style.color = "red";
}

function changeToBlue(){
	$('HW').style.color = "blue";
}

function changeToGreen(){
	$('HW').style.color = "green";
}

