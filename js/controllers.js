'use strict';

/* Controllers */

angular.module('trailWorkerApp.controllers', []).
  controller('trailWorkerCtrl', ['$scope', '$resource', '$location', 'UsersList', function($scope, $resource, $location, UsersList) {
    $scope.user_name = null;
    $scope.error = null;

    $scope.users = UsersList.allUsers.query();

    $scope.login = function() {
      
      for (var i = 0; i < $scope.users.length; i++) {
        if ($scope.users[i].username == $scope.user_name) {
          localStorage.setItem('userId', $scope.users[i].id);
          $location.path('/profile');
          break;
        }
        else {
          if ($scope.user_name === null) {
            $scope.error = {
              message: 'Please enter valid username'
            };
          }
          else {
            $scope.error = {
              message: 'You have entered invalid username'
            };
          }
        }
      }
    }
  }]).
  controller('profileCtrl', ['$scope', '$resource', '$location', 'UsersList', function($scope, $resource, $location, UsersList) {
    $scope.totalComment = false;
    var currentUserId = localStorage.getItem('userId');
    if (currentUserId !== null) {
      $scope.user_info = UsersList.loggedInUser.get({user: currentUserId});
      $scope.user_posts = UsersList.userPosts.query({'userId': currentUserId});
    }
    else {
      $location.path('/');
    }

    $scope.logout = function() {
      localStorage.removeItem('userId');
      $location.path('/');
    }

    $scope.comments = function(post_id) {
      $scope.post_comments = UsersList.commentOnPost.query({'postId': post_id});
      $scope.totalComment = true;
    }

  }]).
	controller('registerCtrl', ['$scope', '$resource', '$location', 'UsersList', function($scope, $resource, $location, UsersList) {

	}]);
