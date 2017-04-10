'use strict';

(function(module) {
  const repos = {};

  repos.all = [];


  repos.requestRepos = function(callback) {
  $.get('/github/*').then(res => repoView.render(res));

}
  module.repos = repos;
})(window);
//code taken from kilovolt exercise
