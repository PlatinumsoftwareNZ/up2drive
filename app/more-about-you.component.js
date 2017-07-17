angular.module('consumerApp').controller('moreAboutYouController', ['optionsService','persistenceService', 'model', '$state', 'back', 'next', 
function (optionsService, persistenceService, model, $state, back, next) {
    var ctrl = this;

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
        return ctrl.model.NewVehicleDetailId === 1;
    }

    ctrl.DisplayNewDetails = function () {
        return ctrl.model &&
            ctrl.model.NewVehicleDetailId !== 1 &&
            ctrl.model.NewVehicleDetailId !== 5;
    }

    ctrl.DisplayTradeYearMakeModel = function () {
        return ctrl.model.VehicleToTrade;
    }

    ctrl.FormSubmit = function (form) {
        if (form.$valid) {
            persistenceService
            .SubmitNow(model)
            .then(function (model) {
                angular.copy(model.data, ctrl.model);
                $state.go(ctrl.next);
            })
        } else {
            form.$setSubmitted();
            return false;
        }
    }
}]);