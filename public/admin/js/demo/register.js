var app = angular.module('register', []);

app.controller('registerCtrl', function($scope, $http) {
	$scope.submit = function() {
		$scope.errMsg = "";
		if($scope.password == $scope.c_password){
			var req = {
				method: 'POST',
				url: '/register',
				data: {
					firstname 	: $scope.firstname,
					lastname 	: $scope.lastname,
					email 		: $scope.email,
					username	: $scope.username,
					password 	: $scope.password
				}
			}

			$http(req).success(function(data){
				if(JSON.parse(data) == 'msg1'){
					$scope.errMsg ='';
					window.location = "http://localhost:3000/admin";
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

