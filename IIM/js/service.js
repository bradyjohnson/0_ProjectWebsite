/**
 * Created by williambjohnson on 2/21/15.
 */
var app = angular.module('myApp');

app.service('firebase', function($http, $q) {

  this.getContent = function () {
    //var deferred = $q.defer();
    return $http.get('https://ics-ism.firebaseio.com/data.json').then(function (response) {
      //console.log(response.data);
      return response.data;
      //deferred.resolve(response.data);
    })

    //return deferred.promise;
  }

  this.addContent = function(post){

    var guid = function() {
      var s4 = function() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    post.timestamp = Date.now();
    post.id = guid();


    return $http.put('https://ics-ism.firebaseio.com/data/' + post.id + '.json', post)


  }


});