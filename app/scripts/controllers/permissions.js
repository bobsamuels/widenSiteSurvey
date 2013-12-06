'use strict';

siteSurveyModule.controller('PermissionCtrl', function ($scope, $location, angularFire) {
    $scope.roles = []
    $scope.assetGroups = [];
    var groupRef = getFirebaseRef("assetGroups");
    angularFire(groupRef, $scope, "assetGroups");

    var ref = getFirebaseRef("permissions");


    $scope.newRole = {viaInternet:'Self & Others', viaCarrier:'Self & Others', autoApprove:false, internetApproval:false, carrierApproval:false};

    this.addRole = function(){
        $scope.roles.push($scope.newRole);
        $scope.newRole = {};
        $scope.newRole = {viaInternet:'Self & Others', viaCarrier:'Self & Others', autoApprove:false, internetApproval:false, carrierApproval:false};
    }

    angularFire(ref, $scope, "roles");

    $scope.hasGroups = function(role){
        return !isEmpty(role.groupPermissions);
    }

    $scope.hasRoles = function(){
        return $scope.roles.length > 0;
    }

    $scope.removeRole = function(role){
        var indx = $scope.roles.indexOf(role);
        $scope.roles.splice(indx,1);
        role = null;
    };

    $scope.removePermission = function(role, perm){
        var idx = role.groupPermissions.indexOf(perm);
        role.groupPermissions.splice(idx, 1);
        perm = null;
    };

});
