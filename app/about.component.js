(function (angular) {
    'use strict';
    function aboutController(optionsService, countryService, amortisationService) {
        var ctrl = this;

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

        ctrl.GenderOptions = optionsService.GetGenderOptions();
        ctrl.MaritalStatusOptions = optionsService.GetMaritalStatusOptions();
        ctrl.NewVehicleDetailTypeOptions = optionsService.GetNewVehicleDetailTypeOptions();
        ctrl.YearMakeModelOption = ctrl.NewVehicleDetailTypeOptions[0];
        ctrl.StillLookingOption = ctrl.NewVehicleDetailTypeOptions[4];
        ctrl.YesNoOptions = optionsService.GetYesNoOptions();
        ctrl.CountryOptions = countryService.GetCountries();
        ctrl.DriverLicenceOptions = optionsService.GetDriverLicenceOptions();        
        ctrl.CreditHistoryOptions = optionsService.GetCreditHistoryOptions();
        ctrl.TermOptions = optionsService.GetTermOptions();

        ctrl.DisplayNewYearMakeModel = function(){
            return ctrl.model
                && ctrl.model.NewVehicleDetailType === ctrl.YearMakeModelOption;
        }

        ctrl.DisplayNewDetails = function(){
            return ctrl.model
                && ctrl.model.NewVehicleDetailType !== ctrl.YearMakeModelOption
                && ctrl.model.NewVehicleDetailType !== ctrl.StillLookingOption;
        }

        ctrl.DisplayTradeYearMakeModel = function(){
            return ctrl.model.VehicleToTrade;
        }

        ctrl.RequestBack = function(){
            ctrl.back();
        }

        ctrl.FormSubmit = function(){
            ctrl.next();
        }
    }

    angular.module('consumerApp').component('about', {
        templateUrl: 'app/about.component.html',
        controller: [ 'optionsService', 'countryService',  'amortisationService', aboutController],
        bindings: {
            model: "<",
            next: '&',
            back: '&'
        },
    });
})(window.angular);