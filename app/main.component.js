(function (angular) {
    'use strict';
    function mainController(applicationService) {
        var ctrl = this;
        ctrl.stage = 2;
        ctrl.model = {
            // PurchasePrice: 123,
            // FirstName: 'bob',
            // MiddleName: null,
            // LastName: ''
            // PersonalEmail: null,
            Deposit: 0,
            Gender: 'Female',
            RelationshipStatus: 'Single',
            NewVehicleDetailType: 'Year/Make/Model',
            NewVehicleData: null, //trademe listing number, registration number etc
            NewVehicleDetails: {
                Year: 2010
            },
            TradeVehicleDetails: null,
        }

        ctrl.MoveNext = function () {
            ctrl.stage++;
        };

        ctrl.MoveBack = function () {
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
            console.log('PersonalDetailsNext');

            ctrl.MoveNext();
        }
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.html',
        controller: ['applicationService', mainController]
    });
})(window.angular);