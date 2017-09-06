var app = angular.module('postMediaPage', []);
var count = 0;
var isClickLike = 0;//1:click, 0: none

app.controller('postMediaController', function($scope, $http, $location, fileUpload) {
	
	$scope.cancel = function(){
		window.history.back();
	}

	$scope.seleting = function(){
		count++;
		isClickLike = count % 2;
		if(isClickLike == 0){
			$scope.sel = {'background-color':'none'};
		}
		else{
			$scope.sel = {'background-color':'#D0F380'};
		}
	}

	$scope.posting = function(cateType, username){
		if(cateType == 'video'){
      var cateName = $(".category").val();
      var media ="mov_bbb.mp4";
    }
    else{
      var cateName = $(".category1").val();
      var media ="1.mp3";
    }
    var like = '';   
    if(isClickLike == 1)
      like += username;
		var req = {
			method: 'POST',
			url: '/mypage/postMedia',
			data: {
				title 			  : $scope.video_title,
				descriptions 	: $scope.descriptions,
				categoryType	: cateType,
				categoryName	: cateName,
				post 			    : 1,
				like 			    : isClickLike,
        userId        : username,
				posterId		  : username,
				mediaUrl		  : media,
        isView        : 0,
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

  $(document).ready(function(){

    $("#inputVideo").bind("change", function(e){
      file_name   = $(this).val();
      if(file_name){
          var file = $scope.myFile;
       
          //console.log('file is ' );
          //console.dir(file);
         
         var uploadUrl = "http://localhost/uploadFile.php";
         fileUpload.uploadFileToUrl(file, uploadUrl);
      }
    });
  });

/*	$scope.mediachange = function(){
		var file = $scope.myFile;
       
       console.log('file is ' );
       console.dir(file);
       
       var uploadUrl = "/uploadFile";
       fileUpload.uploadFileToUrl(file, uploadUrl);
    
	}*/
});

app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
       var fd = new FormData();
       fd.append('attach', file);
    
       $http.post(uploadUrl, fd, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': 'video/mp4',
            'Transfer-Encoding': 'chunked'
        }
       })
    
       .success(function(data){
           // send_message();
           // $('#loader_modal').css('display', 'none');   
       })
    
       .error(function(e){         
           console.log(e);
       });
    }
}]);



