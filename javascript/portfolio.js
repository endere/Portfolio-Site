'use strict';
(function(module) {

  var portObjectArray = [];
  function PortfolioObject(portData){
    this.name = portData.name;
    this.link = portData.link;
    this.img = portData.img;
    this.body = portData.body;
    this.fucksGiven = portData.fucksGiven;
    this.category = portData.category;
    this.date = portData.date;
  }

  PortfolioObject.prototype.toHtml = function(){
    var source = $('#portfolio-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  };
  // portSetup();
  PortfolioObject.loadAll = function(rawData){
    rawData.map((i) => {
      portObjectArray.push(new PortfolioObject(i));
    });
  };
  PortfolioObject.fetchAll = function(){
    if(localStorage.rawData){
      console.log('took this path');
      PortfolioObject.loadAll(JSON.parse(localStorage.rawData));
      portObjectArray.map((i) => {
        $('#portfolio').append(i.toHtml());
      });
      $('#fucksGiven').append(portObjectArray.map((a) => parseInt(a.fucksGiven)).reduce((b, c) => b + c));
    } else {
      $.getJSON('javascript/data.json').then(function(rawData){
        console.log('test test test');
        PortfolioObject.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        portObjectArray.map((i) => {
          $('#portfolio').append(i.toHtml());
        });
        $('#fucksGiven').append(portObjectArray.map((a) => parseInt(a.fucksGiven)).reduce((b, c) => b + c));
      }, function(err) {
        console.error(err);
      });
    }
  };
//code heavily drawn from 2nd pair programming lab
  module.PortfolioObject = PortfolioObject;
})(window);
