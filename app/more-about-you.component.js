(function (angular) {
    'use strict';

    function moreAboutYouController(optionsService) {
        var ctrl = this;

        ctrl.DriverLicenceOptions = [];
        ctrl.CurrentAddressTypeOptions = [];
        ctrl.GenderOptions = [];
        ctrl.YesNoOptions = [];
        ctrl.CreditHistoryOptions = [];
        ctrl.NewVehicleDetailTypeOptions = [];
        ctrl.YearMakeModelOption = null;

        ctrl.$onInit = function () {

            ctrl.DriverLicenceOptions = optionsService.GetDriverLicenceOptions();
            ctrl.CurrentAddressTypeOptions = optionsService.GetCurrentAddressTypeOptions();
            ctrl.GenderOptions = optionsService.GetGenderOptions();
            ctrl.YesNoOptions = optionsService.GetYesNoOptions();
            ctrl.CreditHistoryOptions = optionsService.GetCreditHistoryOptions();
            ctrl.NewVehicleDetailTypeOptions = optionsService.GetNewVehicleDetailTypeOptions();
            ctrl.YearMakeModelOption = ctrl.NewVehicleDetailTypeOptions[0];
        }

        ctrl.DisplayNewYearMakeModel = function () {
            return ctrl.model &&
                ctrl.model.NewVehicleDetailType === ctrl.YearMakeModelOption;
        }

        ctrl.DisplayNewDetails = function () {
            return ctrl.model &&
                ctrl.model.NewVehicleDetailType !== ctrl.YearMakeModelOption &&
                ctrl.model.NewVehicleDetailType !== ctrl.StillLookingOption;
        }

        ctrl.DisplayTradeYearMakeModel = function () {
            return ctrl.model.VehicleToTrade;
        }

        ctrl.FormSubmit = function () {
            if (ctrl.form.$valid) {
                return true;
            } else {
                ctrl.form.$setSubmitted();
                return false;
            }
        }
    }

    angular.module('consumerApp').component('moreAboutYou', {
        templateUrl: 'app/more-about-you.component.html',
        controller: ['optionsService', moreAboutYouController],
        bindings: {
            model: "<",
            next: '&',
            back: '&',
            form: '='
        },
    });
})(window.angular);