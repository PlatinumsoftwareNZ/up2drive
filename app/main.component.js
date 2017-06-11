(function (angular) {
    'use strict';
    function mainController(optionsService, applicationService) {
        var ctrl = this;

        ctrl.stage = 1;
        ctrl.stageDescriptions = [
            "Quote",
            "Tell us more about you and your vehicle",
            "Tell us a more about you",
            "Tell us a about what you owe and what you own",
        ];

        ctrl.model = {
            //Personal details
            Term: optionsService.GetTermOptions()[0],

            //About
            PurchasePrice: null,//123,
            FirstName: null,//'bob',
            MiddleName: null,//'botty',
            LastName: null,//'bottit',
            PersonalEmail: null,//'bob@bobby.bob',
            MobilePhoneNumber: null,//'007bobbob',

            Deposit: 0,
            Gender: optionsService.GetGenderOptions()[0],
            RelationshipStatus: optionsService.GetRelationshipStatusOptions()[0],
            NewVehicleDetailType: optionsService.GetNewVehicleDetailTypeOptions()[0],
            NewVehicleData: null, //trademe listing number, registration number etc
            NewVehicleDetails: {
                Year: 2010,
                Make: '',
                Model: ''
            },
            TradeVehicleDetails: {
                Year: 2010,
                Make: '',
                Model: ''
            },
            VehicleToTrade: false,
            NzBorn: false,
            CountryBornIn: 'New Zealand',
            DriverLicenceType: optionsService.GetDriverLicenceOptions()[0],
            CreditHistoryType: optionsService.GetCreditHistoryOptions()[0],

            //More about
            CurrentAddressType: optionsService.GetCurrentAddressTypeOptions()[0].value,
            CurrentAddress: null, //TODO
            CurrentAddressYears: null,
            CurrentAddressMonths: null,
            CurrentOccupation: {
                EmployerName: null,
                Occupation: null,
                Years: null,
                Months: null
            },
            PreviousOccupation: {
                EmployerName: null
            },

            //Financials
            Assets: [
                { OptionName: 'Home', Value: 0, Display: 'Property Value' },
                { OptionName: 'Home Contents', Value: 0, Display: 'Home contents value' },
                { OptionName: 'Car', Value: 0, Display: 'Vehicle(s) Value' },
                { OptionName: 'Other', Value: 0, Display: 'Other' }
            ],
            Liabilities: [
                { OptionName: 'Mortgage', Value: 0, Display: 'Mortgage Balance' },
                { OptionName: 'Loan', Value: 0, Display: 'Bank or personal loan' },
                { OptionName: 'Hire Purchase', Value: 0, Display: 'Hire purchase(s)' },
                { OptionName: 'Other', Value: 0, Display: 'Other' }
            ],
            Income: [
                { OptionName: 'Take Home Pay', Value: 0, Display: 'What is your take home pay' },
                { OptionName: 'Spouse Take Home Pay', Value: 0, Display: 'What is your Spouse\'s take home pay' },
                { OptionName: 'Other', Value: 0, Display: 'Other' }
            ],
            Expenses: [
                { OptionName: 'Mortgage', Value: 0, Display: 'Mortgage/rent' },
                { OptionName: 'Loan', Value: 0, Display: 'Bank or personal loan' },
                { OptionName: 'Hire Purchase', Value: 0, Display: 'Hire purchase(s)' },
            ]
        }

        ctrl.MoveNext = function () {
            ctrl.stage++;
        };

        ctrl.MoveBack = function () {
            console.log('back');
            ctrl.stage--;
        };

        ctrl.Save = function () {
            var application = null;

            applicationService.Save()
                .then(function (response) {
                    //TODO
                }, function (response) {
                    //TODO
                });
        }

        ctrl.PersonalDetailsNext = function () {
            ctrl.MoveNext();
        }

        ctrl.AboutNext = function () {
            ctrl.MoveNext();
        }
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.html',
        controller: ['optionsService', 'applicationService', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};