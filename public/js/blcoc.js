angular.module('blcoc', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/home', {
      controller:'HomeCtrl',
      templateUrl:'./home.html'
    })
    .when('/about', {
      controller:'AboutCtrl',
      templateUrl:'./about.html'
    })
    .when('/events', {
      controller:'EventsCtrl',
      templateUrl:'./events.html'
    })
    .when('/programs', {
      controller:'ProgramsCtrl',
      templateUrl:'./programs.html'
    })
    .when('/groups', {
      controller:'GroupsCtrl',
      templateUrl:'./groups.html'
    })
    .otherwise({
      controller:'HomeCtrl',
      templateUrl:'./home.html'
    });
})

.controller('IndexCtrl', function($scope) {
    $scope.time = function() {
        alert("Church service is at 10 a.m. on Sundays.");
    };
    $scope.location = function() {
        alert("We are located at 1540 LandMark Mall just west of Kroger and next to the Music Shoppe.");
    };
})
.controller('HomeCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope) {

})

.controller('EventsCtrl', function($scope) {
    
})

.controller('ProgramsCtrl', function($scope) {
   
})

.controller('GroupsCtrl', function($scope) {
  
});