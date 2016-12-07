const homePageControllers  = angular.module('homePageControllers', []);

homePageControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/listings.json').success(function(data) {
    $scope.listings = data;
    $scope.listingOrder = 'date';
    console.log(data);
  });
}]);


homePageControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('js/listings.json').success(function(data) {
    $scope.listings = data;
    $scope.whichItem = $routeParams.itemId;
    console.log(data);
    console.log($scope.whichItem);
  });
}]);