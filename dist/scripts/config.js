"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = (function () {
    function Config($stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('home', {
            templateUrl: 'dist/views/home.html'
        })
            .state('blog', {
            templateUrl: 'dist/views/blog.html'
        })
            .state('examples', {
            templateUrl: 'dist/views/examples.html'
        });
    }
    return Config;
}());
Config.$inject = ['$stateProvider', '$locationProvider'];
exports.default = Config;
