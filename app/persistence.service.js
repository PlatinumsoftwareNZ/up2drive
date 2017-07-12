(function (angular) {
    'use strict';
    //Where we talk to the API
    angular.module('consumerApp').service('persistenceService', ['$http', '$location','__env', function ($http, $location, __env) {
        var self = this;

        self.GetApiBaseUrl = function(){
            return __env.apiUrl;
        }

        self.SubmitNow = function (model) {
            return $http.post(self.GetApiBaseUrl() + "CustomerQuery/", model);
        };
        
        return self;
    }]);
})(window.angular);