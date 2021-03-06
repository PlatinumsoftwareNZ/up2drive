(function (angular) {
    'use strict';
    //A canonical place for all option used within forms 
    angular.module('consumerApp').factory('modelDataService', ['optionsService', function (optionsService) {
        var self = this;

        self.GetDefaultModel = function () {
            return {
                SchemaVersion: '1.0', //This is the schema version to tell the API what to expect
                //Personal details
                Term: optionsService.GetTermOptions()[0].value,
                CashPrice: 0,

                //About
                PurchasePrice: null,
                FirstName: null,
                MiddleName: null,
                LastName: null,
                PreferredName: null,
                PersonalEmail: null,
                MobilePhoneNumber: null,

                //About testing
                // FirstName: 'bob',
                // MiddleName: 'botty',
                // LastName: 'bottit',
                // PreferredName: 'The Bob',
                // PersonalEmail: 'bob@bobby.bob',
                // MobilePhoneNumber: '007bobbob',

                Deposit: 0,
                Gender: optionsService.GetGenderOptions()[0],
                DateOfBirth: moment().subtract(25, 'year').toDate(),
                MaritalStatus: optionsService.GetMaritalStatusOptions()[0],
                NewVehicleDetailType: optionsService.GetNewVehicleDetailTypeOptions()[0],
                NewVehicleData: null, //trademe listing number, registration number etc
                NewVehicleDetails: {
                    Year: 2010,
                    Make: '',
                    Model: ''
                },
                // testing data
                // NewVehicleDetails: {
                //     Year: 2010,
                //     Make: 'Some Manufacturer',
                //     Model: 'Car Model'
                // },
                TradeVehicleDetails: {
                    Year: 2010,
                    Make: '',
                    Model: ''
                },
                VehicleToTrade: 'Yes',
                IsNzResident: 'Yes',
                originCountry: 'New Zealand',
                DriverLicenceType: optionsService.GetDriverLicenceOptions()[0],
                CreditHistoryType: optionsService.GetCreditHistoryOptions()[0],

                //More about
                CurrentAddressType: optionsService.GetCurrentAddressTypeOptions()[0].value,
                CurrentAddress: {
                    StreetNumber: null,
                    StreetName: null,
                    Suburb: null,
                    State: null,
                    Country: null,
                    PostCode: null
                },
                CurrentAddressYears: null,
                CurrentAddressMonths: null,
                CurrentOccupation: {
                    EmployerName: null,
                    Occupation: null,
                    Years: 0,
                    Months: 0
                },
                PreviousAddress: {
                    StreetNumber: null,
                    StreetName: null,
                    Suburb: null,
                    State: null,
                    Country: null,
                    PostCode: null
                },
                PreviousOccupation: {
                    EmployerName: null
                },

                // testing data
                // CurrentAddress: {
                //     StreetNumber: 4,
                //     StreetName: 'Larchwood Lane',
                //     Suburb: 'Parklands',
                //     State: '',
                //     Country: 'New Zealand',
                //     PostCode: '8083'
                // },
                // CurrentAddressYears: 1,
                // CurrentAddressMonths: 2,
                // CurrentOccupation: {
                //     EmployerName: 'Spacely Sprockets',
                //     Occupation: 'Widget maker',
                //     Years: 1,
                //     Months: 2
                // },
                // PreviousAddress: {
                //     StreetNumber: 2,
                //     StreetName: 'Larchwood Lane',
                //     Suburb: 'Parklands',
                //     State: '',
                //     Country: 'New Zealand',
                //     PostCode: '8083'
                // },
                // PreviousOccupation: {
                //     EmployerName: 'Somewhere else'
                // },

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
            };
        }

        return self;
    }]);
})(window.angular);