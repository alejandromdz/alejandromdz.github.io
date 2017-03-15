import * as MarkDownIt from 'markdown-it'
const md = new MarkDownIt();

class Config {
    static $inject = ['$stateProvider', '$locationProvider']
    constructor($stateProvider, $locationProvider) {
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
                templateProvider: function($http){
                    return $http.get('https://api.github.com/repos/alejandromdz/html_css_carroussel/contents/README.md', { data: { ref: 'master' } })
                        .then(function (response: any) {
                            return '<div class="article">'+md.render((atob(response.data.content)))+'</div>';
                        })
                }
            })
            ;
    }
}

export default Config