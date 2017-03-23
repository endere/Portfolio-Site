'use strict';
var portObjectArray = [];
var ports = {};
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
// ports.renderToPage() = function(){
//   portObjectArray.forEach(function(i) {
//     $('#portfolio').append(i.toHtml());
//   });
// };
PortfolioObject.prototype.toHtml = function(){
  var source = $('#portfolio-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};
// portSetup();
PortfolioObject.loadAll = function(rawData){
  rawData.forEach(function(i) {
    portObjectArray.push(new PortfolioObject(i));
  });
};
PortfolioObject.fetchAll = function(){
  if(localStorage.rawData){
    console.log('took this path');
    PortfolioObject.loadAll(JSON.parse(localStorage.rawData));
    portObjectArray.forEach(function(i) {
      $('#portfolio').append(i.toHtml());
    });
  } else {
    $.getJSON('javascript/data.json').then(function(rawData){
      console.log('test test test');
      PortfolioObject.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      portObjectArray.forEach(function(i) {
        $('#portfolio').append(i.toHtml());
      });
    }, function(err) {
      console.error(err);
    });
  }
};
//code heavily drawn from 2nd pair programming lab
