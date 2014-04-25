angular.module('blcoc', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/home', {
      controller:'HomeCtrl',
      templateUrl:'home.html'
    })
    .when('/about', {
      controller:'AboutCtrl',
      templateUrl:'about.html'
    })
    .when('/events', {
      controller:'EventsCtrl',
      templateUrl:'events.html'
    })
    .when('/programs', {
      controller:'ProgramsCtrl',
      templateUrl:'programs.html'
    })
    .when('/groups', {
      controller:'GroupsCtrl',
      templateUrl:'groups.html'
    })
    .otherwise({
      redirect:'/'
    });
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