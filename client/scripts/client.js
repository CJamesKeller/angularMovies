var myApp = angular.module("myApp", []);

myApp.controller("FirstController", [ "$scope", "OnlyService", function($scope, OnlyService){
console.log("FirstController hit!");
  $scope.allMovies = OnlyService.allMovies;
  $scope.newMovie = {
        name: "",
        desc: "",
        director: "",
        length: ""
      };
  $scope.addMovie = OnlyService.addMovie;

}]);

myApp.controller("SecondController", ["$scope", "OnlyService", function($scope, OnlyService){
  console.log("SecondController hit!");
  $scope.allMovies = OnlyService.allMovies;
  $scope.movies = OnlyService.allMovies.movies;

}]);



myApp.factory("OnlyService", [function(){
console.log("OnlyService hit!");

  var allMovies = {
        movies: []
      };

  var addMovie = function(name, desc, director, length){
    var movie = {
      name: name,
      desc: desc,
      director: director,
      length: length
    };
    allMovies.movies.push(movie);
    console.log(allMovies.movies);
  };

  return {
    allMovies: allMovies,
    addMovie: addMovie,
  };

}]);
