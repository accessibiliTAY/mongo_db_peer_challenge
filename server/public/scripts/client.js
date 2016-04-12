var app = angular.module('app', []);
app.controller("AssignmentController", ["$scope", "$http", function($scope, $http){
  $scope.assignment = {};
  $scope.assignments = [];

  var fetchAssignments = function(){
    return $http.get('/assignments').then(function(response){
      if(response.status !== 200) {
        throw new Error("failed to fetch new assignments");
      }
      $scope.assignment = {};
      $scope.assignments = response.data;
      return response.data;
    });

  };
  $scope.add = function(assignment){
    return $http.post('/assignments', assignment).then(fetchAssignments());
  };
  fetchAssignments();
}]);
