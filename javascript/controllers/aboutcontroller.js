'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('.info').hide();
   $('#about > .info').show();
  };

  module.aboutController = aboutController;
})(window);
