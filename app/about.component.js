(function (angular) {
    'use strict';
    function aboutController(applicationService) {
        var ctrl = this;
        ctrl.YearMakeModelOption = "Year/Make/Model";
        ctrl.StillLookingOption = "Still Looking";

        ctrl.$onInit = function () {
            console.log('$onInit: aboutController');

            if(ctrl.model){
                console.log(ctrl.model.Gender);
            }
        };

        ctrl.DisplayYearMakeModelOption = function(){
            return ctrl.model
                && ctrl.model.NewVehicleDetailType === ctrl.YearMakeModelOption;
        }

        ctrl.DisplayNewVehicleData = function(){
            return ctrl.model
                && ctrl.model.NewVehicleDetailType !== ctrl.YearMakeModelOption
                && ctrl.model.NewVehicleDetailType !== ctrl.StillLookingOption;
        }

        // ctrl.HasValue = function(value){
        //     if(!value) return false;

        //     return value.length > 0;
        // }

        // ctrl.HasNumber = function(value){
        //     if(!value) return false;

        //     return value !== 0;
        // }
    }

    angular.module('consumerApp').component('about', {
        templateUrl: 'app/about.component.html',
        controller: [ aboutController],
        bindings: {
            model: "<",
            next: '&'
        },
    });
})(window.angular);