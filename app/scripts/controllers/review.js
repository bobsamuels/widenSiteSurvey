'use strict';

siteSurveyModule.controller('ReviewCtrl', function ($scope, $http) {
    $scope.jsonData = "...loading...";

    $scope.getJson = function(){
        var json = "";
        var jsonUrl = getFirebaseJsonUrl();
        $http.get(jsonUrl).success(function(data){
            if(data !== "null")
            {
                $scope.jsonData = JSON.stringify(data, null, 2);
            }
            else
            {
                $scope.jsonData = "No Data Found";
            }
        });
    };

    $scope.jsonUrl = getFirebaseJsonUrl();
    $scope.getJson();
});
