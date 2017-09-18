(function (){
	'use strict';
	
	var mainController,
		flightSearchService,
		flightSearchConst,
		mainControllerScope,
		$rootScope;
	
	describe('mainController', function (){
		beforeEach(function (){
			inject(function($injector){
				//$rootScope = $injector.get('$rootScope');
				//mainControllerScope = $rootScope.$new();
				mainController = $injector.get('$controller')('mainController', {
					$scope: {}
				});
			});
		});
	    
		describe('controller definition', function(){
			it('should be define', function (){
				expect(mainController).toBeDefined();
			});
		});
	});
})();