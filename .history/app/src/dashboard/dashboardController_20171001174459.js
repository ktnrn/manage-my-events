(function() {
    'use strict';

    angular
        .module('app')
        .controller('dashboardController', dashboardController);

        dashboardController.$inject = ['$mdMedia'];
    function dashboardController($mdMedia) {
        var vm = this;
        vm.openSideNav = $mdMedia('gt-sm') ? false: true;
        // implementation goes here.
    }
})();