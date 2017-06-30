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
                'Female',
                'Male'
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
                'Year/Make/Model',
                'Trade Me Listing Number',
                'Registration Number',
                'Dealership name',
                'Still Looking'
            ];
        }

        self.GetYesNoOptions = function () {
            return [
                { value: 'No', text: 'No' },
                { value: 'Yes', text: 'Yes' }
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
                'Full',
                'Restricted',
                'Learners',
                'Overseas',
                'None',
            ];
        }

        self.GetCurrentAddressTypeOptions = function () {
            return [
                { value: 'OwnHome', text: 'Home owner' },
                { value: 'Renting', text: 'Renting' },
                { value: 'Boarding', text: 'Boarding' },
                { value: 'FamilyHouse', text: 'Living at home' },
                { value: 'Other', text: 'Other' },
            ];
        }

        return self;
    }]);
})(window.angular);