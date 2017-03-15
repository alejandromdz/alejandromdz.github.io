
export default class MainController{
    static $inject=['$state','$scope'];
    constructor($state,$scope){
        $state.go('home');
        $scope.go=location=>{$state.go(location);}
    }
}