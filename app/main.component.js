(function (angular) {
    'use strict';
    function mainController($location, $moment, persistenceService, optionsService, $state) {
        var ctrl = this;        
       
        ctrl.stageDescriptions = [
            "Quote",
            "Tell us more about you and your vehicle",
            "Tell us a more about you",
            "Tell us a about what you owe and what you own",
        ];

        ctrl.MoveNext = function () {
            ctrl.stage++;
        };

        ctrl.MoveBack = function () {
            console.log('back');
            ctrl.stage--;
        };

        ctrl.stage = function() {
            if ($state.current.data) {
                return $state.current.data.stage;
            } else return 0;
        }

        ctrl.PersonalDetailsNext = function () {
            //if ctrl.pd.valid
            ctrl.MoveNext();
        }

        ctrl.AboutNext = function () {
            ctrl.MoveNext();
        }
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.html',
        controller: ['$location', '$moment', 'persistenceService', 'optionsService', '$state', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};