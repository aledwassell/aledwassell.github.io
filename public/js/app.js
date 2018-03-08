(function () {
    'use strict';
    let aledwassellUK = angular.module('aledwassellUK', ['ngResource'])
        .controller('mainRepresentationContoller', ['$scope', function ($scope) {
            $scope.name = 'aled / wassell'
        }])
})();