
var allowedUsers =[ "bob" , "doodlemaster" , "bop34" , "ryan" , "eli"];


function myFunction(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	user = user.toLowerCase();

	if(allowedUsers.indexOf(user)!= -1 && passwards.indexOf(pass)!= -1)  {
		
		if (passwards[allowedUsers.indexOf(user)] == pass) {
			alert("You're in")
			window.location.href="file:///E:/aaryan's%20stuff/Class%202/Final%20project/home.html";
		}
		
	}

	else
	{
		alert("Invalid Credentials");
}


}

	// 