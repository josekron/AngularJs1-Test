/*
*
* utils.js: contains functions to use in the different controllers.
*
*/
angular.module('myApp')
.filter( 'camelCase', function (){
  var camelCaseFilter = function (text){
    var words = text.split(' ');
      for ( var i = 0, len = words.length; i < len; i++ )
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            return words.join(' ');
      };
      return camelCaseFilter;
})
