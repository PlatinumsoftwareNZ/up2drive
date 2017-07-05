(function (angular) {
    'use strict';

    function personalDetailsController(optionsService, amortisationService) {
        var ctrl = this;

        ctrl.TermOptions = [];

        
        ctrl.$onInit = function () {
            ctrl.TermOptions = optionsService.GetTermOptions();

        };

        ctrl.FormSubmit = function () {
            if (ctrl.form.$valid) {
                return true;
            } else {
                ctrl.form.$setSubmitted();
                return false;
            }
        }
    }

    angular.module('consumerApp').component('personalDetails', {
        templateUrl: 'app/personal-details.component.html',
        controller: ['optionsService', 'amortisationService', personalDetailsController],
        bindings: {
            model: "<",
            next: '&',
            form: '='
        },
    });
})(window.angular);