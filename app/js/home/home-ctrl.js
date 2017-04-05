angular.module( 'home', [ 'main' ] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope, $window ) {
  $scope.homectrl = {};
  console.log( "homectrl" );
  // angular.element(document.body).bind("scroll", function() { console.log('gg');
  //            if (this.pageYOffset >= 200) {
  //                element.addClass('min');
  //                console.log('Scrolled below header.');
  //            } else {
  //                element.removeClass('min');
  //                console.log('Header is in view.');
  //            }
  //       });
} );
// .directive("scroll", function ($window) {
//       return function(scope, element, attrs) {
//   angular.element($window).bind("scroll", function() { console.log( "homectrl" );
//               if (this.pageYOffset >= 100) {
//                    scope.boolChangeClass = true;
//                    console.log('Scrolled below header.');
//                } else {
//                    scope.boolChangeClass = false;
//                    console.log('Header is in view.');
//                }
//               $scope.$apply();
//           });
//       };
// }
