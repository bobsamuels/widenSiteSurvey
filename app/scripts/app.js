'use strict';

var _firebaseUrl =  'https://widen-site-survey.firebaseio.com/';

var siteSurveyModule = angular.module('sitesurveyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'views/main.html',controller: 'MainCtrl'})
        .when('/admin',{templateUrl: 'views/admin.html', controller: 'AdminCtrl'})
        .when('/assetGroups', {templateUrl: 'views/asset-groups.html', controller: 'AssetGroupCtrl'})
        .when('/permissions', {templateUrl: 'views/permissions.html', controller: 'PermissionCtrl'})
        .when('/metadataFields', {templateUrl: 'views/metadata-fields.html', controller: 'MetadataFieldCtrl'})
        .when('/metadataTypes', {templateUrl: 'views/metadata-types.html', controller: 'MetadataTypeCtrl'})
        .when('/categories', {templateUrl: 'views/categories.html', controller: 'CategoriesCtrl'})
        .when('/review', {templateUrl:'views/review.html', controller: 'ReviewCtrl'})
        .otherwise({redirectTo: '/'});
  });

siteSurveyModule.constant('constants',{
   firebaseUrl: _firebaseUrl
});

var getFirebaseRef = function(resource){
        return new Firebase(_firebaseUrl + resource);
}

var getFirebaseJsonUrl = function(){
    return _firebaseUrl + ".json";
}

function isEmpty(map) {
    'use strict';
    for(var key in map) {
        if (map.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}



