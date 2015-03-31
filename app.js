/**
 * Created by rafal.janicki on 2015-03-31.
 */
// declarations
var module, _modules = ["ngNewRouter", "AngularApp.navigation", "AngularApp.home", "AngularApp.footer"];

// instantiate of app
module = angular.module("AngularApp", _modules);


module.controller("MainController", function ($scope, $router) {
    $scope.title = "This is demo of application";
    $router.config([
        {
            path: "/",
            component: {
                navigation: "navigation",
                main: "home",
                footer: "footer"
            }
        }, // Maps the default path to navigation component.
        {
            path: "/profile",
            component: {
                navigation: "navigation",
                main: "profile",
                footer: "footer"
            }
        } // Maps /profile to navigation component.
    ]);
});