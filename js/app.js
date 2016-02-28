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
  $routeProvider.when('/posts', {templateUrl: 'partials/posts.html', controller: 'profileCtrl'});
  // $routeProvider.when('/verify-email', {templateUrl: 'partials/verify-email.html', verify_email: true});
  // $routeProvider.when('/reset-password', {templateUrl: 'partials/reset-password.html', public: true});
  // $routeProvider.when('/set-password', {templateUrl: 'partials/set-password.html', set_password: true});
  // $routeProvider.when('/articles', {templateUrl: 'partials/articles.html', controller: 'ArticlesCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
