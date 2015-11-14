'use strict';

describe('Controller: GifCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsGiphyAppApp'));

  var GifCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GifCtrl = $controller('GifCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GifCtrl.awesomeThings.length).toBe(3);
  });
});
