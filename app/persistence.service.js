(function (angular) {
    'use strict';
    //Where we talk to the API
    angular.module('consumerApp').service('persistenceService', ['$http', '$location', function ($http, $location) {
        var self = this;
        self.mode = 0; //0 - dev, 1 - live

        self.Init = function () {
            //Setup based on our URL. Localhost is assumed to be dev
            var absUrl = $location.absUrl();

            if(absUrl.indexOf('localhost') !== -1)
                self.mode = 0;
        }

        self.GetApiBaseUrl = function(){
            if(self.mode === 0)
                return "https://localhost:44335/api/";
            else
                return "http://platinumapi.azurewebsites.net/api/";
        }

        self.SubmitNow = function (model) {
            return $http.post(self.GetApiBaseUrl() + "CustomerQuery/", model);
        };
        
        self.Init();

        return self;
    }]);
})(window.angular);