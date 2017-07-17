(function (angular) {
    'use strict';
    //A canonical place for all option used within forms 
    angular.module('consumerApp').factory('optionsService', [function () {
        var self = this;

        //TODO when confirmed
        self.GetTermOptions = function () {
            return [{ value: 12, text: '12 months' },
            { value: 24, text: '24 months' },
            { value: 36, text: '36 months' },
            { value: 48, text: '48 months' },
            { value: 60, text: '60 months' }
            ];
        }

        self.GetGenderOptions = function () {
            return [
                {value: 1, text: 'Female'},
                {value: 2, text: 'Male'}                
            ];
        }

        self.GetMaritalStatusOptions = function () {
            return [
                'Single',
                'Married',
                'Defacto',
                'Separated',
                'Divorced'
            ];
        }

        self.GetNewVehicleDetailTypeOptions = function () {
            return [
                { value: 1, text: 'Year/Make/Model' },
                { value: 2, text: 'Trade Me Listing Number' },
                { value: 3, text: 'Registration Number' },
                { value: 4, text: 'Dealership name' },
                { value: 5, text: 'Still Looking' }
            ];
        }

        self.GetYesNoOptions = function () {
            return [
                { value: false, text: 'No' },
                { value: true, text: 'Yes' }
            ];
        }

        self.GetCreditHistoryOptions = function () {
            return [
                'Perfect',
                'OK',
                'Not so good',
                'I don\'t know'
            ];
        }

        self.GetDriverLicenceOptions = function () {
            return [
                { value: 1, text: 'Full'},
                { value: 2, text: 'Restricted'},
                { value: 3, text: 'Learners'},
                { value: 4, text: 'Overseas'},
                { value: 5, text: 'None'}
            ];
        }

        self.GetCurrentAddressTypeOptions = function () {
            return [
                { value: 1, text: 'Home owner' },
                { value: 2, text: 'Renting' },
                { value: 3, text: 'Boarding' },
                { value: 4, text: 'Living at home' },
                { value: 5, text: 'Other' },
            ];
        }

        return self;
    }]);
})(window.angular);