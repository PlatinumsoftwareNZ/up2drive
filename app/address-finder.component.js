(function (angular) {
    'use strict';
    function addressFinderController() {
        var ctrl = this;

        ctrl.AddressEntry = null;
        
        ctrl.$onInit = function() {
            if (this.AddressEntry === null && this.model.AddressEntry) {
                this.AddressEntry = this.model.AddressEntry;
            }
        }

        ctrl.AddressEntryChanged = function () {
            var addressEntry = "AddressEntry";

            if (!ctrl.AddressEntry || !ctrl.AddressEntry.address_components) {
                ctrl.model[addressEntry] = ctrl.AddressEntry;
                for(var key in ctrl.model) {
                    if (key !== addressEntry) {
                        ctrl.model[key] = null;
                    }
                }
                return null;
            }
            ctrl.model[addressEntry] = ctrl.AddressEntry.formatted_address;
            ctrl.UpdateDetails(ctrl.AddressEntry);
            
            //Clear
            //ctrl.AddressEntry = null;
        }

        ctrl.mapOptions = {
            componentRestrictions: { country: 'NZ' },
            types: ['geocode']
        };

        ctrl.componentForm = {
            street_number: 'short_name',
            route: 'long_name',
            sublocality_level_1: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'short_name',
            country: 'long_name',
            postal_code: 'short_name'
        };

        ctrl.googleAddressPropMapper = {
            street_number: 'StreetNumber',
            route: 'StreetName',
            sublocality_level_1: 'Suburb',
            locality: 'City',
            administrative_area_level_1: 'State',
            country: 'Country',
            postal_code: 'PostCode'
        };

        ctrl.UpdateDetails = function (place) {
            for (var i = 0; i < place.address_components.length; i++) {
                var addressType = place.address_components[i].types[0];

                if (ctrl.componentForm[addressType]) {
                    var googlePropName = this.componentForm[addressType];
                    var val = place.address_components[i][googlePropName];

                    var addressDetailProp = this.googleAddressPropMapper[addressType];
                    ctrl.model[addressDetailProp] = val;
                }
            }
        }
    }

    angular.module('consumerApp').component('addressFinder', {
        templateUrl: 'app/address-finder.component.html',
        controller: [addressFinderController],
        bindings: {
            required: '=',
            name: '@',
            label: "<",
            model: "<"
        },
    });
})(window.angular);