function login(){
    user = document.getElementById("uname").value
    psw = document.getElementById("psw").value
    // alert(user)
    // alert(psw)

    if(user == "ryan" && psw =="1234"){
       alert("allowed") 
       document.cookie = "auth=valid; path=/"; 
       document.cookie = "user:"+ user;
       window.location.href = "secret.html";
       alert("hi")
    }

}