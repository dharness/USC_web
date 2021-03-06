 var myapp = angular.module('myapp', ['ngRoute']);

 myapp.config(function($routeProvider) {
	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'pages/landing.html',
		controller: 'mainController'
	})
	
	//signup page
	// .when('/admin', {
	// 	templateUrl: 'pages/admin.html',
	// 	controller: 'adminController'
	// })

	//handle the popcorn
	.when('/*', {
		templateUrl: 'pages/landing.html',
		controller: 'mainController'
	}).
      otherwise({
        redirectTo: '/'
      });
});
