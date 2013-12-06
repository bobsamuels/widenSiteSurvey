'use strict'

siteSurveyModule.controller('MetadataFieldCtrl', function ($scope, angularFire, $location) {
    $scope.fields = []
    $scope.newField = {type:"Auto-completer", filter:false, required:false};
    $scope.newField.mapping = {type:"IPTC"};

    var ref = getFirebaseRef("metadataFields");

    this.addField = function(){
        if(isEmpty($scope.newField.mapping.value)){
            $scope.newField.mapping.type = null;
        }
        $scope.fields.push($scope.newField);
        $scope.newField = {};
        $scope.newField = {type:"Auto-completer", filter:false, required:false};
        $scope.newField.mapping = {type:"IPTC"};
    }

    this.setType = function(type){
        $scope.newField.mapping = type + ":";
    }

    this.showListBox = function(){
        return ($scope.newField.type === 'Auto-completer' ||
            $scope.newField.type === 'Checkbox' ||
            $scope.newField.type === 'Drop-down' ||
            $scope.newField.type === 'Palette');
    }

    angularFire(ref, $scope, "fields");

    $scope.goTo = function(view){
        $location.path(view);
    }

    $scope.hasMapping = function(field){
        return !isEmpty(field.mapping);
    }

});
