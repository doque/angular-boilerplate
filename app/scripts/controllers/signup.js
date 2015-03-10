app.controller('SignupCtrl', function($scope) {

	var levels = {
		10: 'very secure',
		6: 'almost secure',
		0: 'not secure'
	}

	/**
	 * calculates the security of a password
	 * @return {int}
	 */
	$scope.getLevel = function() {
		var l = $scope.password.length;
		for (var length in levels) {
			if (l >= length) {
				$scope.level = levels[length];
			}
		}
	};

});