var app = angular.module('showDetailPage', []);

var isClickLike = 0;//1:click, 0: none

app.controller('showDetailCtrl', function($scope, $http) {

	$scope.seleting = function(type, id){
		if(type == 'like'){
			$(document).ready(function(){
				if($(".liking").css('background-color') == 'rgb(208, 243, 128)'){
					isClickLike = 0;//remove like 
				}
				else{
					isClickLike = 1;//add like 
				}

		  	});
			var posterId = $("#posterId").text();
			var username = $("#username").val();

			if(posterId == username){
				var req = {
					method: 'POST',
					url: '/detail/update/',
					data: {
						_id			: id,
						like 		: isClickLike,
						type 		: 'update'
					}
				}	
			}
			else{
				var title = $("#title").text();
				var description = $("#description").text();
				var created = $("#created").text();
				var categoryName = $("#categoryName").text();
				var categoryType = $("#categoryType").val();
				var mediaUrl = $("#mediaUrl").val();

				if(isClickLike == 0){
					var req = {
						method: 'POST',
						url: '/detail/update/',
						data: {
							_id			: id,
							like 		: isClickLike,
							type 		: 'insert'
						}
					}
				}
				else{
					var req = {
						method: 'POST',
						url: '/detail/update/',
						data: {
							categoryType : categoryType,
							categoryName : categoryName,
							title 		 : title,
							descriptions : description,
							like 		 : isClickLike,
							userId 	     : username,
							posterId     : posterId,
							mediaUrl     : mediaUrl,
							isView		 : 1,
							created		 : created,
							type 		 : 'insert'
						}
					}	
				}
				
			}
			

			$http(req).success(function(data){
				console.log(data);
				window.location.href = window.location.href;
	     
			})
			.error(function(){
				console.log('error');
			});	
		}
		else{
			$(document).ready(function(){
				if($(".follow").css('background-color') == 'rgb(208, 243, 128)'){
					isClickLike = 0;//remove like 
				}
				else{
					isClickLike = 1;//add like 
				}

		  	});

			var req = {
				method: 'POST',
				url: '/detail/update/',
				data: {
					_id			: id,
					follow 		: isClickLike
				}
			}

			$http(req).success(function(data){
				window.location.href = window.location.href;
	     
			})
			.error(function(){
				console.log('error');
			});			
		}
		
	}

	$scope.goback = function(){
		window.history.back();
	}
	
});
