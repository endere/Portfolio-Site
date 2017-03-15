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

PortfolioObject.prototype.render = function(){
  console.log('name is' + this.name);
  createElement('div', 'id', this.name, '', document.getElementById('portfolio'));
  document.getElementById(this.name).setAttribute('class', 'portfolioPiece');
  createElement('div', 'class', 'name', this.name, document.getElementById(this.name));
  createElement('a', 'href', this.link, this.link, document.getElementById(this.name));
  createElement('img', 'src', this.img, '', document.getElementById(this.name));
  createElement('p', 'class', 'paragraph', this.description, document.getElementById(this.name));
};

portSetup();
console.log(portObjectArray);
for (var i = 0; i < portObjectArray.length; i++) {
  portObjectArray[i].render();
}
