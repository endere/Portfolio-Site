'use strict';
var portFlag = false;
$(document).ready(function(){
  $('#portfolio').click(function(){
    if (portFlag === false){
      $('#about').fadeOut(1000);
      $('#contact').fadeOut(1000);
      $('#portfolio').animate({
        top: '+=100',
        left: '+=200',
        width: '500'
      }, 1000 );
      $('.portfolioPiece').slideDown(1000);
      portFlag = true;
    } else {
      $('#about').fadeIn(1000);
      $('#contact').fadeIn(1000);
      $('#portfolio').animate({
        top: '-=100',
        left: '-=200',
        width: '125'
      }, 1000 );
      $('.portfolioPiece').slideUp(1000);
      portFlag = false;
    }
  });
});
