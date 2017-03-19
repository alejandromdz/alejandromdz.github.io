import * as MarkDownIt from 'markdown-it'
const md = new MarkDownIt();

class Config {
    static $inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']
    constructor($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.when('/', ['$location', '$state', '$window', function ($location, $state, $window: ng.IWindowService) {

            if ($location.$$search.carousel)
            { $state.go('html_css_carroussel'); }
            if ($location.$$absUrl === 'https://alejandromdz.github.io/html_css_carroussel')
            { $window.location.href='https://alejandromdz.github.io/html_css_carroussel'; }
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
            .state('html_css_carroussel', {
                url: '/carousel',
                templateProvider: function ($http) {
                    return $http.get('https://api.github.com/repos/alejandromdz/html_css_carroussel/contents/README.md', { data: { ref: 'master' } })
                        .then(function (response: any) {
                            var div = document.createElement('div');
                            div.classList.add('article');
                            div.innerHTML = md.render((atob(response.data.content)))
                            return div;
                        })
                },
                onEnter: function () {
                    setTimeout(function () {
                        $('pre code').each(function (i, block) {
                            hljs.highlightBlock(block);
                        });
                    }, 10);
                }

            })
            ;
    }
}

export default Config