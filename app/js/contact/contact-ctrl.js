angular.module( 'contact', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'contact', {
    url: '/contact',
    templateUrl: 'app/js/contact/contact.tpl',
    controller: 'ContactCtrl'
  } );
} ).controller( 'ContactCtrl', function( $scope, $mdDialog ) {
  // $scope.mainctrl = {};
  function myFunction() {
    alert( "Page is loaded" );
  }
} );
