angular.module('consumerApp').controller('moreAboutYouController', ['optionsService', 'model', '$state', 'back', 'next', function (optionsService, model, $state, back, next) {
    var ctrl = this;

    ctrl.DriverLicenceOptions = [];
    ctrl.CurrentAddressTypeOptions = [];
    ctrl.GenderOptions = [];
    ctrl.YesNoOptions = [];
    ctrl.CreditHistoryOptions = [];
    ctrl.NewVehicleDetailTypeOptions = [];
    ctrl.YearMakeModelOption = null;
    ctrl.back = back;
    ctrl.next = next;
    ctrl.model = model;

    ctrl.$onInit = function () {

        ctrl.DriverLicenceOptions = optionsService.GetDriverLicenceOptions();
        ctrl.CurrentAddressTypeOptions = optionsService.GetCurrentAddressTypeOptions();
        ctrl.GenderOptions = optionsService.GetGenderOptions();
        ctrl.YesNoOptions = optionsService.GetYesNoOptions();
        ctrl.CreditHistoryOptions = optionsService.GetCreditHistoryOptions();
        ctrl.NewVehicleDetailTypeOptions = optionsService.GetNewVehicleDetailTypeOptions();
        ctrl.YearMakeModelOption = ctrl.NewVehicleDetailTypeOptions[0];
    }

    ctrl.RequestBack = function () {
        $state.go(ctrl.back);
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

    ctrl.FormSubmit = function (form) {
        console.log(ctrl.next);
        if (form.$valid) {
            $state.go(ctrl.next);
        } else {
            form.$setSubmitted();
            return false;
        }
    }
}]);