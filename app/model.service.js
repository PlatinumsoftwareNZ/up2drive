(function (angular) {
    'use strict';
    //A canonical place for all option used within forms 
    angular.module('consumerApp').factory('modelService', ['persistenceService','optionsService', 
        function (persistenceService, optionsService) {
            var self = this;
            self.getModel = function (id) {
                return persistenceService.getById(id);
            }
            return self;
        }]);
})(window.angular);