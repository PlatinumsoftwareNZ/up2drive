(function (angular) {
    'use strict';
    function yearMakeModelController(applicationService) {
        var ctrl = this;
    }

    angular.module('consumerApp').component('yearMakeModel', {
        templateUrl: 'app/year-make-model.component.html',
        controller: [ yearMakeModelController],
        bindings: {
            prefix: "<",
            year: "=",
            make: "=",
            vehicleModel: "="
        },
    });
})(window.angular);