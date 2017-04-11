'use strict';
var newPort = {};
newPort.initNewPortPiece = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#portfolio-json').on('focus', function(){
    this.select();
  });

  $('form').on('change', newPort.create);
};

newPort.create = function() {
  console.log('changed');
  var newPortPiece;
  $('#newPieceHome').empty();
  newPortPiece = new PortfolioObject({
    name: $('#portfolio-name').val(),
    link: $('#portfolio-link').val(),
    img: $('#portfolio-img').val(),
    date: $('#portfolio-date').val(),
    body: $('#portfolio-body').val(),
    category: $('#portfolio-category').val()
  });
  console.log(newPortPiece);
  $('#newPieceHome').append(newPortPiece.toHtml());
  $('#export-field').show();
  $('#portfolio-json').val(JSON.stringify(newPortPiece) + ',');
};
//much of the code was taken from the kilovolt exercise
