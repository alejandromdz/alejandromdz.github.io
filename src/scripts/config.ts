
class Config{
    static $inject=['$stateProvider','$locationProvider']
    constructor($stateProvider,$locationProvider){
         $locationProvider.html5Mode(true);

         $stateProvider
            .state('home', {
                templateUrl: 'dist/views/home.html'
            })
            .state('blog', {
                templateUrl: 'dist/views/blog.html'
            })
            .state('examples',{
                templateUrl: 'dist/views/examples.html'
            });
    }
}

export default Config