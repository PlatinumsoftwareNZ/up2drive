(function (angular) {
    'use strict';
    function mainController($location, $moment, persistenceService, optionsService) {
        var ctrl = this;        

        ctrl.stage = 1;
        
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

        

        ctrl.ApplyNow = function(){
            ctrl.stage = -1;
            
            var application = null;

            persistenceService.SubmitNow(ctrl.model)
                .then(function (response) {
                    if (response.data.CommittedId) {
                        ctrl.model.CommittedId = response.data.CommittedId;
                    }
                    ctrl.stage = 2;
                }, function (response) {
                    ctrl.stage = -2; //Display confirm
                    console.log(response.data);
                });
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
        controller: ['$location', '$moment', 'persistenceService', 'optionsService', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};