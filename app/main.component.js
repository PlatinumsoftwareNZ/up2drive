(function (angular) {
    'use strict';
    function mainController(optionsService, applicationService) {
        var ctrl = this;

        ctrl.stage = 3;
        ctrl.model = {
            //Personal details
            Term: optionsService.GetTermOptions()[0],

            //About
            PurchasePrice: 123,
            FirstName: 'bob',
            MiddleName: 'botty',
            LastName: 'bottit',
            PersonalEmail: 'bob@bobby.bob',
            MobilePhoneNumber: '007bobbob',

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
            }
        }

        ctrl.MoveNext = function () {
            ctrl.stage++;
        };

        ctrl.MoveBack = function () {
            console.log('back');
            ctrl.stage--;
        };        

        ctrl.Save = function(){
            var application = null;

            applicationService.Save()
                .then(function (response) {
                    //TODO
                }, function (response) {
                    //TODO
                });
        }

        ctrl.PersonalDetailsNext = function(){
            ctrl.MoveNext();
        }

        ctrl.AboutNext = function(){
            ctrl.MoveNext();
        }
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.html',
        controller: ['optionsService', 'applicationService', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};