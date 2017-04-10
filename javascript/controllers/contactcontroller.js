'use strict';

(function(module) {
  const contactController = {};

  contactController.init = () => {
    $('.info').hide();
   $('#contact > .info').show();
  };

  module.contactController = contactController;
})(window);
