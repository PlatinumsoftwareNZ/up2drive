(function (angular) {
    'use strict';
    function financialsController(optionsService, countryService) {
        var ctrl = this;

        ctrl.$onInit = function () {
        };

        ctrl.RequestBack = function(){
            ctrl.back();
        }

        ctrl.FormSubmit = function(){
            ctrl.next();
        }
    }

    angular.module('consumerApp').component('financials', {
        templateUrl: 'app/financials.component.html',
        controller: [ 'optionsService', 'countryService', financialsController],
        bindings: {
            model: "<",
            next: '&',
            back: '&'
        },
    });
})(window.angular);