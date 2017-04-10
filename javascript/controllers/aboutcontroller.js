'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('.info').hide();
   $('#about > .info').show();
   repos.requestRepos();
  };

  module.aboutController = aboutController;
})(window);
