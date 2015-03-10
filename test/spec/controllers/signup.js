'use strict';

describe('Controller: SignupCtrl', function() {

	// load the controller's module
	beforeEach(module('myapp'));

	// placeholder vars
	var SignupCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		SignupCtrl = $controller('SignupCtrl', {
			$scope: scope
		});
	}));

	it('should be almost secure for password `abcdef`', function() {
		scope.password = 'abcdef';
		scope.getLevel();
		expect(scope.level).toEqual('almost secure');
	});

	it('should be secure for password `abcdefghijk`', function() {
		scope.password = 'abcdefghijk';
		scope.getLevel();
		expect(scope.level).toEqual('very secure');
	});

	it('should be not secure for password `abc`', function() {
		scope.password = 'abc';
		scope.getLevel();
		expect(scope.level).toEqual('not secure');
	});


});