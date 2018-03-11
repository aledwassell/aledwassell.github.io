(function () {
    'use strict';
    let aledwassellUK = angular.module('aledwassellUK', ['ngResource'])
        .factory('getList', function ($resource) {
            return $resource('/list.json', {}, {
                get: {
                    method: 'GET'
                }
            })
        })
        .controller('mainRepresentationContoller', ['$scope', function ($scope) {
            $scope.name = 'aled / wassell'
        }])
        .controller('listController', ['$scope', 'getList', function ($scope, getList) {
            console.log(getList.get())
        }])
})();