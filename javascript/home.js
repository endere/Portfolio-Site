'use strict';
var portFlag = false;
var contactFlag = false;
var aboutFlag = false;
$(document).ready(function(){
  $('#portfolio > h1').click(function(){
    if (portFlag === false){
      $('#portfolio').animate({
        top: '-=100',
        width: '96%'
      }, 1000 );
      portFlag = true;
      $('#portfolio > h3').fadeToggle(1000);
      $('#about').fadeToggle(1000);
      $('#contact').fadeToggle(1000);
      $('.portfolioPiece').delay(1000).show(1000);
    }
  });
  $('#portfolio > h3').click(function(){
    $('#portfolio').animate({
      top: '+=100',
      width: '125'
    }, 1000 );
    portFlag = false;
    $('#portfolio > h3').fadeToggle(1000);
    $('#about').fadeToggle(1000);
    $('#contact').fadeToggle(1000);
    $('.portfolioPiece').hide(1000);
  });
  $('#contact > h1').click(function(){
    if (contactFlag === false){
      $('#contact').animate({
        top: '-=50',
        width: '96%',
        height: '150'
      }, 1000 );
      contactFlag = true;
      $('#contact > h3').fadeToggle(1000);
      $('#about').fadeToggle(1000);
      $('#portfolio').fadeToggle(1000);
      $('#contactInfo').delay(1000).show(1000);
    }
  });
  $('#contact > h3').click(function(){
    $('#contact').animate({
      top: '+=50',
      width: '125',
      height: '35'
    }, 1000 );
    contactFlag = false;
    $('#contact > h3').fadeToggle(1000);
    $('#about').fadeToggle(1000);
    $('#portfolio').fadeToggle(1000);
    $('#contactInfo').hide(1000);
  });
  $('#about > h1').click(function(){
    if (aboutFlag === false){
      $('#about').animate({
        width: '96%'
      }, 1000 );
      aboutFlag = true;
      $('#about > h3').fadeToggle(1000);
      $('#contact').fadeToggle(1000);
      $('#portfolio').fadeToggle(1000);
      $('#aboutInfo').delay(1000).show(1000);
    }
  });
  $('#about > h3').click(function(){
    $('#about').animate({
      width: '125'
    }, 1000 );
    aboutFlag = false;
    $('#about > h3').fadeToggle(1000);
    $('#contact').fadeToggle(1000);
    $('#portfolio').fadeToggle(1000);
    $('#aboutInfo').hide(1000);
  });
  $('.burger').click(function(){
    $('#menu').fadeToggle();
  });
});
