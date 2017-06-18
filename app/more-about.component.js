(function (angular) {
    'use strict';
    function moreAboutController(optionsService) {
        var ctrl = this;

        ctrl.AddressEntry = null;

        ctrl.CurrentAddressTypeOptions = optionsService.GetCurrentAddressTypeOptions();

        ctrl.DisplayPreviousAddress = function () {
            return ctrl.YearValueIsOverOrEqualToAmount(ctrl.model.CurrentAddressYears, 3);
        }

        ctrl.DisplayPreviousOccupation = function () {
            return ctrl.YearValueIsOverOrEqualToAmount(ctrl.model.CurrentOccupation.Years, 3);
        }

        ctrl.YearValueIsOverOrEqualToAmount = function (input, amount) {
            var intInput = parseInt(input);

            if (intInput)
                return intInput >= amount;

            return false;
        }

        ctrl.RequestBack = function () {
            ctrl.back();
        }

        ctrl.FormSubmit = function () {
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