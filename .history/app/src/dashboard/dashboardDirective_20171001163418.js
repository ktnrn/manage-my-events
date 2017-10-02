var app = angular.module("app", ['ngMaterial']);

(function() {
    'use strict';

    angular
        .module('app')
        .directive('Dashboard', Dashboard);

    Dashboard.$inject = [];
    function Dashboard() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: dashboardController,
            controllerAs: '$ctrl',
            link: link,
            restrict: 'E',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
})();