/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('myApp');

app.filter('startFrom',function (){
  return function (input,start) {
    start = +start;
    return input.slice(start);
  }
});