(function (angular) {
    'use strict';
    function mainController() {
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.component.html',
        controller: ['$location', '$moment', 'persistenceService', 'optionsService', '$state', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};