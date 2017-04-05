angular.module( 'main', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'main', {
    url: '/main',
    templateUrl: 'app/js/main/main.tpl',
    controller: 'MainCtrl'
  } );
} ).controller( 'MainCtrl', function( $scope ) {
  $scope.mainctrl = {
  };
    });