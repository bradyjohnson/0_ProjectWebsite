/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('myApp');

app.directive('md-table', function () {
  return {
    restrict: 'E',
    scope: { headers: '=', data: '=', sortable: '=', filters: '=',customClass: '=customClass',thumbs:'=', count: '=' },
    controller: function ($scope,$filter,$window) {
      var orderBy = $filter('orderBy');
      $scope.currentPage = 0;
      $scope.nbOfPages = function () {
        return Math.ceil($scope.data.length / $scope.count);
      },
        $scope.handleSort = function (field) {
          if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
        };
      $scope.order = function(predicate, reverse) {
        $scope.data = orderBy($scope.data, predicate, reverse);
        $scope.predicate = predicate;
      };
      $scope.order($scope.sortable[0],false);
      $scope.getNumber = function (num) {
        return new Array(num);
      };
      $scope.goToPage = function (page) {
        $scope.currentPage = page;
      };
    },



    template:
    '<table class="md-table">'+
    '<thead>'+
    '<tr class="md-table-headers-row">'+
    '<th class="md-table-header" ng-repeat="h in headers">'+
    '<a href ng-if="handleSort(h.field)" ng-click="reverse=!reverse;order(h.field,reverse)">{{h.name}} <span  class="md-table-caret" ng-show="reverse && h.field == predicate"><img src="https://google.github.io/material-design-icons/navigation/svg/ic_arrow_drop_up_24px.svg"></span><span  class="md-table-caret" ng-show="!reverse && h.field == predicate"><img src="https://google.github.io/material-design-icons/navigation/svg/ic_arrow_drop_down_24px.svg"></span></a>'+
    '<span ng-if="!handleSort(h.field)">{{h.name}}</span>'+
    '</th><th class="md-table-header"></th>'+
    '</tr>'+
    '</thead><tbody>'+
    '<tr class="md-table-data-row" ng-repeat="c in content | filter:filters | startFrom:currentPage*count | limitTo: count">'+
    '<td ng-repeat="h in headers" ng-if="h.field == thumbs" class="md-table-thumbs">'+
    '<div ng-if="h.field == thumbs" style="background-image:url({{c.thumb}})"></div>'+
    '</td>'+
    '<td class="md-table-content" ng-repeat="h in headers" ng-class="customClass[h.field]" ng-if="h.field != thumbs">'+
    '{{c[h.field]}}'+
    '</td><td class="md-table-td-more"><md-button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></md-button></td>'+
    '</tr>'+
    '</tbody>'+
    '</table>'+
    '<div class="md-table-footer" layout="row">'+
    '<span class="md-table-count-info">Rows count per page : <a href ng-click="goToPage(0); count=1">1</a>, <a href ng-click="goToPage(0); count=10">10</a>, <a href ng-click="goToPage(0); count=25">25</a>, <a href ng-click="goToPage(0); count=50">50</a>, <a href ng-click="goToPage(0); count=100">100</a> (current is <strong>{{count}}</strong>)</span>'+
    '<span flex></span>'+
    '<span ng-show="nbOfPages() > 1">'+
    '<md-button class="md-table-footer-item" ng-disabled="currentPage==0" ng-click="currentPage=currentPage-1">'+
    '<img src="http://google.github.io/material-design-icons/hardware/svg/ic_keyboard_arrow_left_24px.svg">'+
    '</md-button>'+
    '<a href ng-repeat="i in getNumber(nbOfPages()) track by $index" >'+
    '<md-button class="md-primary md-table-footer-item" ng-click="goToPage($index)">'+
    '<span ng-class="{ \'md-table-active-page\': currentPage==$index}">{{$index+1}}</span>'+
    '</md-button></a>'+
    '<md-button class="md-table-footer-item" ng-disabled="currentPage==nbOfPages()-1" ng-click="currentPage=currentPage+1">'+
    '<img src="http://google.github.io/material-design-icons/hardware/svg/ic_keyboard_arrow_right_24px.svg">'+
    '</md-button></span></div>'
  }
});

  app.filter('startFrom',function (){
    return function (input,start) {
      start = +start;
      return input.slice(start);
    }
  });