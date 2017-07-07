angular.module('consumerApp').controller('financialsController', ['model', 'back', 'next', '$state', 'persistenceService', function financialsController(model, back, next, $state, optionsService, persistenceService) {
    var ctrl = this;
    ctrl.model = model;
    ctrl.back = back;
    ctrl.next = next;
    ctrl.$onInit = function () {};

    ctrl.RequestBack = function () {
        $state.go(ctrl.back);
    }

    ctrl.ApplyNow = function () {
        var application = null;

        persistenceService.SubmitNow(ctrl.model)
            .then(function (response) {
                if (response.data.CommittedId) {
                    ctrl.model.CommittedId = response.data.CommittedId;
                }
            }, function (response) {
                console.log(response.data);
            });
    }

    ctrl.FormSubmit = function (form) {
        if (form.$valid) {
            $state.go(ctrl.next);
        } else {
            form.$setSubmitted();
            return false;
        }
    }
}]);