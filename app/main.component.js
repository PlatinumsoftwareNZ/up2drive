(function (angular) {
    'use strict';
    function mainController($state, $rootScope) {
        var ctrl = this;

        ctrl.stage = function() {
            if ($state.current && $state.current.data) {
                return $state.current.data.stage;
            } else {
                return 0;
            }
        }    
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.component.html',
        controller: ['$state','$rootScope', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};