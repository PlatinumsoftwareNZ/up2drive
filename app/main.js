(function () {

    var app = angular.module('consumerApp', ['ngAnimate', 'angular-momentjs', 'google.places', 'ui.router']);

    var env = {};
    // Import variables if present (from env.js)
    if(window){  
        Object.assign(env, window.__env);
    }

    // Register environment in AngularJS as constant
    app.constant('__env', env);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', 'application/details')

        $stateProvider
            .state('application', {
                url: '/application',
                abstract: true,
                data: {
                    stage: 0
                },
                //template: '<ui-view/>',
                resolve: {
                    model: ['modelService', function (modelService) {
                        return modelService.getModel();
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