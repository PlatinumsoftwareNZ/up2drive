(function (angular) {
    'use strict';
    function mainController(applicationService) {
        var ctrl = this;
        ctrl.stage = 1;
        ctrl.model = {
            // PurchasePrice: 123,
            // FirstName: 'bob',
            // MiddleName: null,
            // LastName: ''
            PersonalEmail: null
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