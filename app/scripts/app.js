/**
*
* Jose Antonio Herrera Peña
*/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'views/home.html',
    controller  : 'HomeController'
  })

  .otherwise({redirectTo: '/'});
});

/*
*
* HomeController: controller of the main page.
*
*/
myApp.controller('HomeController', function($scope, apiService) {
  $scope.posts = [];
  $scope.post ={
    userId:undefined,
    title:undefined,
    body:undefined
  }

  getAllPosts();

  //make a call to get comments and display them
  $scope.displayComments = function(post){
    if(post.showComments == undefined){
      apiService.getCommentsByPost(post.id).then(function(response) {
        post.comments = response.data;
        post.showComments = true;
      });
    }
    else if(post.showComments == false){
      apiService.getCommentsByPost(post.id).then(function(response) {
        post.comments = response.data;
        post.showComments = !post.showComments;
      });
    }
    else{
      post.showComments = !post.showComments;
    }
  };

  //add a new post to the list
  $scope.createNewPost = function(){
    if(validatePost($scope.post)){
      $scope.posts.unshift(Object.assign({}, $scope.post));
      clearNewPost();
    }
  }

  function getAllPosts(){
    apiService.getAllPosts().then(function(response) {
      $scope.posts = response.data;
    });
  }

  function clearNewPost(){
    $scope.post ={
      userId:undefined,
      title:undefined,
      body:undefined
    }
  }

  function validatePost(post){
    var isOk = true;
    if(!post.userId || !post.title || !post.body){
      isOk = false;
    }
    return isOk;
  }

});
