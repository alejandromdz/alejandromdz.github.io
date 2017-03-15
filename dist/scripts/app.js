"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var controllers_1 = require("./controllers");
angular.module('myApp', ['ui.router', 'ngAnimate'])
    .config(config_1.default)
    .controller('MainController', controllers_1.default);
