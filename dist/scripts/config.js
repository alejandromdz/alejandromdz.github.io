"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarkDownIt = require("markdown-it");
var md = new MarkDownIt();
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
        })
            .state('html_css_carroussel', {
            templateProvider: function ($http) {
                return $http.get('https://api.github.com/repos/alejandromdz/html_css_carroussel/contents/README.md', { data: { ref: 'master' } })
                    .then(function (response) {
                    return '<div class="article">' + md.render((atob(response.data.content))) + '</div>';
                });
            }
        });
    }
    return Config;
}());
Config.$inject = ['$stateProvider', '$locationProvider'];
exports.default = Config;
