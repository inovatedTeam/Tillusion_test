var app = angular.module('contactApp', []);

app.controller('contactCtrl', function($scope, $http, $location) {
	$scope.send = function(){

		var req = {
			method: 'POST',
			url: '/contact/sendMsg',
			data: {
				message : $scope.messages,
				email: $scope.myemail,
				username: $scope.fullname
			}
		}

		$http(req).success(function(data){
			if(JSON.parse(data) == 'ok')
				window.location.href = window.location.href;
			else
				console.log(data);
		})
		.error(function(){
			console.log('error');
		});
	}
});
