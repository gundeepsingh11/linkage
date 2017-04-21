angular.module( 'home', [ 'ngMaterial', 'contact' ] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope, $window, $mdDialog, $http ) {
  $scope.user = {};
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
    pauseAutoPlayOnHover: false,
    wrapAround: true
  } );
  var nav = document.querySelector( '.gallery-nav' );
  // get array of items with li tag
  var items = Array.prototype.slice.call( nav.children );
  $scope.homectrl = {
    selectedLi: 'li3',
    index: 0,
    slides: null,
    flkty: flkty
  };
  console.log( "homectrl" );
  $scope.homectrl.slides = items;
  $scope.getClick = getClick;
  $scope.topFunction = topFunction;
  $scope.mobileMenu = mobileMenu;
  $scope.isCollapsed = false;
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
    scrollFunction();
  };

  function myFunction() {
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
      document.getElementById( "home" ).className = "fixed-header";
    } else {
      document.getElementById( "home" ).className = "top-header";
    }
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if ( document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500 ) {
      document.getElementById( "myBtn" ).style.display = "block";
    } else {
      document.getElementById( "myBtn" ).style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction( ev ) {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }
  function mobileMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  
} );
