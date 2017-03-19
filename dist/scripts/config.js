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
            .state('html_css_carroussel_proxy', {
            url: '/?carousel',
            template: '',
            onEnter: function ($state) {
                $state.go('html_css_carroussel');
            }
        })
            .state('html_css_carroussel', {
            url: '/carousel',
            templateProvider: function ($http) {
                return $http.get('https://api.github.com/repos/alejandromdz/html_css_carroussel/contents/README.md', { data: { ref: 'master' } })
                    .then(function (response) {
                    var div = document.createElement('div');
                    div.classList.add('article');
                    div.innerHTML = md.render((atob(response.data.content)));
                    return div;
                });
            },
            onEnter: function ($state) {
                setTimeout(function () {
                    $('pre code').each(function (i, block) {
                        hljs.highlightBlock(block);
                    });
                }, 10);
            }
        });
    }
    return Config;
}());
Config.$inject = ['$stateProvider', '$locationProvider'];
exports.default = Config;
