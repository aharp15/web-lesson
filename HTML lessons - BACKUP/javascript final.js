//FINAL JAVASCRIPT

function $(id){
	return document.getElementById(id);
}

window.onload = function(){
	
	//REFERENCES IN HOME.HTML
	//MAKE A VARIABLE TO REFERENCE OUR HOME BUTTON FROM OUR HTML
	var homeButton = $("home");
	//MAKE A VARIABLE TO REFERENCE OUR GALLERY BUTTON
	var galleryButton = $("gallery");
	//MAKEE A VARIABLE TO REFERENCE THE ABOUT ME BUTTON
	var aboutMeButton = $("me");

	//REFERENCES IN ABOUT ME.HTML
	//MAKE A VARIABLE TO REFERENCE THE YOUTUBE DIV
	var youtube = $("youtube");
	//MAKE A VARIABLE TO REFERENCE THE INSTAGRAM DIV
	var ig = $("ig");
	//MAKE A VARIABLE TO REFERENCE THE KOFI DIV
	var kofi = $("kofi");
	
	
	//WE NEED TO ADD AN EVENT LISTENER TO FIND OUT WHEN SOMEONE PUTS THE MOUSE OVER THE HOME BUTTON
	//THEN WE NEED TO CHANGE THE WORDS WE WANT TO DISPLAY
	homeButton.addEventListener("mouseover", homeMessage);
	galleryButton.addEventListener("mouseover", galleryMessage);
	aboutMeButton.addEventListener("mouseover", aboutMeMessage);
	
	youtube.addEventListener("mouseover", youtubeMessage);
	ig.addEventListener("mouseover", igMessage);
	kofi.addEventListener("mouseover", kofiMessage);
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
	
	message = "WANNA KNOW MORE ABOUT ME?";
	
	$("welcomeMessage").innerHTML = message;
}

function youtubeMessage(){
	
	message = "GO CHECK OUT MY YOUTUBE CHANNEL";
	
	$("textSection").innerHTML = message;
}
function igMessage(){
	
	message = "GO CHECK OUT MY IG";
	
	$("textSection").innerHTML = message;
}
function kofiMessage(){
	
	message = "WANNA BUY ME A COFFEE?";
	
	$("textSection").innerHTML = message;
}