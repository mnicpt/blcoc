angular.module('blcoc', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/home', {
      controller:'HomeCtrl',
      templateUrl:'pages/home.html'
    })
    .when('/about', {
      controller:'AboutCtrl',
      templateUrl:'pages/about.html'
    })
    .when('/events', {
      controller:'EventsCtrl',
      templateUrl:'pages/events.html'
    })
    .when('/programs', {
      controller:'ProgramsCtrl',
      templateUrl:'pages/programs.html'
    })
    .when('/groups', {
      controller:'GroupsCtrl',
      templateUrl:'pagespages//groups.html'
    })
    .otherwise({
      controller:'HomeCtrl',
      templateUrl:'pages/home.html'
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