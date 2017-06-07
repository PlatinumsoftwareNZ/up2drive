(function (angular) {
    'use strict';
    function personalDetailsController(applicationService) {
        var ctrl = this;
        var currentStage = "";

        ctrl.$onInit = function () {
            console.log('$onInit: personalDetailsController');

            if(ctrl.model && ctrl.model.MiddleName){
                console.log('hai');
            }
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
        controller: [ personalDetailsController],
        bindings: {
            model: "<",
            next: '&'
        },
    });
})(window.angular);