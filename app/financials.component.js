angular.module('consumerApp').controller('financialsController', ['model', 'back', 'next', '$state', function financialsController(model, back, next, $state, optionsService) {
    var ctrl = this;
    ctrl.model = model;
    ctrl.back = back;
    ctrl.next = next;
    ctrl.$onInit = function () {};

    ctrl.RequestBack = function () {
        $state.go(ctrl.back);
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