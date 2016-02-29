'use strict';

// Declare app level module which depends on controllers, and services
angular.module('trailWorkerApp', [
  'ngRoute',
  'ngResource',
  'trailWorkerApp.services',
  'trailWorkerApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'trailWorkerCtrl'});
  $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'registerCtrl'});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'profileCtrl'});
  // $routeProvider.when('/comments', {templateUrl: 'partials/comments.html', controller: 'profileCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
