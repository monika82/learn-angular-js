/*
* Application states
*/
(function() {
    
	'use strict';

	angular
		.module('Project')
		.config([
			'$stateProvider', 
			'$urlRouterProvider', 
			function($stateProvider, $urlRouterProvider){

			// any unknown URLS go to 404
		    $urlRouterProvider.otherwise('/404');
		    // no route goes to index
		    $urlRouterProvider.when('', '/');
		    // use a state provider for routing

		    $stateProvider
		        .state('about', {
		            url: '/about',
		            templateUrl: 'app/components/about/about.view.html',
		            controller: 'aboutController',
		            controllerAs: 'ctrl'
		        })
		    	.state('contact', {
		            url: '/contact',
		            templateUrl: 'app/components/contact/contact.view.html',
		            controller: "contactController",
		            controllerAs: 'ctrl'
		        })
		        .state('404', {
		            url: '/404',
		            templateUrl: 'app/shared/404.html'
		        });    
	}]);

})();