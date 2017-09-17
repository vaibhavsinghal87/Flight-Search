(function (){
	'use strict';
	
	FlightSearch.config(
		function($routeProvider){
			$routeProvider.when('/flightSearch', {
					controller: 'mainController',
					templateUrl: 'scripts/pages/flightSearchEngine/partials/layout.html',
				}).
				otherwise({
					redirectTo: '/flightSearch'
				});
		});
})();
