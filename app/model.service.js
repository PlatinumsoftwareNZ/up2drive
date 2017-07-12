(function (angular) {
    'use strict';
    //A canonical place for all option used within forms 
    angular.module('consumerApp').factory('modelService', ['optionsService', function (optionsService) {
        var self = this;
        self.getModel = function () {
            return {
                SchemaVersion: '1.0', //This is the schema version to tell the API what to expect
                Term: optionsService.GetTermOptions()[0].value,
                CashPrice: null,
                MonthlyPayment: null,
                PurchasePrice: null,
                FirstName: null,
                MiddleName: null,
                LastName: null,
                PreferredName: null,
                PersonalEmail: null,
                MobilePhoneNumber: null,
                Deposit: null,
                DateOfBirth: moment().subtract(25, 'year').toDate(),
                NewVehicleData: null, //trademe listing number, registration number etc
                IsNzResident: 'Yes',
                originCountry: 'New Zealand',
                CurrentAddress: {
                    AddressEntry: null,
                    StreetNumber: null,
                    StreetName: null,
                    Suburb: null,
                    State: null,
                    Country: null,
                    PostCode: null
                },
                CurrentOccupation: {
                    EmployerName: null,
                    Occupation: null,
                    Years: null,
                    Months: null
                },
                PreviousOccupation: {
                    EmployerName: null
                },
                Assets: [{
                        OptionName: 'Home',
                        Value: null,
                        Display: 'Property Value'
                    },
                    {
                        OptionName: 'Home Contents',
                        Value: null,
                        Display: 'Home contents value'
                    },
                    {
                        OptionName: 'Car',
                        Value: null,
                        Display: 'Vehicle(s) Value'
                    },
                    {
                        OptionName: 'Other',
                        Value: null,
                        Display: 'Other'
                    }
                ],
                Liabilities: [{
                        OptionName: 'Mortgage',
                        Value: null,
                        Display: 'Mortgage Balance'
                    },
                    {
                        OptionName: 'Loan',
                        Value: null,
                        Display: 'Bank or personal loan'
                    },
                    {
                        OptionName: 'Hire Purchase',
                        Value: null,
                        Display: 'Hire purchase(s)'
                    },
                    {
                        OptionName: 'Other',
                        Value: null,
                        Display: 'Other'
                    }
                ],
                Income: [{
                        OptionName: 'Take Home Pay',
                        Value: null,
                        Display: 'What is your take home pay'
                    },
                    {
                        OptionName: 'Spouse Take Home Pay',
                        Value: null,
                        Display: 'What is your Spouse\'s take home pay'
                    },
                    {
                        OptionName: 'Other',
                        Value: null,
                        Display: 'Other'
                    }
                ],
                Expenses: [{
                        OptionName: 'Mortgage',
                        Value: null,
                        Display: 'Mortgage/rent'
                    },
                    {
                        OptionName: 'Loan',
                        Value: null,
                        Display: 'Bank or personal loan'
                    },
                    {
                        OptionName: 'Hire Purchase',
                        Value: null,
                        Display: 'Hire purchase(s)'
                    },
                ]
            }
        }
        return self;
    }]);
})(window.angular);