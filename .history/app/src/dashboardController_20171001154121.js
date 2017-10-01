var app = angular.module("app", ['ngMaterial']);

(function() {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = [];
    function dashboardController() {
        var vm = this;
    }
})();