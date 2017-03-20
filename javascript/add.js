'use strict';
var newPort = {};
newPort.initNewPortPiece = function() {
  // TODO: Ensure the main .tab-content area is revealed. We might add more tabs later.
  $('.tab-content').show();
  // TODO: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we have data to export.
  $('#export-field').hide();
  $('#portfolio-json').on('focus', function(){
    this.select();
  });

  // TODO: Add an event handler to update the preview and the export field if any inputs change.
  $('form').on('change', newPort.create);
};

newPort.create = function() {
  // TODO: Set up a var to hold the new article we are creating.
  // Clear out the #articles element, so we can put in the updated preview
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

  // TODO: Use our interface to the Handblebars template to put this new article into the DOM:
  $('#newPieceHome').append(newPortPiece.toHtml());
  // TODO: Show our export field, and export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
  $('#export-field').show();
  $('#portfolio-json').val(JSON.stringify(newPortPiece) + ',');
};
