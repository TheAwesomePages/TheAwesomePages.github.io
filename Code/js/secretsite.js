myCookie = document.cookie;

if(myCookie.includes("valid")){
    alert("You are allowed!")

    contents = myCookie.split(";");
    userFromCookie = contents[1].split(":")[1];
    alert("Welcome back " + userFromCookie)
   
}
else{
    window.stop();
}