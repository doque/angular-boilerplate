'use strict';

var app = angular.module('myapp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ui.sortable'
]);

// route provider
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	}).otherwise({
		redirectTo: '/'
	});
});