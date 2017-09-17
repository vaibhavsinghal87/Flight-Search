(function (){
	'use strict';
	
	FlightSearch.directive('flightDetails', [
		function(){
			return {
				restrict: 'E',
				templateUrl: 'scripts/components/flightDetails/partials/flightDetails.html',
				scope: {
					flights: '=',
					bookFlight: '&'
				}, 
				link: function ($scope){
				}
			};
		}
	]);
})();