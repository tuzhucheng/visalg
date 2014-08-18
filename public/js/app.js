var gaApp = angular.module('glowingAdventure', ['ngRoute', 'appControllers', 'appServices']);

var appServices = angular.module('appServices', []);
var appControllers = angular.module('appControllers', []);

gaApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/overview',
        controller: 'mainController'
    })
    .when('/brute-force', {
        templateUrl: 'partials/string-brute-force',
        controller: 'bruteForceController'
    })
    .when('/kmp', {
        templateUrl: 'partials/kmp',
        controller: 'kmpController'
    })
    .when('/boyer-moore', {
        templateUrl: 'partials/boyer-moore',
        controller: 'boyerMooreController'
    })
    .otherwise({
        redirectTo: "partials/overview"
    });

    $locationProvider.html5Mode(true);
});

appControllers.controller('mainController', function($scope, $location) {

});

appControllers.controller('bruteForceController', function($scope, $location) {

});

appControllers.controller('kmpController', function($scope, $location) {

});

appControllers.controller('boyerMooreController', function($scope, $location) {

});