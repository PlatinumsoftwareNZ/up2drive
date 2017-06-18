(function (angular) {
    'use strict';
    function dateDropdownController($moment) {
        var ctrl = this;

        ctrl.yearValue;
        ctrl.monthValue;
        ctrl.dayValue;
        ctrl.yearOptions = [];
        ctrl.monthOptions = [];
        ctrl.dayOptions = [];

        ctrl.$onInit = function () {
            var momentValue = $moment(ctrl.value);

            ctrl.yearValue = momentValue.year();
            ctrl.monthValue = momentValue.month();
            ctrl.dayValue = momentValue.day();

            var firstYear = $moment().year() - 15; //Start with 15 years ago
            for (var i = 0; i < 100; i++) {
                var innerYear = firstYear - i;
                ctrl.yearOptions.push({ value: innerYear, text: innerYear })
            }

            var months = moment.months();
            console.log(months.length);
            for (var m = 0; m < months.length; m++) {
                var innerMonth = months[m];
                ctrl.monthOptions.push({ value: m, text: innerMonth })
            }

            ctrl.dayValue = ctrl.setDaysInMonth(ctrl.yearValue, ctrl.monthValue, ctrl.dayValue);
        }

        ctrl.onYearMonthChange = function () {
            ctrl.onChange();

            ctrl.dayValue = ctrl.setDaysInMonth(ctrl.yearValue, ctrl.monthValue, ctrl.dayValue);
        }

        ctrl.onChange = function () {
            ctrl.updateValue();
        }

        ctrl.updateValue = function () {
            ctrl.value = new Date(ctrl.yearValue, ctrl.monthValue, ctrl.dayValue);

                        console.log(ctrl.value);
        }

        ctrl.setDaysInMonth = function (year, month, currentDay) {
            var targetDate = new Date(year, month, 10);
            var daysInMonth = $moment(targetDate).daysInMonth();
            ctrl.dayOptions = [];

            var match = false;

            for (var i = 1; i <= daysInMonth; i++) {
                ctrl.dayOptions.push({ value: i, text: i });

                if (!match)
                    match = i === currentDay;
            }

            console.log(match);

            //update the currentDay if it is no longer valid for the current year and month
            if (!match)
                currentDay = daysInMonth;

            return currentDay;
        }
    }

    angular.module('consumerApp').component('dateDropdown', {
        templateUrl: 'app/date-dropdown.component.html',
        controller: ['$moment', dateDropdownController],
        bindings: {
            value: "<"
        },
    });
})(window.angular);