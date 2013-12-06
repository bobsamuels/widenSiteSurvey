'use strict'

siteSurveyModule.controller('AssetGroupCtrl', function ($scope, angularFire, $location) {
    $scope.assetGroups = []
    var ref = getFirebaseRef("assetGroups");

    this.addGroup = function(){
        $scope.assetGroups.push($scope.newGroup);
        $scope.newGroup = "";
    }

    angularFire(ref, $scope, "assetGroups");

});
