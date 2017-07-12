angular.module('consumerApp').controller('personalDetailsController', ['$state', 'optionsService', 'amortisationService', 'next', 'model',  function ($state, optionsService, amortisationService, next, model) {
    var ctrl = this;
    ctrl.next = next;
    ctrl.TermOptions = [];
    ctrl.model = model;

    ctrl.$onInit = function () {
        ctrl.TermOptions = optionsService.GetTermOptions();
    };

    ctrl.FormSubmit = function (form) {
        if (form.$valid) {
            $state.go(ctrl.next);
        } else {
            form.$setSubmitted();
            return false;
        }
    }
}]);