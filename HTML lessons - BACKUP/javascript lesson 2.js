//JAVASCRIPT FOR HTML LESSON 9

function $(id){
	return document.getElementById(id);
}

window.onload = function(){
	
	//MAKE A VARIABLE TO REFERENCE OUR HOME BUTTON FROM OUR HTML
	var homeButton = $("home");
	
	
	//WE NEED TO ADD AN EVENT LISTENER TO FIND OUT WHEN SOMEONE PUTS THE MOUSE OVER THE HOME BUTTON
	//THEN WE NEED TO CHANGE THE WORDS WE WANT TO DISPLAY
	homeButton.addEventListener("mouseover", homeMessage);
	
}

	//MAKE A VARIABLE THAT WILL DISPLAY OUR NEW MESSAGES
	var message;
	
//MAKE A FUNCTION THAT WE  WILL CALL WHEN WE PUT THE MOUSE OVER THE HOME BUTTON
function homeMessage(){
	
	message = "YOU'LL JUST END UP BACK HERE";//THIS IS WHAT WE WANT TO SAY
	
	//INNER HTML CAN CHANGE THE WORDS OF AN ELEMENT IN HTML
	//GET THE ID OF <p> TAG IN OUR HTML THAT WE WANT TO CHANGE
	$("welcomeMessage").innerHTML = message;
}

function galleryMessage(){
	
	message = "CHECK OUT SOME OF MY WORK";
	
	$("welcomeMessage").innerHTML = message;
}

function aboutMeMessage(){
	
	message = "WANNA KNOW MORE ABOUT ME";
	
	$("welcomeMessage").innerHTML = message;
}