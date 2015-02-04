'use strict';

describe('Controller: FriendsCtrl', function () {

  var should = chai.should();

  // load the controller's module
  beforeEach(module('GettingStartedWithIonicAndNgcordova'));

  var FriendsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FriendsCtrl = $controller('FriendsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of pets to the scope', function () {
    scope.friends.should.have.length(4);
  });

});

describe('Controller: DashCtrl', function () {

  var should = chai.should(), $cordovaDevice = null, $httpBackend, DashCtrl, scope;

	beforeEach(module('GettingStartedWithIonicAndNgcordova'));
	beforeEach(module('ngCordovaMocks'));

	beforeEach(inject(function (_$cordovaDevice_) {
		$cordovaDevice = _$cordovaDevice_;
	}));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
		$httpBackend = _$httpBackend_;
		$httpBackend.when('GET', /templates\S/).respond("");
		
		$cordovaDevice.platform = 'TEST VALUE';
    scope = $rootScope.$new();
    DashCtrl = $controller('DashCtrl', {
      $scope: scope
    });
		$httpBackend.flush();
  }));

  it('should inspect the current deviceType', function () {						
    scope.devicePlatform.should.equal('TEST VALUE');
  });

});
