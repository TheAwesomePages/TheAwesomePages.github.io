$(document).ready(function(){
 //load jquery
  
   $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #dot').click(function(){
		var v = $(this).val();
    var total = $('textarea').val($('textarea').val() + v); 
    });
  
  //clicking equal sign evaluates the textarea
  $('#equal').click(function(){
    $('textarea').val(eval($('textarea').val()));
    });

  
  $('#clear').click(function(){
      $('textarea').val('');
    });
  
});