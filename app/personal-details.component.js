angular.module('consumerApp').controller('personalDetailsController', ['$state', 'optionsService', 'persistenceService', 'next', 'model',  
    function ($state, optionsService, persistenceService, next, model) {
    var ctrl = this;
    ctrl.next = next;
    ctrl.TermOptions = [];
    ctrl.model = model;

    ctrl.$onInit = function () {
        ctrl.TermOptions = optionsService.GetTermOptions();
    };

    ctrl.FormSubmit = function (form) {
        if (form.$valid) {
            persistenceService
            .SubmitNow(model)
            .then(function (model) {
                ctrl.model.Id = model.data.Id;
                $state.go(ctrl.next);
            })
        } else {
            form.$setSubmitted();
            return false;
        }
    }
}]);