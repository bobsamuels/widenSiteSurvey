'use strict';
siteSurveyModule.controller('AdminCtrl', function ($scope, $location, angularFire, $route) {

    $scope.admins = []
    $scope.newAdmin = {global:false, support:false};
    var ref = getFirebaseRef("admins");

    this.addAdmin = function(){
        $scope.admins.push($scope.newAdmin);
        $scope.newAdmin = {};
        $scope.newAdmin = {global:false, support:false};;
    }

    angularFire(ref, $scope, "admins");

});
