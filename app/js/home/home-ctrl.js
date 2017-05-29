angular.module( 'home', [ 'ngMaterial' ] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl'
  } );
} ).controller( 'HomeCtrl', function( $scope, $window, $mdDialog, $http ) {
  $scope.user = {};
  
  $scope.status = '  ';
  $scope.customFullscreen = false;
  $scope.showAlert = function( ev ) {
    $mdDialog.show( {
      templateUrl: 'app/js/home/tmpl.tpl',
      parent: angular.element( document.body ),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    } );
  };
  $scope.showAlert2 = function( ev ) {
    $mdDialog.show( {
      templateUrl: 'app/js/home/serverSupport.tpl',
      parent: angular.element( document.body ),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    } );
  };
  $scope.showAlert3 = function( ev ) {
    $mdDialog.show( {
      templateUrl: 'app/js/home/RemoteManag.tpl',
      parent: angular.element( document.body ),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    } );
  };
  $scope.showAlert4 = function( ev ) {
    $mdDialog.show( {
      templateUrl: 'app/js/home/wifiSolution.tpl',
      parent: angular.element( document.body ),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    } );
  };
  $scope.showAlert5 = function( ev ) {
    $mdDialog.show( {
      templateUrl: 'app/js/home/dataBackup.tpl',
      parent: angular.element( document.body ),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    } );
  };
  $scope.showAlert6 = function( ev ) {
    $mdDialog.show( {
      templateUrl: 'app/js/home/cloudsolu.tpl',
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
    // wrapAround: true
  } );
  $scope.homectrl = {
  };
  console.log( "homectrl" );
  $scope.topFunction = topFunction;
  $scope.mobileMenu = mobileMenu;
  
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
    var x = document.getElementById( "myTopnav" );
    if ( x.className === "topnav" ) {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
} );
