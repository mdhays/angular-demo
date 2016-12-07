var myApp = angular.module('myApp', [
  'ngRoute',
  'homePageControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list',
  {
    templateUrl: 'views/listings.html',
    controller: 'ListController'
  }).
    when('/details/:itemId',
  {
    templateUrl: 'views/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);