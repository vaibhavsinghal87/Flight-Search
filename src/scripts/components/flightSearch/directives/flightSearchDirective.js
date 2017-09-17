(function (){
	'use strict';
	
	FlightSearch.directive('flightSearch', [
		function(){
			return {
				restrict: 'AE',
				templateUrl: 'scripts/components/flightSearch/partials/flightSearch.html',
				scope: {
					performSearch: '&'
				}, 
				link: function ($scope){
					$scope.model = {
						origin: '',
						destination: '',
						departDate: null,
						returnDate: null,
						passengerCount: 'PASSENGERS',
						passengerDropdown: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
						tabs: [
					   		{ title:'ONE WAY', content:'Dynamic content 1', id:'1' },
					    	{ title:'RETURN', content:'Dynamic content 2', id: '2' }
					  	],
					  	showReturnDate: false
					};
					
					/**
					 * @description This function handles tab click event
					 */
					$scope.select = function(tab){
						// handle return datepicker visibility
						$scope.model.showReturnDate = tab.title === 'RETURN';
					};
					
					/**
					 * @description This function handles search click functionality
					 */
					$scope.searchClickHandler = function(){
						var searchConfig = {
							origin: $scope.model.origin,
							destination: $scope.model.destination,
							departDate: '',
							returnDate: ''
						};
						// call parent controller function
						$scope.performSearch({searchConfig: searchConfig});
					};
				}
			};
		}
	]);
})();