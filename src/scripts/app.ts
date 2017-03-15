import Config from './config';
import MainController from './controllers';

angular.module('myApp',['ui.router','ngAnimate'])
.config(Config)
.controller('MainController',MainController);