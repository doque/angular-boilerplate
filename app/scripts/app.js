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
	$routeProvider.when('/main', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	}).when('/', {
		templateUrl: 'views/signup.html',
		controller: 'SignupCtrl'
	}).otherwise({
		redirectTo: '/'
	});
});