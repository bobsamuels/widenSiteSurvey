siteSurveyModule.controller('NavBtnCtrl', function ($scope, $location) {
    'use strict';

    $scope.go = function(){
        $location.path($scope.path);
    }
});

siteSurveyModule.directive('navBtn', function(){
    return{
        restrict: 'E',
        templateUrl:'directives/nav-btn.html',
        replace: true,
        controller: 'NavBtnCtrl',
        scope: {
            label: '=',
            path: '='
        }

    }
});