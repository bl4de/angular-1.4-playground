/**
 * Created by rafal.janicki on 2015-03-31.
 */
// declarations
var module,
    _modules = [
        "ngNewRouter",
        "AngularApp.navigation",
        "AngularApp.home",
        "AngularApp.footer",
        "AngularApp.about"
    ];

// instantiate of app
module = angular.module("AngularApp", _modules);


module.controller("MainController", function ($scope, $router) {
    $scope.title = "This is demo of application";
    $router.config([
        {
            path: "/",
            redirectTo: "/home"
        },
        {
            path: "/home",
            component: {
                navigation: "navigation",
                main: "home",
                footer: "footer"
            }
        },
        {
            path: "/profile",
            component: {
                navigation: "navigation",
                main: "profile",
                footer: "footer"
            }
        },
        {
            path: "/about",
            component: {
                navigation: "navigation",
                main: "about",
                footer: "footer"
            }
        }
    ]);
});