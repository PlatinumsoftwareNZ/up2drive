(function (angular) {
    'use strict';
    function mainController($moment, modelDataService, amortisationService, persistenceService, optionsService) {
        var ctrl = this;

        ctrl.stage = 1;

        ctrl.$onInit = function () {
            //Try to get a price from the query string and update the default model if found
            var priceFromQueryString = ctrl.GetPriceFromQueryString();

            if (priceFromQueryString)
                ctrl.model.CashPrice = parseFloat(priceFromQueryString);                
        }

        ctrl.stageDescriptions = [
            "Quote",
            "Tell us more about you and your vehicle",
            "Tell us a more about you",
            "Tell us a about what you owe and what you own",
        ];

        ctrl.model = modelDataService.GetDefaultModel();

        ctrl.priceQuote = null;
        ctrl.GeneratePriceQuote = function () {
            ctrl.priceQuote = null; //Clear if not new

            var price = ctrl.model.CashPrice;

            if (!price || price < 0)
                return;

            var term = ctrl.model.Term;

            if (!term || term < 0)
                return;

            var depositRaw = ctrl.model.Deposit;

            if (depositRaw < 0)
                depositRaw = 0;

            ctrl.priceQuote = amortisationService.GeneratePriceQuote(price, depositRaw, term);
        };

        ctrl.MoveNext = function () {
            ctrl.stage++;
        };

        ctrl.MoveBack = function () {
            console.log('back');
            ctrl.stage--;
        };

        ctrl.GetPriceFromQueryString = function () {
            return ctrl.getUrlParameter('price');
        }

        ctrl.getUrlParameter = function (param, dummyPath) {
            var sPageURL = dummyPath || window.location.search.substring(1),
                sURLVariables = sPageURL.split(/[&||?]/),
                res;

            for (var i = 0; i < sURLVariables.length; i += 1) {
                var paramName = sURLVariables[i],
                    sParameterName = (paramName || '').split('=');

                if (sParameterName[0] === param) {
                    res = sParameterName[1];
                }
            }

            return res;
        }

        ctrl.ApplyNow = function () {
            //Display working
            ctrl.stage = -1;

            //Persist to the API
            var application = null;            
            persistenceService.SubmitNow(ctrl.model)
                .then(function (response) {
                    ctrl.stage = -2; //Display confirm
                }, function (response) {
                    ctrl.stage = -2; //Display confirm
                    console.log(response.data);
                });

            //Generate a quote and populate object for confirm component
            ctrl.GeneratePriceQuote();
        }

        ctrl.PersonalDetailsNext = function () {
            ctrl.MoveNext();
        }

        ctrl.AboutNext = function () {
            ctrl.MoveNext();
        }
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.component.html',
        controller: ['$moment', 'modelDataService', 'amortisationService', 'persistenceService', 'optionsService', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};