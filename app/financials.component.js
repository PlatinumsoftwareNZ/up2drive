(function (angular) {
    'use strict';
    function financialsController(optionsService, countryService) {
        var ctrl = this;

        ctrl.$onInit = function () {
        };

        ctrl.DisplayNewYearMakeModel = function(){
            return ctrl.model
                && ctrl.model.NewVehicleDetailType === ctrl.YearMakeModelOption;
        }

        ctrl.DisplayNewDetails = function(){
            return ctrl.model
                && ctrl.model.NewVehicleDetailType !== ctrl.YearMakeModelOption
                && ctrl.model.NewVehicleDetailType !== ctrl.StillLookingOption;
        }

        ctrl.DisplayTradeYearMakeModel = function(){
            return ctrl.model.VehicleToTrade;
        }

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