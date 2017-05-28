var module = angular.module("mySuperAwesomeApp", []);

module.component("heros", {
  template: "My heros:",
  controller: function herosController() {},
  controllerAs: "$ctrl"
});

angular.element(document).ready(function() {
  angular.bootstrap(document, ["mySuperAwesomeApp"]);
});