(function (angular) {
    'use strict';
    function personalDetailsController(optionsService) {
        var ctrl = this;

        ctrl.TermOptions = optionsService.GetTermOptions();

        ctrl.$onInit = function () {

        };

        ctrl.GetLoanAmount = function(){
            if(!ctrl.model) return 0;

            var loanAmount = 0;

            if(ctrl.model.PurchasePrice)
                loanAmount += parseFloat(ctrl.model.PurchasePrice);

            if(ctrl.model.Deposit)
                loanAmount -= parseFloat(ctrl.model.Deposit);

            return loanAmount;
        }

        ctrl.FormSubmit = function(){
            ctrl.next();
        }

        // ctrl.HasValue = function(value){
        //     if(!value) return false;

        //     return value.length > 0;
        // }

        // ctrl.HasNumber = function(value){
        //     if(!value) return false;

        //     return value !== 0;
        // }
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