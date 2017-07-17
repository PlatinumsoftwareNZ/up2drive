(function (angular) {
    'use strict';
    //Where we talk to the API
    angular.module('consumerApp').service('persistenceService', ['$http', '$location','__env', function ($http, $location, __env) {
        var self = this;

        self.GetApiBaseUrl = function(){
            return __env.apiUrl;
        }

        self.SubmitNow = function (model) {
            if (model.Id){
                return $http.post(self.GetApiBaseUrl() + "/CustomerQuery/" + model.Id, model, {params: {id: model.Id}});
            }
            else {
                return $http.put(self.GetApiBaseUrl() + "/CustomerQuery/", model);
            }                
        };
        
        self.getById = function(id) {
           return $http.get(self.GetApiBaseUrl() + "/CustomerQuery/" + id);
        }

        return self;
    }]);
})(window.angular);