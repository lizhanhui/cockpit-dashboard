/**
 * Created by macbookpro on 15/11/2.
 */
'use strict';

describe('myApp.view3 module', function() {

    var $scope;

    beforeEach(module('myApp.view3'));
    beforeEach(inject(function($rootScope) {
        $scope = $rootScope.$new();
    }));

    describe('view3 controller', function(){
        it('should ....', inject(function($controller) {
            //spec body
            var view3Ctrl = $controller('View3Ctrl', {$scope: $scope});
            expect(view3Ctrl).toBeDefined();
            expect($scope.msg).toBe('View 3');
        }));

    });
});