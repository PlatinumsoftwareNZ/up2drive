(function (angular) {
    'use strict';
    function yearMakeModelController(applicationService) {
        var ctrl = this;
        var currentStage = "";

        ctrl.$onInit = function () {

        };
    }

    angular.module('consumerApp').component('yearMakeModel', {
        templateUrl: 'app/year-make-model.component.html',
        controller: [ yearMakeModelController],
        bindings: {
            prefix: "<",
            model: "<",
            next: '&'
        },
    });
})(window.angular);