'use strict';
var portFlag = false;
var contactFlag = false;
var aboutFlag = false;
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
  $('#contact').click(function(){
    if (contactFlag === false){
      $('#contact').animate({
        top: '-=50',
        width: '400',
        height: '150'
      }, 1000 );
      contactFlag = true;
    } else {
      $('#contact').animate({
        top: '+=50',
        width: '125',
        height: '30'
      }, 1000 );
      contactFlag = false;
    }
    $('#about').fadeToggle(1000);
    $('#portfolio').fadeToggle(1000);
    $('#contactInfo').slideToggle(1000);
  });
  $('#about').click(function(){
    if (aboutFlag === false){
      $('#about').animate({
        width: '400'
      }, 1000 );
      aboutFlag = true;
    } else {
      $('#about').animate({
        width: '125'
      }, 1000 );
      aboutFlag = false;
    }
    $('#contact').fadeToggle(1000);
    $('#portfolio').fadeToggle(1000);
    $('#aboutInfo').slideToggle(1000);
  });
});
