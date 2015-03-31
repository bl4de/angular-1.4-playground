/**
 * Created by rafal.janicki on 2015-03-31.
 */
angular.module("AngularApp.navigation", []).controller("NavigationController", NavigationController);

function NavigationController() {
    this.title = "Welcome";
    this.options = ["Home", "My Account", "Log Out"];
}