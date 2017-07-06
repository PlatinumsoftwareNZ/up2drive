(function () {
    var app = angular.module('consumerApp', ['ngAnimate', 'angular-momentjs', 'google.places', 'ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/application', 'application.personalDetails')

        $stateProvider
            .state('application', {
                url: '/application',
                abstract: true,
                template: '<ui-view/>',
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