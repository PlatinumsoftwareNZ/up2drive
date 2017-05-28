var module = angular.module("mySuperAwesomeApp", []);
module.component("heros", {
    template: "My heros:",
    controller: function herosController() { },
    controllerAs: "$ctrl"
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
var App;
(function (App) {
    var Components;
    (function (Components) {
        /*
         * Beschreibung ...
         *
         * Verwendung:
         *
         *  <edit-user-cmp name="ctrl.name" test="ctrl.blubb></edit-user-cmp>
         */
        var EditUserCmp = (function () {
            function EditUserCmp() {
                this.bindings = {
                    name: "=",
                    test: "<" //One Way Binding
                };
                this.controller = EditUserCmpCtrl;
                this.template = "<p><label ng-bind=\"$ctrl.name\"></label><label ng-bind=\"$ctrl.test\"></label></p>";
                //this.templateUrl = "/Templates/components/editUser.template.html";
                this.transclude = false;
            }
            Object.defineProperty(EditUserCmp, "module", {
                get: function () {
                    if (this._module) {
                        return this._module;
                    }
                    this._module = angular.module('editUserCmp', []);
                    this._module.component('editUserCmp', new EditUserCmp());
                    return this._module;
                },
                enumerable: true,
                configurable: true
            });
            return EditUserCmp;
        }());
        Components.EditUserCmp = EditUserCmp;
        /*
        * Implementierung unseres EditUserCmp Controllers.
        */
        var EditUserCmpCtrl = (function () {
            function EditUserCmpCtrl($element) {
                this.$element = $element;
            }
            EditUserCmpCtrl.prototype.$onInit = function () {
                console.log("Init Component");
            };
            EditUserCmpCtrl.prototype.$onChanges = function (changesObj) {
                //geht nur mit OneWay Bindings "<"
                console.log("Changed Obj: ");
                console.log(changesObj);
            };
            EditUserCmpCtrl.prototype.$postLink = function () {
                console.log(this.$element);
            };
            EditUserCmpCtrl.prototype.$onDestroy = function () { };
            return EditUserCmpCtrl;
        }());
        EditUserCmpCtrl.$inject = ["$element"];
        Components.EditUserCmpCtrl = EditUserCmpCtrl;
    })(Components = App.Components || (App.Components = {}));
})(App || (App = {}));
var main = (function () {
    function main() {
    }
    return main;
}());
var Test = (function () {
    function Test() {
    }
    Test.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Test;
}());
//# sourceMappingURL=application.js.map