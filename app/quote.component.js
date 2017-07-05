(function (angular) {
    'use strict';
    function quoteController(amortisationService, optionsService) {
        var ctrl = this;
        //ctrl.model = ctrl.model;
        ctrl.TermOptions = optionsService.GetTermOptions();

        ctrl.GetMonthlyPayments = function(){
            var establishmentFee = 250;

            //Build up formula inputs - exit if we have invalid input            
            var price = ctrl.model.CashPrice;

            if(!price || price < 0) 
                return 0;   

            var depositRaw = ctrl.model.Deposit;
            
            if(depositRaw < 0) 
                depositRaw = 0;   

            var term = ctrl.model.Term;

            if(!term || term < 0) 
                return 0;   

            var principal = price - depositRaw + establishmentFee;
            var anualInterestRate = 12.95;
            var monthlyInterestAsFraction = anualInterestRate/12/100;

            var monthlyPayments = amortisationService.GetInstallmentValue(principal, monthlyInterestAsFraction, term);

            return monthlyPayments;
        };

        ctrl.Calculate = function() {
            ctrl.model.MonthlyPayment = ctrl.GetMonthlyPayments();
        }

        ctrl.RequestBack = function () {
            ctrl.back();
        }

        ctrl.FormSubmit = function () {
            ctrl.next();
        }

       ctrl.$onInit = function() { 
            ctrl.Calculate();
        }

        ctrl.Reset =function() {
            ctrl.form.$setPristine(); 
        }
    }

    angular.module('consumerApp').component('quote', {
        templateUrl: 'app/quote.component.html',
        controller: ['amortisationService', 'optionsService', quoteController],
        bindings: {
            model: "<",
            next: '&',
            back: '&',
            form: '='
        },
        bindToController: true,
    });
})(window.angular);