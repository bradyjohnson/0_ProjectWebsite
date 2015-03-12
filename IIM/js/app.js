/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('myApp', ['ngRoute','ngMaterial', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './template/table',
      controller: 'mdTable'
    })
    .when('/add', {
      templateUrl: 'js/add/addTemplate.html',
      controller: 'addController'
    })
    .otherwise({
      redirectTo: '/'
    });
});