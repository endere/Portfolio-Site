'use strict';
var portObjectArray = [];
function PortfolioObject(portData){
  this.name = portData.name;
  this.link = portData.link;
  this.img = portData.img;
  this.body = portData.body;
  this.category = portData.category;
  this.date = portData.date;
}
//
// function portSetup(){
//   for (var i = 0; i < portfolioData.length; i++) {
//     portObjectArray.push(new PortfolioObject(portfolioData[i]));
//   }
// }

PortfolioObject.prototype.toHtml = function(){
  //var $newPortfolioObject = $('div.template').clone();
  // $newPortfolioObject.removeClass('template');
  // $newPortfolioObject.addClass('portfolioPiece');
  // $newPortfolioObject.find('div.name').html(this.name);
  // $newPortfolioObject.find('a').attr('href', this.link);
  // $newPortfolioObject.find('a').html('Here is a link!');
  // $newPortfolioObject.find('img').attr('src', this.img);
  // $newPortfolioObject.find('p').html(this.description);
  // return $newPortfolioObject;
  var source = $('#portfolio-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};
// portSetup();
rawData.forEach(function(i) {
  portObjectArray.push(new PortfolioObject(i));
});
portObjectArray.forEach(function(i) {
  $('#portfolio').append(i.toHtml());
});
//code heavily drawn from 2nd pair programming lab
