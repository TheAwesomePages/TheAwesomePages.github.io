//accordion
$( function() {
    $( "#accordion" ).accordion();
  } );


//Autocomplete
  $( function() {
    var availableTags = [
      "Adam",
      "Aaryan",
      "Arthur",
      "Bob",
      "Cole",
      "Charles",
      "Doug",
      "Dom",
      "Dennis",
      "Eli",
      "Erlic",
      "Gabe",
      "Henry",
      "Joe",
      "Jack",
      "Liam",
      "Peter",
      "Pat",
      "Ryan",
      "Rufus",
      "Seamus",
      "Stu"
    ];
    $( "#user" ).autocomplete({
      source: availableTags
    });
  } );
///////////////////////////



//Date picker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
////////////////////////////////////////////////

//Pop up
  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );
////////////////////////////////////



//Sortable
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
  ////////////////////////////////////////