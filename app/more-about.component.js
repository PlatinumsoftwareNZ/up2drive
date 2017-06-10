(function (angular) {
    'use strict';
    function moreAboutController(optionsService) {
        var ctrl = this;
        
        ctrl.CurrentAddressTypeOptions = optionsService.GetCurrentAddressTypeOptions();
        
        ctrl.RequestBack = function(){
            ctrl.back();
        }

        ctrl.FormSubmit = function(){
            ctrl.next();
        }
    }

    angular.module('consumerApp').component('moreAbout', {
        templateUrl: 'app/more-about.component.html',
        controller: ['optionsService', moreAboutController],
        bindings: {
            model: "<",
            next: '&',
            back: '&'
        },
    });
})(window.angular);