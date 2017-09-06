var app = angular.module('indexPage', []);

app.controller('logInController', function($scope, $http, $location) {
	$scope.errMsg = "";
	$scope.submit = function() {
		var req = {
			method: 'POST',
			url: '/signin',
			data: { 
				username: $scope.username,
				password: $scope.password 
			}
		}

		$http(req).success(function(data){
			$scope.errMsg = "";
			if(JSON.parse(data) == 'err1'){
				$scope.errMsg 	= 'error';
				$scope.username = '';
				$scope.password = '';
			}
			else if(JSON.parse(data) == "err2"){
				$scope.errMsg = "User don't exist";
				$scope.username = '';
				$scope.password = '';
			}
			else if(JSON.parse(data) == "err3"){
				$scope.errMsg = "Incorrect password";
				$scope.username = '';
				$scope.password = '';
			}
			else if(JSON.parse(data) ==  "err4"){
				$scope.errMsg = 'Please insert username and password.';
				$scope.username = '';
				$scope.password = '';
			}
			else{
				$scope.errMsg ='';
				window.location = "http://localhost:3000/home";
			}
				
		})
		.error(function(err){
			console.log('error');
		});
  	};
});

app.controller('indexController', function($scope, $http) {
	
});