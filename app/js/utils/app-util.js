angular.module('app').service('AppUtils', [ '$mdToast','localStorageService',
    function($http, Constants, $mdToast, localStorageService, $anchorScroll) {
        var self = this;
        self.successToast = function(msg) {
            $mdToast.show($mdToast.simple()
                .theme('success-toast')
                .content(msg)
                .position('bottom left')
                .action('CLOSE')
                .hideDelay(5000));
        };}
]);