var app = angular.module('signUpPage', []);

app.controller('signUpController', function($scope, $http) {
	$scope.submit = function() {
		$scope.errMsg = "";
		if($scope.password == $scope.confirm_password){
			var req = {
				method: 'POST',
				url: '/signup',
				data: {
					firstName 	: $scope.first_name,
					lastName 	: $scope.last_name,
					email 		: $scope.email,
					username	: $scope.username,
					password 	: $scope.password
				}
			}

			$http(req).success(function(data){
				if(JSON.parse(data) == 'msg1'){
					$scope.errMsg ='';
					window.location = "http://localhost:3000";
				}
				else{
					$scope.errMsg = JSON.parse(data);
				}
			})
			.error(function(){
				console.log('error');
			});	
		}
		else
			$scope.errMsg = 'incorrect password';
		
  	};	
});
app.controller('logInController', function($scope, $http) {
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
				window.location = "http://localhost:3000";
			}
				
		})
		.error(function(err){
			console.log('error');
		});
  	};
});
