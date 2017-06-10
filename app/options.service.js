(function (angular) {
    'use strict';
    //A canonical place for all option used within forms 
    angular.module('consumerApp').factory('optionsService', [function () {
        var self = this;

        //TODO when confirmed
        self.GetTermOptions = function () {
            return [
                'TBC',
                'Before',
                'Live'
            ];
        }

        self.GetGenderOptions = function () {
            return [
                'Female',
                'Male'
            ];
        }

        self.GetRelationshipStatusOptions = function () {
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
                'Tradme Listing Number',
                'Registration Number',
                'Dealership name',
                'Still Looking'
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