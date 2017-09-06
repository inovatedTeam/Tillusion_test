var app = angular.module('myPage', []);

app.controller('myPageController', function($scope, $http, $location) {

	/*$scope.showDetail = function(id){

		var req = {
			method: 'POST',
			url: '/showDetail',
			data: {
				id 	: id
			}
		}

		$http(req).success(function(data){
			console.log(data);
		})
		.error(function(){
			console.log('error');
		});
	}*/
});
