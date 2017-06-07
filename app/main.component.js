(function (angular) {
    'use strict';
    function mainController(applicationService) {
        var ctrl = this;

        ctrl.stage = 2;
        ctrl.model = {
            //Temp testing values
            PurchasePrice: 123,
            FirstName: 'bob',
            MiddleName: 'botty',
            LastName: 'bottit',
            PersonalEmail: 'bob@bobby.bob',
            MobilePhoneNumber: '007bobbob',

            Deposit: 0,
            Gender: 'Female',
            RelationshipStatus: 'Single',
            NewVehicleDetailType: 'Year/Make/Model',
            NewVehicleData: null, //trademe listing number, registration number etc
            NewVehicleDetails: {
                Year: 2010
            },
            TradeVehicleDetails: null,
            VehicleToTrade: false,
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
        controller: ['applicationService', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};