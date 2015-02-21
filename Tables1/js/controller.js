var app = angular.module('myApp');

app.controller('controller', function($scope, FirebaseService, uiGridConstants){

  var getIntern = function() {
    FirebaseService.getIntern().then(function (data) {
      $scope.data = data;
      console.log($scope.data);
    })

  }

  getIntern();

  $scope.gridOptionsComplex = {
    enableFiltering: true,
    showGridFooter: true,
    showColumnFooter: true,
    data: 'data',
    enablePinning: true,
    sortInfo: {fields: ['candidate', 'overall_score', 'school', 'position'], directions: ['asc']},
    columnDefs: [
      {field: 'candidate', displayName: 'Candidate', aggregationType: uiGridConstants.aggregationTypes.count},
      {field: 'overall_score', displayName: 'Overall Score', aggregationType: uiGridConstants.aggregationTypes.avg},
      {field: 'school', displayName: 'School'},
      {field: 'position', displayName: 'Position'},
      {field: 'available_year', displayName: 'Year'},
      {field: 'available_month', displayName: 'Month'},
      {field: 'locations', displayName: 'Locations'},
      {field: 'interests', displayName: 'Interests'},
      {field: 'notes', displayName: 'Notes'},
      {field: 'code', displayName: 'Code'},
      {field: 'rating_aptitude', displayName: 'Rt-Apt'},
      {field: 'rating_decision', displayName: 'Rt-Dec'},
      {field: 'rating_coding', displayName: 'Rt-Code'},
      {field: 'email', displayName: 'Email'},
      {field: 'phone_number', displayName: 'Phone'},
      {field: 'major', displayName: 'Major'},
      {field: 'gpa', displayName: 'GPA'},
      {field: 'grad_date', displayName: 'Code'},
      {field: 'date', displayName: 'Date Interviewed'}
    ]
  };


  $scope.addIntern = function(){
    FirebaseService.addIntern($scope.newIntern).then(function(){
      delete $scope.newIntern;
      getIntern();
    });

  };

});












//l need to get back the information, parse it accordingly, then set it to songData on the scope -> $scope.songData = ...
//  $scope.gridOptions = {
//      data: 'songData',
//      height: '110px',
//      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
//      columnDefs: [
//        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
//        {field: 'Artist', displayName: 'Artist'},
//        {field: 'Collection', displayName: 'Collection'},
//        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
//        {field: 'Type', displayName: 'Type'},
//        {field: 'CollectionPrice', displayName: 'Collection Price'},
//      ]
//  };
//
//
//
//
//
//
//  //Our controller is what's going to connect our 'heavy lifting' itunesService with our view (index.html) so our user can see the results they get back from itunes.
//
//  //First inject itunesService into your controller.
//
//    //code here
//
//  $scope.getSongData = function(){
//    //use the itunes service to getSongs and do something with it
//    mainService.getSongs($scope.artist).then(function(songs){
//
//      $scope.songData = songs.map(function(itunesFormattedResult){
//        return {
//          AlbumArt: itunesFormattedResult.artworkUrl100,
//          Artist: itunesFormattedResult.artistName,
//          Collection: itunesFormattedResult.collectionName,
//          CollectionPrice: itunesFormattedResult.collectionPrice,
//          Play: itunesFormattedResult.previewUrl,
//          Type: itunesFormattedResult.kind
//        }
//      })
//
//
//      //ng-model='artist' on the submit button = $scope.artist
//      //ng-submit on form allows hitting enter for it to submit...vs having ng-submit on button
//
//
//
//
//    })
//
//
//
//  }
//
//
//  //Now write a function that will call the method on the itunesService that is responsible for getting the data from iTunes, whenever the user clicks the submit button
//  //*remember, that method should be expecting an artist name. The artist name is coming from the input box on index.html, head over there and check if that input box is tied to any specific model we could use.
//  //Also note that that method should be retuning a promise, so you could use .then in this function.
//
//    //Code here
//
//
//  //Check that the above method is working by entering a name into the input field on your web app, and then console.log the result
//
//    //Code here
//
//
//  //If everything worked you should see a huge array of objects inside your console. That's great! But unfortunately that's not what ng-grid is expecting. What you need to do now
//  //is sort the data you got back to be an object in the following format.
//    /*
//      AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
//      Artist: "Nelly"
//      Collection: "Nellyville"
//      CollectionPrice: 11.99
//      Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
//      Type: "song"
//  */
//  //the iTunes API is going to give you a lot more details than ng-grid wants. Create a new array and then loop through the iTunes data pushing into your new array objects that look like the above data.
//
//    //Code here
//
//
//  //Once you have that final data array, you simply need to put it on the scope (or more specifically on the scope as songData). Once you do this ($scope.songData = myFinalArray) then ng-grid will see that and populate the page.
//
//    //Code here
//});
//
//
//
//
