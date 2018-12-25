(function () {
    "use strict";

    angular.module('app', []);

    angular.module('app')
        .controller("mainController", mainController);

    mainController.$inject = ["$scope"];
    function mainController($scope) {
        $scope.message = new Date().toString();
    }
})();