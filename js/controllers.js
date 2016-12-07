const homePageController  = angular.module('homePageController', []);

homePageController.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.listings = data;
    console.log(data);
  });
}]);