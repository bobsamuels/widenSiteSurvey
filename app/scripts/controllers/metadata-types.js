'use strict'

siteSurveyModule.controller('MetadataTypeCtrl', function ($scope, angularFire, $location) {
    $scope.metadataFields = [];
    $scope.assetGroups = [];
    $scope.metadataTypes = [];

    var fieldRef = getFirebaseRef("metadataFields");
    angularFire(fieldRef, $scope, "metadataFields");

    var groupRef = getFirebaseRef("assetGroups");
    angularFire(groupRef, $scope, "assetGroups");

    var typesRef = getFirebaseRef("metadataTypes");

    this.addType = function(){
        $scope.metadataTypes.push($scope.newType);
        $scope.newType = "";
    }

    angularFire(typesRef, $scope, "metadataTypes");

    $scope.goTo = function(view){
        $location.path(view);
    }

});
