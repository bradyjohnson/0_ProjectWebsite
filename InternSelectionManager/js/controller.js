/**
 * Created by williambjohnson on 2/7/15.
 */
var app = angular.module('ISM');

app.controller('MainController', function($scope){
  $scope.appName = 'Intern Selection Manager';
  $scope.posts = [];
  $scope.addPost = function(){

    $scope.newPost.timestamp = Date();
    $scope.newPost.karma = 0;
    $scope.newPost.comments = [];
    console.log($scope.newPost);
    $scope.posts.push($scope.newPost);
    $scope.reset();

  };
  $scope.reset = function(){
    $scope.newPost = {}
  };

  $scope.vote = function(index, direction){
    if(direction === 'up'){
      $scope.posts[index].karma++
    } else if(direction === 'down'){
        $scope.posts[index].karma--
      }
    };

  $scope.submitComment = function(index, comment){
    $scope.posts[index].comments.push(comment);
    $scope.posts[index].commentForm = '';
  };






});
