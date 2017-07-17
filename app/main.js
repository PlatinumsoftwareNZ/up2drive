(function () {

    var app = angular.module('consumerApp', ['ngAnimate', 'angular-momentjs', 'google.places', 'ui.router']);

    var env = {};
    // Import variables if present (from env.js)
    if(window){  
        Object.assign(env, window.__env);
    }

    // Register environment in AngularJS as constant
    app.constant('__env', env);

    app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', 'application/new/details');

        $httpProvider.defaults.transformResponse.push(function(responseData){
            convertDateStringsToDates(responseData);
            return responseData;
        });

        $stateProvider
            .state('application', {
                url: '/application/{id}',
                abstract: true,
                data: {
                    stage: 0
                },
                params: {
                    id: {value: 'new'}        
                },
                resolve: {
                    model: ['modelService','$stateParams', function (modelService, $stateParams) {
                        if ($stateParams.id !== 'new') {
                            return modelService.getModel($stateParams.id)
                                .then(function(result) {
                                    return result.data;
                                });
                        } else {
                            return {};
                        }
                    }]
                }
            })
            .state('application.personalDetails', {
                url: '/details',
                templateUrl: 'app/personal-details.component.html',
                controller: 'personalDetailsController',
                controllerAs: '$ctrl',
                data: {
                    stage: 1
                },
                resolve: {
                    next: function () {
                        return 'application.quote';
                    }
                }
            })
            .state('application.quote', {
                url: '/quote',
                templateUrl: 'app/quote.component.html',
                controller: 'quoteController',
                controllerAs: '$ctrl',
                data: {
                    stage: 2
                },
                resolve: {
                    back: function () {
                        return 'application.personalDetails';
                    },
                    next: function () {
                        return 'application.moreAboutYou';
                    }
                }
            })
            .state('application.moreAboutYou', {
                url: '/about',
                templateUrl: 'app/more-about-you.component.html',
                controller: 'moreAboutYouController',
                controllerAs: '$ctrl',
                data: {
                    stage: 3
                },
                resolve: {
                    back: function () {
                        return 'application.quote';
                    },
                    next: function () {
                        return 'application.finances';
                    }
                }
            })
            .state('application.finances', {
                url: '/finances',
                templateUrl: 'app/financials.component.html',
                controller: 'financialsController',
                controllerAs: '$ctrl',
                data: {
                    stage: 4
                },
                resolve: {
                    back: function () {
                        return 'application.moreAboutYou';
                    },
                    next: function () {
                        return 'application';
                    }
                }
            });
    })
}());

function convertDateStringsToDates(input) {
    
    var regexIso8601 = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})/;    

    if (typeof input !== "object") return input;

    for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;

        var value = input[key];
        var match;
        // Check for string properties which look like dates.
        if (typeof value === "string" && (match = value.match(regexIso8601))) {
            var milliseconds = Date.parse(value)
            if (!isNaN(milliseconds)) {
                input[key] = new Date(milliseconds);
            }
        } else if (typeof value === "object") {
            // Recurse into object
            convertDateStringsToDates(value);
        }
    }
}