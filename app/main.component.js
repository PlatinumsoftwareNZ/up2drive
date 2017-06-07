(function (angular) {
    'use strict';
    function mainController(applicationService) {
        var ctrl = this;

	ctrl.layoutMode = 0;
	ctrl.list = [];

	ctrl.currentAnimation;
	ctrl.isShow = true;
	ctrl.animations = ["toggle", 
						"spin-toggle", 
						"scale-fade", 
						"scale-fade-in", 
						"bouncy-scale-in", 
						"flip-in", 
						"slide-left", 
						"slide-right", 
						"slide-top", 
						"slide-down", 
						"bouncy-slide-left", 
						"bouncy-slide-right", 
						"bouncy-slide-top", 
						"bouncy-slide-down", 
						"rotate-in"];

	ctrl.addItem = function (animation) {		
		for (var i = 0; i < 6; i++) {
            ctrl.list.push({ title : "item" });
		};		
	}

	ctrl.removeItem = function (item) {
		var index = ctrl.list.indexOf(item);
		ctrl.list.remove(index);
	}

	ctrl.cleanList = function () {
		for (var i = 0; i < ctrl.list.length; i++) {
            ctrl.list.pop();
		};
	}

	ctrl.switchGridMode = function () {
		ctrl.layoutMode = 0;
	}

	ctrl.switchListMode = function () {
		ctrl.layoutMode = 1;
	}

	ctrl.toggle = function () {
		ctrl.TestShow = !ctrl.TestShow;
	}




ctrl.TestShow = true;
ctrl.TestToggle = function(){
    ctrl.TestShow = !ctrl.TestShow;
    console.log(ctrl.TestShow);
}












        ctrl.stage = 1;
        ctrl.model = {
            //Temp testing values
            PurchasePrice: 123,
            FirstName: 'bob',
            MiddleName: 'botty',
            LastName: 'bottit',
            PersonalEmail: 'bob@bobby.bob',
            MobilePhoneNumber: '007bobbob',

            Deposit: 0,
            Gender: 'Female',
            RelationshipStatus: 'Single',
            NewVehicleDetailType: 'Year/Make/Model',
            NewVehicleData: null, //trademe listing number, registration number etc
            NewVehicleDetails: {
                Year: 2010
            },
            TradeVehicleDetails: null,
        }

        ctrl.MoveNext = function () {
            ctrl.stage++;
        };

        ctrl.MoveBack = function () {
            console.log('back');
            ctrl.stage--;
        };        

        ctrl.Save = function(){
            var application = null;

            applicationService.Save()
                .then(function (response) {
                    //TODO
                }, function (response) {
                    //TODO
                });
        }

        ctrl.PersonalDetailsNext = function(){
            ctrl.MoveNext();
        }

        ctrl.AboutNext = function(){
            ctrl.MoveNext();
        }
    }

    angular.module('consumerApp').component('main', {
        templateUrl: 'app/main.html',
        controller: ['applicationService', mainController]
    });
})(window.angular);




//Temp
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};