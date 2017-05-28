(function (angular) {
    'use strict';
    angular.module('consumerApp').factory('applicationService', ['$http'
        , function ($http) {
            var self = this;
            var apiUrl = '';
            
            console.log('applicationService');

            self.SaveApplication = function (application) {
                return $http.post(apiUrl + '/api/ConsumerApplication', application);
            };

            return self;
        }]);
})(window.angular);