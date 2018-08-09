describe('HomeController', function() {
  beforeEach(module('myApp'));

  var $controller, $rootScope;

  beforeEach(inject(function(_$controller_, _$rootScope_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('$scope.createNewPost', function() {

    it('add a post in post list', function() {
      var $scope = $rootScope.$new();
      var controller = $controller('HomeController', { $scope: $scope });
      $scope.post ={
        userId:1,
        title:"foo",
        body:"bar"
      }
      expect($scope.posts.length).toEqual(0);
      $scope.createNewPost();
      expect($scope.post.userId).toEqual(undefined);
      expect($scope.posts.length).toEqual(1);
    });
  });
});


describe('camelCase', function() {
  beforeEach(module('myApp'));

  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns the text in camel case', function() {
    expect($filter('camelCase')("hello world")).toEqual("Hello World");
  });
});
