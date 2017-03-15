'use strict';
var portFlag = false;
var contactFlag = false;
$(document).ready(function(){
  $('#portfolio').click(function(){
    if (portFlag === false){
      $('#portfolio').animate({
        top: '-=100',
        width: '400'
      }, 1000 );
      portFlag = true;
    } else {
      $('#portfolio').animate({
        top: '+=100',
        width: '125'
      }, 1000 );
      portFlag = false;
    }
    $('#about').fadeToggle(1000);
    $('#contact').fadeToggle(1000);
    $('.portfolioPiece').slideToggle(1000);
  });
});
