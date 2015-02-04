'use strict';
angular.module('GettingStartedWithIonicAndNgcordova.controllers', [])

.controller('DashCtrl', function($scope, $cordovaDevice, $ionicPlatform) {
	$ionicPlatform.ready(function() {
		$scope.devicePlatform = $cordovaDevice.getPlatform();
		if(!$scope.$$phase) {
			$scope.$digest();
		}
	});
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function() {
});
