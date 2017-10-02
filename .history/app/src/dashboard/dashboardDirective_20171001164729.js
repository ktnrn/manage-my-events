(function() {
    'use strict';

    angular
        .module('app')
        .directive('dashboard', dashboard);

    dashboard.$inject = [];
    function dashboard() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: 'dashboardController',
            controllerAs: '$ctrl',
            link: link,
            restrict: 'E',
            scope: {
            },
            templateUrl: "dashboard.html"
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
})();