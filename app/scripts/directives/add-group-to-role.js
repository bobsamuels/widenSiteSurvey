siteSurveyModule.controller('AddGroupToRoleCtrl', function ($scope, angularFire) {
    'use strict';

    $scope.assetGroups = [];
    $scope.perms = [];
    $scope.group = {};

    var groupRef = getFirebaseRef("assetGroups");
    var permissionsRef = getFirebaseRef("permissions");
    angularFire(groupRef, $scope, "assetGroups");
    angularFire(permissionsRef, $scope, "perms");

    this.addGroupToRole = function(){
        var role = $scope.role;
        console.log(role);
        var group;

        if(!isEmpty($scope.group.assetGroup))
        {
            group = $scope.group.assetGroup;
        }
        else
        {
            $scope.assetGroups.push($scope.group.newAssetGroup);
            group = $scope.group.newAssetGroup;
        }
        var newGroup = {assetGroup:group};

        if(isEmpty(role.groupPermissions))
        {
            role.groupPermissions = [];
        }
        role.groupPermissions.push(newGroup);

        $scope.group = {};

        $scope.closeOverlay();
    }

    $scope.openOverlay = function(){
        var overlay = $("#overlay_" + $scope.role.$$hashKey);
        overlay.addClass('md-show');
    }

    $scope.closeOverlay = function(){
        var overlay = $("#overlay_" + $scope.role.$$hashKey);
        overlay.removeClass('md-show');
    }


});

siteSurveyModule.directive('addGroupToRole', function(){
    return{
        restrict: 'E',
        templateUrl:'directives/add-group-to-role.html',
        replace: true,
        controller: 'AddGroupToRoleCtrl',
        scope: {
            role: '='
        },
        link: function($scope, element, attrs) {
            $scope.roleHash = $scope.role.$$hashKey;
        }
    }
});