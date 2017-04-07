angular.module( 'part2', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'part2', {
    url: '/part2',
    templateUrl: 'app/js/part2/part2.tpl',
    controller: 'Part2Ctrl'
  } );
} ).controller( 'Part2Ctrl', function( $scope, $window ) {
  $scope.part2ctrl = {};
  console.log( "part2ctrl" );
  
} );
