'use strict';
var portFlag = false;
var contactFlag = false;
var aboutFlag = false;
$(document).ready(function(){
  $('#portfolio > h1').click(function(){
    if (portFlag === false){
      portFlag = true;
      contactFlag = false;
      aboutFlag = false;
      $('.portfolioPiece').show(0);
      $('#contactInfo').hide(0);
      $('#aboutInfo').hide(0);
    } else {
      portFlag = false;
      $('.portfolioPiece').hide(0);
    }
  });
  $('#contact > h1').click(function(){
    if (contactFlag === false){
      contactFlag = true;
      portFlag = false;
      aboutFlag = false;
      $('.portfolioPiece').hide(0);
      $('#contactInfo').show(0);
      $('#aboutInfo').hide(0);
    } else {
      contactFlag = false;
      $('#contactInfo').hide(0);
    }
  });
  $('#about > h1').click(function(){
    if (aboutFlag === false){
      contactFlag = false;
      portFlag = false;
      aboutFlag = true;
      $('.portfolioPiece').hide(0);
      $('#contactInfo').hide(0);
      $('#aboutInfo').show(0);
    } else {
      aboutFlag = false;
      $('#aboutInfo').hide(0);
    }
  });
  $('section').click(function(){
    $('#menu').show(0);
  });
});
