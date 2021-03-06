/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('myApp');

app.controller('controller', function ($scope, firebase){
  $scope.toggleSearch = false;

  var getContent = function() {
    firebase.getContent().then(function (data) {
      $scope.content = data;
      console.log($scope.content);
      //perform calculations here
    })

  };

  getContent();



  $scope.headers = [
    {field: 'candidate', name: 'Candidate'},
    {field: 'overall_score', name: 'Overall Score'},
    {field: 'school', name: 'School'},
    {field: 'position', name: 'Position'},
    {field: 'available_year', name: 'Year'},
    {field: 'available_month', name: 'Month'}
    //{field: 'locations', name: 'Locations'},
    //{field: 'interests', name: 'Interests'},
    //{field: 'notes', name: 'Notes'},
    //{field: 'code', name: 'Code'},
    //{field: 'rating_aptitude', name: 'Rt-Apt'},
    //{field: 'rating_decision', name: 'Rt-Dec'},
    //{field: 'rating_coding', name: 'Rt-Code'},
    //{field: 'email', name: 'Email'},
    //{field: 'phone_number', name: 'Phone'},
    //{field: 'major', name: 'Major'},
    //{field: 'gpa', name: 'GPA'},
    //{field: 'grad_date', name: 'Code'},
    //{field: 'date', name: 'Date Interviewed'}
  ];

  $scope.custom = {candidate: 'bold', overall_score:'bold',school: 'grey'};
  $scope.sortable = ['candidate', 'overall_score', 'school', 'position', 'available_year', 'available_month'];
  $scope.thumbs = 'thumb';
  $scope.count = 5;

  $scope.calcRefresh = function(){

  }


});
