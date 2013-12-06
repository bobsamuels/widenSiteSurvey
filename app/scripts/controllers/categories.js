'use strict';

siteSurveyModule.controller('CategoriesCtrl', function ($scope, angularFire, $location) {
    $scope.categories = []
    var ref = getFirebaseRef("categories");

    this.addCategory = function(){
        $scope.categories.push($scope.newCategory);
        $scope.newCategory = "";
    }

    angularFire(ref, $scope, "categories");
});
