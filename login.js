
var allowedUsers =[ "bob" , "doodlemaster" , "bop34" , "ryan" , "eli"];
var passwards =[ "1234" , "awesome" , "me34" , "2468" , "coding"];


function myFunction(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	user = user.toLowerCase();

	if(allowedUsers.indexOf(user)!= -1 && passwards.indexOf(pass)!= -1)  {
		
		if (passwards[allowedUsers.indexOf(user)] == pass) {
			alert("You're in")
			document.cookie = "auth=valid; path=/";
			
			window.location.href="home.html";
		}
		
	}

	else
	{
		alert("Invalid Credentials");
}


}

var allowedUsers =[ "bob" , "doodlemaster" , "bop34" , "ryan" , "eli"];
var passwards =[ "1234" , "awesome" , "me34" , "2468" , "coding"];


function Function1(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	user = user.toLowerCase();

	if(allowedUsers.indexOf(user)!= -1 && passwards.indexOf(pass)!= -1)  {
		
		if (passwards[allowedUsers.indexOf(user)] == pass) {
			alert("You're in")
			window.location.href="home.html";
		}
		
	}

	else
	{
		alert("Invalid Credentials");
}


}


