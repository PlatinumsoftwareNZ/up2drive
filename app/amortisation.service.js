(function (angular) {
    'use strict';
    //A canonical place for all option used within forms 
    angular.module('consumerApp').factory('amortisationService', [function () {
        var self = this;
        var self = this;

        self.RunStandardTest = function () {
            //The answer shall be 6.09820478953012
            var principal = 100;
            var anualInterestRate = 12;
            var numberOfPayments = 18;
            var monthlyInterestAsFraction = anualInterestRate/12/100;

            var installmentValue = self.GetInstallmentValue(principal, monthlyInterestAsFraction, numberOfPayments);
        }

        //Using a standard Amortisation formula - eg, https://en.wikipedia.org/wiki/Amortization_calculator
        //It is unclear if platinum want a balloon payment at the end or not
        self.GetInstallmentValue = function (p, i, n) {
            //i(1+i)^n
            var numerator = i * Math.pow(1+i, n);
            
            //(1+i)^n - 1
            var denominator = Math.pow(1+i, n) - 1;

            var A = p * numerator / denominator;

            return A;
        }

        var establishmentFee = 250;
        var anualInterestRate = 10.95;

        self.GeneratePriceQuote = function(price, deposit, term){
            return {
                price: price,
                deposit: deposit,
                term: term,
                establishmentFee: establishmentFee,
                anualInterestRate: anualInterestRate,
                monthlyPayments: self.GetMonthlyPayments(price, deposit, term)
            }
        };

        self.GetMonthlyPayments = function (price, deposit, term) {
            var establishmentFee = 250;

            var principal = price - deposit + establishmentFee;
            var monthlyInterestAsFraction = anualInterestRate / 12 / 100;

            var monthlyPayments = self.GetInstallmentValue(principal, monthlyInterestAsFraction, term);

            return monthlyPayments;
        };

        // self.RunStandardTest();

        return self;
    }]);
})(window.angular);