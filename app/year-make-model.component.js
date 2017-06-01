(function (angular) {
    'use strict';
    function yearMakeModelController(applicationService) {
        var ctrl = this;
        var currentStage = "";

        ctrl.$onInit = function () {
            console.log('$onInit: personalDetailsController');

            if(ctrl.model && ctrl.model.MiddleName){
                console.log('hai');
            }
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