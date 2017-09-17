(function (){
	'use strict';
	
	FlightSearch.service('flightSearchService', [
		'$q',
		'$http',
		function($q, $http){
			
			var arrFlightsData = [];
			
			/**
			 * @description This function gets flight data
			 */
			this.getFlightData = function(){
				var defer = $q.defer();
				$http.get('../src/data/flights.json', {
				}).then(function(response){
					arrFlightsData = response.data.flights;
					defer.resolve(arrFlightsData);
				});
				return defer.promise;
			};
			
			/**
			 * @description This function filters data on the basis of param
			 */
			this.filterFlights = function(param){
				var len = arrFlightsData.length,
					i, arrResult = [], price;
				for (i = 0; i < len; i++){
					price = arrFlightsData[i].price;
					if(price >= param.data.min_price && price <= param.data.max_price){
						arrResult.push(arrFlightsData[i]);
					}
				}
				// sort results on the basis of price
				arrResult.sort(function(a, b){
					return parseInt(a.price) - parseInt(b.price);
				});
				return arrResult;
			};
		}
	]);
})();