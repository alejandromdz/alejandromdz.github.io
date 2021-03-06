import * as MarkDownIt from 'markdown-it'
const md = new MarkDownIt();

class Config {
    static $inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']
    constructor($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.when('/', ['$location', '$state', '$window', function ($location, $state, $window: ng.IWindowService) {
            
            switch($location.$$search.p)
            {
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
                url:'/typescript_angular',
                templateProvider:['$http',function ($http) {
                    return $http.get('https://api.github.com/repos/alejandromdz/blog/contents/typescript-angular.md', { data: { ref: 'master' } })
                        .then(function (response: any) {
                            var div = document.createElement('div');
                            div.classList.add('article');
                            div.innerHTML = md.render((atob(response.data.content)));
                            div.querySelectorAll('a').forEach(function(elem:HTMLAnchorElement){
                                elem.setAttribute('target','_self');
                            });
                            div.querySelectorAll('pre code').forEach(function(elem:HTMLElement){
                                hljs.highlightBlock(elem);
                            })
                            div.innerHTML+="<div id='disqus_thread'></div><script>(function() { var d = document, s = d.createElement('script'); s.src = 'https://alejandromdz.disqus.com/embed.js'; s.setAttribute('data-timestamp', +new Date()); (d.head || d.body).appendChild(s); })(); </script> <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>"
                            return div; 
                        })
                }]
            })
            .state('html_css_carroussel', {
                url: '/carousel',
                templateProvider: ['$http',function ($http) {
                    return $http.get('https://api.github.com/repos/alejandromdz/blog/contents/html-css-carousel.md', { data: { ref: 'master' } })
                        .then(function (response: any) {
                            var div = document.createElement('div');
                            div.classList.add('article');
                            div.innerHTML = md.render((atob(response.data.content)));
                            div.querySelectorAll('a').forEach(function(elem:HTMLAnchorElement){
                                elem.setAttribute('target','_self');
                            });
                            div.querySelectorAll('pre code').forEach(function(elem:HTMLElement){
                                hljs.highlightBlock(elem);
                            })
                            div.innerHTML+="<div id='disqus_thread'></div><script>(function() { var d = document, s = d.createElement('script'); s.src = 'https://alejandromdz.disqus.com/embed.js'; s.setAttribute('data-timestamp', +new Date()); (d.head || d.body).appendChild(s); })(); </script> <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>"
                            return div; 
                        })
                }]
            })
            ;
    }
}

export default Config