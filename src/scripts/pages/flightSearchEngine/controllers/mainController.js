(function (){
	'use strict';
	
	FlightSearch.controller('mainController', [
		'$scope',
		'flightSearchService',
		'flightSearchConst',
		function($scope, flightSearchService, FLIGHT_SEARCH_CONST){
			
			var PRICE = 'price';
			
			$scope.model = {
				data: {}
			};
			
			// call function on search click - wrap below code in function
			flightSearchService.getFlightData().then(function(response){
				// pass this data to flight listing directive
				$scope.model.data = response;
			});
			
			/**
			 * @desccription This function handles flight book event
 			 * @param {Object} item
			 */
			$scope.bookFlight = function(item){
				console.log('mainController -> bookFlight ', item);
			};
			
			/**
			 * @description This function updates flight details on the basis of price range selected
			 */
			$scope.sliderUpdated = function(priceRange){
				$scope.model.data = flightSearchService.filterFlights({
					id: FLIGHT_SEARCH_CONST.PRICE,
					data: priceRange
				});
			};
			
			/**
			 * @descriotion This function performs search on the basis of data returned 
			 * from flight search directive
			 */
			$scope.performSearch = function(data){
				console.log('mainController -> performSearch ', data);
			};
			
			/**
			 * @description This function destroys all variables and events to make them available for GC
			 */
			$scope.$on('$destroy', function(){
				$scope.model = null;
			});
		}
	]);
})();