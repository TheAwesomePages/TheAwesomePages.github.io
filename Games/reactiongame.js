//we start our time and count at 0
var counter = 0;
var seconds = 0;
////////////////////////////




//we hide most of the html with Jquery, except the StartButton
$('#start').hide();
$('#dot').hide();
$('#endScreen').hide();
//////////////////////////////////////////////////////


//instead of needing an onclick, we use jquery and mouseover!
$('#startGame').on( "mouseover", function() {
  $(this).hide(); //hides the object we're move the mouse over
  
  //we randomize a coordinate 
  var randWidth =  Math.ceil(Math.random() * 350);
  var randHeight =  Math.ceil(Math.random() * 350);
  
  //Jquery will make the dot appear fast! and give it the random coordinate from above
  $('#dot').show('fast');
  $('#dot').css('top', randHeight);
  $('#dot').css('left', randWidth);
  /////////////////////////////////////////////////


  //basic timer with jquery
   window.setInterval(function(){
      seconds = seconds + 1;
      $('#timer span').html(seconds);
    }, 1000); 
});

//When we go over each new start button we make a new random dot
$('#start').on( "mouseover", function() {
  
  var randWidth =  Math.ceil(Math.random() * 360);
  var randHeight =  Math.ceil(Math.random() * 360);
  
  $('#dot').show('fast');
  $('#dot').css('top', randHeight);
  $('#dot').css('left', randWidth);
  $(this).hide('fast');
});

//When we go over the dot we hide it and add to our counter
$('#dot').on( "mouseover", function() {
  counter = counter + 1;
  $('#counter span').html(counter);
  
  if(counter == 10){
  $('#endScreen').show('medium');
    $('#endCount').html(counter);
    $('#endSeconds').html(seconds);
  }
  
  //hide dot, make a new start button appear
  $(this).hide('fast');
  $('#start').show('fast');
  
});
