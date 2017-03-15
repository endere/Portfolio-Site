'use strict';
function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
//  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}
var portObjectArray = [];
function PortfolioObject(portData){
  this.name = portData[0];
  this.link = portData[1];
  this.img = portData[2];
  this.description = portData[3];
}

function portSetup(){
  for (var i = 0; i < portfolioData.length; i++) {
    portObjectArray.push(new PortfolioObject(portfolioData[i]));
  }
}

PortfolioObject.prototype.toHtml = function(){
  var $newPortfolioObject = $('div.template').clone();
  $newPortfolioObject.removeClass('template');
  $newPortfolioObject.addClass('portfolioPiece');
  $newPortfolioObject.find('div.name').html(this.name);
  $newPortfolioObject.find('a').attr('href', this.link);
  $newPortfolioObject.find('a').html('Here is a link!');
  $newPortfolioObject.find('img').attr('src', this.img);
  $newPortfolioObject.find('p').html(this.description);
  return $newPortfolioObject;
};
  // console.log('name is' + this.name);
  // createElement('div', 'id', this.name, '', document.getElementById('portfolio'));
  // document.getElementById(this.name).setAttribute('class', 'portfolioPiece');
  // createElement('div', 'class', 'name', this.name, document.getElementById(this.name));
  // createElement('a', 'href', this.link, this.link, document.getElementById(this.name));
  // createElement('img', 'src', this.img, '', document.getElementById(this.name));
  // createElement('p', 'class', 'paragraph', this.description, document.getElementById(this.name));

portSetup();
portObjectArray.forEach(function(i) {
  $('#portfolio').append(i.toHtml());
});
//code heavily drawn from 2nd pair programming lab
