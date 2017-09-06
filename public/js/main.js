var app = angular.module('App', []);

app.controller('indexController', function($scope, $http) {

	$scope.store = function(){
        var req = {
			method: 'POST',
			url: '/api/places/add',
			data: {
				locationName: $scope.locationName,
				description: $scope.description,
				longitude: $scope.lot,
				latitude: $scope.lat
			}
		}

		$http(req).success(function(data){
            $scope.locationName = "";
            $scope.description = "";
            $scope.longitude = "";
            $scope.latitude = "";
            if(JSON.parse(data) == 'success')
            {
                // loading locations
                $http.get("/api/places")
                .then(function(response) {
                    var data = response.data;
                    $(".places").html();
                    var html = "";
                    data.forEach(function(r) {
                        html += "<tr><td>"+r.locationName+"</td>";
                        html += "<td>"+ r.description +"</td>";
                        html += "<td>"+ r.longitude +"</td>";
                        html += "<td>"+ r.latitude +"</td></tr>";    
                    }, this);
                    
                    $(".places").html(html);
                });
                console.log(234);
            }
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
			if($(this).attd("checked")){
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

