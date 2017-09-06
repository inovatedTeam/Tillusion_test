var app = angular.module('faqApp', []);

app.controller('faqCtrl', function($scope, $http) {
	$(":checkbox").bind('click',function(){
        if(!$(this).attr('checked'))    
            $(this).attr('checked', 'checked');
        else 
            $(this).removeAttr('checked');
    });

	$scope.store = function(){
		

		var req = {
			method: 'POST',
			url: '/addFaq',
			data: {
				question: $scope.question,
				answer: $scope.answer
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
	
	$scope.deleting = function(){
		var arr_ids = new Array();

		$("tbody input").each(function(){
			if($(this).attr("checked")){
				arr_ids.push($(this).val());
			}
        });

        var req = {
			method: 'POST',
			url: '/delFaqs',
			data: {
				arr_ids: arr_ids
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

