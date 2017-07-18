(function (angular) {
    'use strict';
    function addressFinderController() {
        var ctrl = this;

        ctrl.AddressEntry = null;
        
        ctrl.$onInit = function() {
           ctrl.AddressEntry = ctrl.currentAddress;
        }

        ctrl.AddressEntryChanged = function () {
            var newAddress;

            if (ctrl.AddressEntry.formatted_address) {
                newAddress = ctrl.AddressEntry.formatted_address
            } else {
                newAddress = ctrl.AddressEntry;
            }
            ctrl.onAddressChange({'newAddress': newAddress});
        }

        ctrl.mapOptions = {
            componentRestrictions: { country: 'NZ' },
            types: ['address']
        };
    }

    angular.module('consumerApp').component('addressFinder', {
        templateUrl: 'app/address-finder.component.html',
        controller: [addressFinderController],
        bindings: {
            currentAddress: "<",
            onAddressChange: "&"
        },
    });
})(window.angular);