(function (angular) {
    'use strict';
    function quoteController(amortisationService, optionsService) {
        var ctrl = this;

        ctrl.TermOptions = optionsService.GetTermOptions();

        ctrl.GetLoanAmount = function(){
            if(!ctrl.model) return 0;

            var loanAmount = 0;

            if(ctrl.model.CashPrice)
                loanAmount += parseFloat(ctrl.model.CashPrice);

            if(ctrl.model.Deposit)
                loanAmount -= parseFloat(ctrl.model.Deposit);

            return loanAmount;
        }

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


        ctrl.RequestBack = function () {
            ctrl.back();
        }

        ctrl.FormSubmit = function () {
            ctrl.next();
        }
    }

    angular.module('consumerApp').component('quote', {
        templateUrl: 'app/quote.component.html',
        controller: ['amortisationService', 'optionsService', quoteController],
        bindings: {
            model: "<",
            next: '&',
            back: '&'
        },
    });
})(window.angular);