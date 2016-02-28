'use strict';

/* Services */

angular.module('trailWorkerApp.services', []).
	factory("UsersList", function($resource) {
  		var baseURL = 'http://jsonplaceholder.typicode.com';
  		return {
    		allUsers: $resource(baseURL + "/users/", {}, {
      			query: {method: 'GET', params: {}, isArray: true }
    		}),
    		loggedInUser: $resource(baseURL + "/users/:user", {user: "@user"}, {
      			get: {method: 'GET', params: {user: "@user"} }
    		}),
    		userPosts: $resource(baseURL + "/posts/", {}, {
    			query: {method: 'GET', isArray: true }
    		})
  		};
	});
