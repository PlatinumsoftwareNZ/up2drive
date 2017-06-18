(function (angular) {
    'use strict';
    function financialOptionsController() {
        var ctrl = this;        
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