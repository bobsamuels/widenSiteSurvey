'use strict';

siteSurveyModule.controller('MainCtrl', function ($scope, $location, $route) {
//    $scope.awesomeThings = [];
//    var ref = getFirebaseRef("awesomeThings");
//    angularFire(ref, $scope, "awesomeThings");
    console.log($route);
    $scope.goTo = function(view){
        $location.path(view);
    }
});
