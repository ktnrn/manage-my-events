(function() {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', dashboardController);

        dashboardController.$inject = [];
    function dashboardController() {
        var vm = this;
        vm.openSideNav = false;
        // implementation goes here.
    }
})();