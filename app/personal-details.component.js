(function (angular) {
    'use strict';
    function personalDetailsController(optionsService) {
        var ctrl = this;

        ctrl.TermOptions = optionsService.GetTermOptions();

        ctrl.$onInit = function () {

        };

        ctrl.GetLoanAmount = function () {
            if (!ctrl.model) return 0;

            var loanAmount = 0;

            if (ctrl.model.CashPrice)
                loanAmount += parseFloat(ctrl.model.CashPrice);

            if (ctrl.model.Deposit)
                loanAmount -= parseFloat(ctrl.model.Deposit);

            return loanAmount;
        }

        ctrl.Test = function () {
            console.log(ctrl.GetMonthlyPayments());
        }

        ctrl.FormSubmit = function () {
            ctrl.next();
        }
    }

    angular.module('consumerApp').component('personalDetails', {
        templateUrl: 'app/personal-details.component.html',
        controller: [ 'optionsService', personalDetailsController],
        bindings: {
            model: "<",
            next: '&'
        },
    });
})(window.angular);