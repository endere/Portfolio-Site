'use strict';
var portFlag = false;
var contactFlag = false;
var aboutFlag = false;
$(document).ready(function(){
  $('#portName').click(function(){
    if (portFlag === false){
      $('#portfolio').animate({
        top: '-=100',
        width: '400'
      }, 1000 );
      portFlag = true;
      $('#portHide').fadeToggle(1000);
      $('#about').fadeToggle(1000);
      $('#contact').fadeToggle(1000);
      $('.portfolioPiece').slideToggle(1000);
    }
  });
  $('#portHide').click(function(){
    $('#portfolio').animate({
      top: '+=100',
      width: '125'
    }, 1000 );
    portFlag = false;
    $('#portHide').fadeToggle(1000);
    $('#about').fadeToggle(1000);
    $('#contact').fadeToggle(1000);
    $('.portfolioPiece').slideToggle(1000);
  });
  $('#contactName').click(function(){
    if (contactFlag === false){
      $('#contact').animate({
        top: '-=50',
        width: '400',
        height: '150'
      }, 1000 );
      contactFlag = true;
      $('#contactHide').fadeToggle(1000);
      $('#about').fadeToggle(1000);
      $('#portfolio').fadeToggle(1000);
      $('#contactInfo').slideToggle(1000);
    }
  });
  $('#contactHide').click(function(){
    $('#contact').animate({
      top: '+=50',
      width: '125',
      height: '35'
    }, 1000 );
    contactFlag = false;
    $('#contactHide').fadeToggle(1000);
    $('#about').fadeToggle(1000);
    $('#portfolio').fadeToggle(1000);
    $('#contactInfo').slideToggle(1000);
  });
  $('#aboutName').click(function(){
    if (aboutFlag === false){
      $('#about').animate({
        width: '400'
      }, 1000 );
      aboutFlag = true;
      $('#aboutHide').fadeToggle(1000);
      $('#contact').fadeToggle(1000);
      $('#portfolio').fadeToggle(1000);
      $('#aboutInfo').slideToggle(1000);
    }
  });
  $('#aboutHide').click(function(){
    $('#about').animate({
      width: '125'
    }, 1000 );
    aboutFlag = false;
    $('#aboutHide').fadeToggle(1000);
    $('#contact').fadeToggle(1000);
    $('#portfolio').fadeToggle(1000);
    $('#aboutInfo').slideToggle(1000);
  });
  $('.burger').click(function(){
    $('#menu').fadeToggle();
  });
});
