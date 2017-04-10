'use strict';

(function(module) {
  const repoView = {};
repoView.render = function(data){
  const repoTemplate = Handlebars.compile($('#repo-template').text());
  $('#holder').append(data.map(repoTemplate));

}
  module.repoView = repoView;
})(window);
