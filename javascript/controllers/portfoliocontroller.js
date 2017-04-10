'use strict';

(function(module) {
  const portfolioController = {};

  portfolioController.init = () => {
    PortfolioObject.fetchAll();
    $('.info').hide();
   $('#portfolio > .info').show();
  };

  module.portfolioController = portfolioController;
})(window);
