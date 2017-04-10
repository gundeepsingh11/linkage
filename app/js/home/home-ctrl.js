angular.module( 'home', [ 'ngMaterial' ] ).config( function( $stateProvider ) {
$stateProvider.state( 'home', {
  url: '/home',
  templateUrl: 'app/js/home/home.tpl',
  controller: 'HomeCtrl'
} );
} ).controller( 'HomeCtrl', function( $scope, $window, $mdDialog ) {
  var elem = document.querySelector( '.gallery' );
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true
  } );
  $scope.status = '  ';
  $scope.customFullscreen = false;
  $scope.showAlert = function( ev ) {
    $mdDialog.show( {
      templateUrl: 'app/js/utils/tmpl.tpl',
      parent: angular.element( document.body ),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    } );
  };
  var flkty1 = new Flickity( '.gallery1', {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
  pauseAutoPlayOnHover: false
});
var nav = document.querySelector( '.gallery-nav' );
// get array of items with li tag
var items = Array.prototype.slice.call( nav.children ); $scope.homectrl = {
  selectedLi: 'li3',
  index: 0,
  slides: null,
  flkty: flkty
}; console.log( "homectrl" ); $scope.homectrl.slides = items; $scope.getClick = getClick;
// $scope.testimonialSelected = testimonialSelected;
// var galleryElem = document.getElementsByClassName( 'gallery' );
// var flkty = new Flickity( galleryElem );
function getClick( slide ) {
  // console.log(flkty.selectedIndex);
  var liElement = document.getElementById( slide );
  var index = items.indexOf( liElement );
  $scope.homectrl.selectedLi = slide;
  flkty.select( index );
}
// function testimonialSelected( selected ) {
//   console.log( 'img', selected );
//   var imgSlected = document.getElementById( selected );
//   imgSlected.className += "selectedImg";
//   // document.getElementById( selected ).style.width = "60";
// }

window.onscroll = function() {
    myFunction();
  };
  
  function myFunction() {
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
      document.getElementById( "home" ).className = "fixed-header";
    } else {
      document.getElementById( "home" ).className = "top-header";
    }

  }


} );
