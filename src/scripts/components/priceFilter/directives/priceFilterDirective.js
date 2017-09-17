(function (){
	'use strict';
	
	FlightSearch.directive('priceFilter', [
		function(){
			return {
				restrict: 'AE',
				templateUrl: 'scripts/components/priceFilter/partials/priceFilter.html',
				scope: {
					sliderUpdated: '&'
				}, 
				link: function ($scope){
					// price slider config
					$scope.slider = {	
					  	minValue: 1000,
					  	maxValue: 10000,
					  	options: {
					    	floor: 1000,
					    	ceil: 10000,
					    	step: 1000,
					    	showTicks: true,
					    	onEnd: function(sliderId, modelValue, highValue, pointerType){
					    		var priceRange = {
						  			min_price: modelValue,
						  			max_price: highValue,
						  		};
						  		// call parent controller function to filter flight results
					    		$scope.sliderUpdated({priceRange: priceRange});
						  	}
					  	}
					};
				}
			};
		}
	]);
})();