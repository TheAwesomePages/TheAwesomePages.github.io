window.onload = function () {

	if (window.jQuery) {
	alert("Yeah. jQuery is working");	
	}

	
}
$("#Madlib").hide();
function Madlibs() {
	var choice1 = document.getElementById('ad5').value;
	var choice2 = document.getElementById('ad6').value;
	var n1 = document.getElementById('n5').value;
	var n2 = document.getElementById('n6').value;
	var PN1 = document.getElementById('PN5').value;
	var G1 = document.getElementById('G2').value;
	var PN2 = document.getElementById('PN6').value;
	var v1ing = document.getElementById('v5ing').value;
	var v2ing = document.getElementById('v6ing').value;
	var PN3 = document.getElementById('PN7').value;
	var v3ing = document.getElementById('v7ing').value;
	var n3 = document.getElementById('n7').value;
	var p1 = document.getElementById('p2').value;
	var potb = document.getElementById('potb2').value;
	var ap1 = document.getElementById('ap2').value;
	var v4ing = document.getElementById('v8ing').value;
	var ad3 = document.getElementById('ad7').value;
	var N1 = document.getElementById('N2').value;
	var PN4 = document.getElementById('PN8').value;
	// var choice1 = prompt("adjective");
	// var choice2 = prompt("adjective");
	// var n1 = prompt("noun");
	// var n2 = prompt("noun");
	// var PN1 = prompt("Plural Noun");
	// var G1 = prompt("Game");
	// var PN2 = prompt("Plural Noun");
	// var v1ing = prompt("verb ending in ing");
	// var v2ing = prompt("verb ending in ing");
	// var PN3 = prompt("Plural Noun");
	// var v3ing = prompt("verb ending in ing");
	// var n3 = prompt("noun");
	// var p1 = prompt("Plant");
	// var potb = prompt("part of the body");
	// var ap1 = prompt("A place");
	// var v4ing = prompt("verb ending in ing");
	// var ad3 = prompt("adjective");
	// var N1 = prompt("Number");
	// var PN4 = prompt("Plural Noun");
	$("#Madlib").show();
	$("#ad1").replaceWith("<span>"+ choice1 +"</span>");
	$("#ad2").replaceWith("<span>" + choice2 + "</span>");
	$("#n1").replaceWith("<span>" + n1 + "</span");
	$("#n2").replaceWith("<span>" + n2 + "</span");
	$("#PN1").replaceWith("<span>" + PN1 + "</span");
	$("#G1").replaceWith("<span>" + G1 + "</span");
	$("#PN2").replaceWith("<span>" + PN2 + "</span");
	$("#v1ing").replaceWith("<span>" + v1ing + "</span>");
	$("#v2ing").replaceWith("<span>" + v2ing + "</span>");
	$("#PN3").replaceWith("<span>" + PN3 + "</span>");
	$("#v3ing").replaceWith("<span>" + v3ing + "</span>");
	$("#n3").replaceWith("<span>" + n3 + "</span>");
	$("#p1").replaceWith("<span>" + p1 + "</span>");
	$("#potb").replaceWith("<span>" + potb + "</span>");
	$("#ap1").replaceWith("<span>" + ap1 + "</span>");
	$("#v4ing").replaceWith("<span>" + v4ing + "</span>");
	$("#ad3").replaceWith("<span>" + ad3 + "</span>");
	$("#N1").replaceWith("<span>" + N1 + "</span>");
	$("#PN4").replaceWith("<span>" + PN4 + "</span>");
}