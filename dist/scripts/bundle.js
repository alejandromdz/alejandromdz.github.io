(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var controllers_1 = require("./controllers");
angular.module('myApp', ['ui.router'])
    .config(config_1.default)
    .controller('MainController', controllers_1.default);

},{"./config":2,"./controllers":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = (function () {
    function MainController($state, $scope) {
        $state.go('home');
        $scope.go = function (location) { $state.go(location); };
    }
    return MainController;
}());
MainController.$inject = ['$state', '$scope'];
exports.default = MainController;

},{}]},{},[1])