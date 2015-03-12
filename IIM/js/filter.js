/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('myApp');

app.filter('startFrom',function () {
  return function (input, start) {
    if (input === undefined || input.length === 0) {
      return;
    }
    start = +start;
    //if (input === undefined){
    //  console.log("undefined " + start)
    //}
    //console.log(start);
    return input.slice(start);
  }
});
