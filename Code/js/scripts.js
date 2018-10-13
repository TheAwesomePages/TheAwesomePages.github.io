console.log('bdtgijc');
function toFindoutTheSalaryPerYear(){
	//this is our input
	var salary = document.getElementById("Salary").value;
	var hours = document.getElementById("Hours").value;
	//calculations
	var moola = salary*hours;
	if (hours>24) {
	alert("To many hours");	
	}
	//output
	alert(moola);

}
document.body.style.backgroundColor = "red";
function test(){
  
  
var choices =document.getElementsByTagName("input");
for (let i = 0; i < choices.length; i++) {
    if(choices[i].checked){
     color = String(choices[i].value)
      document.body.style.backgroundColor = color;
    }
    
}
  
}
var canvas = document.getElementById('myCanvas');
var recHeight = 40;
var recWidth = 40;
var x = canvas.width/2/2;
var y = canvas.height/2/2;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFF00";
ctx.fillRect(x,y,recHeight,recWidth);
