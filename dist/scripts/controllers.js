"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = (function () {
    function MainController($state, $scope) {
        $state.go('home');
        $scope.go = function (location) { $state.go(location); };
    }
    return MainController;
}());
MainController.$inject = ['$state', '$scope'];
exports.default = MainController;
