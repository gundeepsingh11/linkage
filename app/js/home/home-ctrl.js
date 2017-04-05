angular.module( 'home', [ 'main' ] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope, $window ) {
  $scope.homectrl = {};
  console.log( "homectrl" );

} );
