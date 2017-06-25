(function (angular) {
    'use strict';
    function confirmController() {
        var ctrl = this;

        ctrl.GetNameToUse = function(){
            if(ctrl.preferredName && ctrl.preferredName.length > 0)
                return ctrl.preferredName;

            return ctrl.firstName;
        }
    }

    angular.module('consumerApp').component('confirm', {
        templateUrl: 'app/confirm.component.html',
        controller: [ confirmController ],
        bindings: {
            firstName: "<",
            preferredName: "<"
        },
    });
})(window.angular);