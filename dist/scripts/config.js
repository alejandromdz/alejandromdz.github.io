"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarkDownIt = require("markdown-it");
var md = new MarkDownIt();
var Config = (function () {
    function Config($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.when('/', ['$location', '$state', '$window', function ($location, $state, $window) {
                switch ($location.$$search.p) {
                    case '/carousel':
                        $state.go('html_css_carroussel');
                        break;
                    case '/typescript_angular':
                        $state.go('typescript_angular');
                        break;
                    default: break;
                }
            }]);
        $stateProvider
            .state('home', {
            templateUrl: 'dist/views/home.html'
        })
            .state('blog', {
            templateUrl: 'dist/views/blog.html'
        })
            .state('examples', {
            templateUrl: 'dist/views/examples.html'
        })
            .state('typescript_angular', {
            url: '/typescript_angular',
            templateProvider: ['$http', function ($http) {
                    return $http.get('https://api.github.com/repos/alejandromdz/blog/contents/typescript-angular.md', { data: { ref: 'master' } })
                        .then(function (response) {
                        var div = document.createElement('div');
                        div.classList.add('article');
                        div.innerHTML = md.render((atob(response.data.content)));
                        div.querySelectorAll('a').forEach(function (elem) {
                            elem.setAttribute('target', '_self');
                        });
                        div.querySelectorAll('pre code').forEach(function (elem) {
                            hljs.highlightBlock(elem);
                        });
                        return div;
                    });
                }]
        })
            .state('html_css_carroussel', {
            url: '/carousel',
            templateProvider: ['$http', function ($http) {
                    return $http.get('https://api.github.com/repos/alejandromdz/html_css_carroussel/contents/README.md', { data: { ref: 'master' } })
                        .then(function (response) {
                        var div = document.createElement('div');
                        div.classList.add('article');
                        div.innerHTML = md.render((atob(response.data.content)));
                        div.querySelectorAll('a').forEach(function (elem) {
                            elem.setAttribute('target', '_self');
                        });
                        div.querySelectorAll('pre code').forEach(function (elem) {
                            hljs.highlightBlock(elem);
                        });
                        return div;
                    });
                }]
        });
    }
    return Config;
}());
Config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
exports.default = Config;
