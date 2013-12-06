siteSurveyModule.controller('NavBarCtrl', function ($scope, $route) {
    'use strict';
    var originalPath = $route.current.$$route.originalPath;

    $scope.isActive = function(page){
        if(page === originalPath)
        {
            return "active"
        }
    }

});

siteSurveyModule.directive('navBar', function($location, $route){
   return{
       restrict: 'E',
       templateUrl:'directives/nav-bar.html',
       replace: true,
       controller: 'NavBarCtrl'
   }
});