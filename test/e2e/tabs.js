var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Ionic Dash Tab', function() {

  var decoratedModule = function() {
		var ngCordovaMocks = angular.module('ngCordovaMocks');
		var injector = angular.injector(['ngCordovaMocks', 'ng']);
    ngCordovaMocks.service('$cordovaDevice', function() {
			var cordovaDevice = injector.get('$cordovaDevice');
			cordovaDevice.platform = 'ios';
      return cordovaDevice;
    });
  };

  it('should have the correct heading', function() {
		browser.addMockModule('ngCordovaMocks', decoratedModule);
    browser.get('http://localhost:8100');

		var heading = element(by.css('h2'));
		expect(heading.getText()).to.eventually.equal('ios');
  });
});