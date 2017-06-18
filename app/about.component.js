(function (angular) {
    'use strict';
    function aboutController(optionsService, countryService) {
        var ctrl = this;

        ctrl.GenderOptions = optionsService.GetGenderOptions();
        ctrl.RelationshipStatusOptions = optionsService.GetRelationshipStatusOptions();
        ctrl.NewVehicleDetailTypeOptions = optionsService.GetNewVehicleDetailTypeOptions();
        ctrl.YearMakeModelOption = ctrl.NewVehicleDetailTypeOptions[0];
        ctrl.StillLookingOption = ctrl.NewVehicleDetailTypeOptions[4];
        ctrl.YesNoOptions = optionsService.GetYesNoOptions();
        ctrl.CountryOptions = countryService.GetCountries();
        ctrl.DriverLicenceOptions = optionsService.GetDriverLicenceOptions();        
        ctrl.CreditHistoryOptions = optionsService.GetCreditHistoryOptions();

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

    angular.module('consumerApp').component('about', {
        templateUrl: 'app/about.component.html',
        controller: [ 'optionsService', 'countryService', aboutController],
        bindings: {
            model: "<",
            next: '&',
            back: '&'
        },
    });
})(window.angular);