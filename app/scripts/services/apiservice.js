'use strict';
/*
*
* apiService: contains the calls to the differents endpoints.
*
*/
angular.module('myApp')
.factory('apiService', function ($http) {

  var apiFunctions = {

    "getAllPosts": function(){
      var headers = {};

      return $http.get(POSTS_ENDPOINT, {
        headers: headers
      }).then(function (response) {
        return response;

      }, function errorCallback(response) {
        return response;
      });
    },

    "getCommentsByPost": function(postId){
      var headers = {};

      return $http.get(POSTS_ENDPOINT+"/"+postId+"/comments", {
        headers: headers
      }).then(function (response) {
        return response;

      }, function errorCallback(response) {
        return response;
      });
    }

  };

  return apiFunctions;

})
;
