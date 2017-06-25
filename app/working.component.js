(function (angular) {
    'use strict';
    function workingController() {
        var ctrl = this;
    }

    angular.module('consumerApp').component('working', {
        templateUrl: 'app/working.component.html',
        controller: [ workingController ]
    });
})(window.angular);