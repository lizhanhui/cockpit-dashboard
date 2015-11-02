/**
 * Created by macbookpro on 15/11/2.
 */
'use strict';

var myApp = angular.module('myApp');
myApp.directive('cockpitHeader', function() {
   return {
       restrict: 'E',
       templateUrl: 'components/header/header.html'
   }
});
