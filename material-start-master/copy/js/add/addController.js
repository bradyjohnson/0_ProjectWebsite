/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('myApp');

  app.config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });

  app.controller('addController', function($scope, $mdDialog) {
    $scope.alert = '';
    $scope.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('This is an alert title')
          .content('You can specify some description text in here.')
          .ariaLabel('Password notification')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };

    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'js/add/addTemplate.html',
        targetEvent: ev
      })
        .then(function(answer) {
          $scope.alert = 'Your form has been submitted "' + answer + '".';
        }, function() {
          $scope.alert = alert('Your form has been cancelled.');
        });
    };

    $scope.date = new Date();

    $scope.school = ["BYU", "BYU-I", "UofU", "USU", "UVU", "WSU"];
    $scope.gpa = ["2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "3.0", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "4.0"];
    $scope.location = ["Riverton", "Orem", "Salt Lake"];
    $scope.internship = ["Business Analyst", "Business Intelligence or Database", "Infrastructure/Networking", "Interactive Design or UX", "Quality Assurance Engineer", "Product Management", "Project Management", "Security Analyst", "Software Development", "Web Development"];
    $scope.overall_score = ["1", "2", "3", "4", "5"];
    $scope.month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $scope.year = ["foo", "bar"];
    $scope.school = ["foo", "bar"];
    $scope.school = ["foo", "bar"];
    $scope.school = ["foo", "bar"];

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



    $scope.post = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '' ,
      company: 'Google' ,
      address: '1600 Amphitheatre Pkwy' ,
      city: 'Mountain View' ,
      state: 'CA' ,
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode : '94043'
    };
  });

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}