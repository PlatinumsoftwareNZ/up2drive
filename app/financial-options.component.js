(function (angular) {
    'use strict';
    function financialOptionsController() {
        var ctrl = this;
        
        ctrl.$onInit = function () {
            console.log('here');
        };
    }

    angular.module('consumerApp').component('financialOptions', {
        templateUrl: 'app/financial-options.component.html',
        controller: [ financialOptionsController],
        bindings: {
            title: "<",
            options: "<"
        },
    });
})(window.angular);