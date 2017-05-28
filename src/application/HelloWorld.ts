module App.Components {

    /*
     * Beschreibung ...
     *
     * Verwendung: 
     *
     *  <edit-user-cmp name="ctrl.name" test="ctrl.blubb></edit-user-cmp>
     */
    export class EditUserCmp implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        //public template: string;
        public templateUrl: string;
        public transclude: boolean;

        constructor() {
            this.bindings = {
                name: "=",
                test: "<"   //One Way Binding
            }

            this.controller = EditUserCmpCtrl;
            this.template = `<p><label ng-bind="$ctrl.name"></label><label ng-bind="$ctrl.test"></label></p>`;
            //this.templateUrl = "/Templates/components/editUser.template.html";
            this.transclude = false;
        }

        //#region Angular Module Definition
        private static _module: ng.IModule;
        public static get module(): ng.IModule {
            if (this._module) {return this._module;}
            this._module = angular.module('editUserCmp', []);
            this._module.component('editUserCmp', new EditUserCmp());
            return this._module;
        }
        //#endregion
    }

    /*
    * Implementierung unseres EditUserCmp Controllers.
    */
    export class EditUserCmpCtrl {
        public name: string;
        public test: string;

        static $inject: string[] = ["$element"];

        constructor(private $element) { }

        public $onInit() {
            console.log("Init Component");
        }

        public $onChanges(changesObj) {
            //geht nur mit OneWay Bindings "<"
            console.log("Changed Obj: ");
            console.log(changesObj);
        }

        public $postLink() {
            console.log(this.$element);
        }

        public $onDestroy() { }
    }
}