'use strict';
var flag = false;
$('.section').on('click', function(){
  if (flag === false){
    $(this).animate({
      width: '96%'
    }, 1000 );
    $(this).find('h3').fadeToggle(1000);
    $('.section').fadeToggle(0);
    $(this).fadeIn(0);
    $(this).find('.info').delay(1000).show(1000);
    flag = true;
  } else if ($(this.h3)) {
    $(this).animate({
      width: '125'
    }, 1000 );
    $('.section').delay(1000).fadeIn();
    $(this).find('h3').fadeToggle(0);
    $(this).find('.info').delay(1000).hide(0);
    flag = false;
  }
});

$('.burger').on('click',function(){
  $('#menu').fadeToggle();
});
