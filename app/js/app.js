angular.module( 'app', ['ui.router','ngMaterial', 'ngAnimate', 'ngAria', 'home', 'main', 'part2'] )
.config(function($urlRouterProvider,$locationProvider){
 $urlRouterProvider.otherwise('home');
  $locationProvider.html5Mode(true);
}).run( function($state) {
	// alert("run");
    } );
