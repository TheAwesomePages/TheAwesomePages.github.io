myCookie = document.cookie;

if(myCookie.includes("valid")){
    alert("You are allowed!");
}
else{
    window.stop();
}
