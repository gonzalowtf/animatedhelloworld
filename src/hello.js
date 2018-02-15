(function(){

	var app = angular.module('module1',[]);

app.controller("MainController",['$scope','$http',function($scope,$http,toastr){
	$scope.word = "";
	$scope.selected = "";
	$scope.getStatus = function(){
		if($scope.word != "" && $scope.selected == "bounce"){
		   return "animated bounce";
		}
		if($scope.word != "" && $scope.selected == "flash"){
			return "animated flash";
		}
		if($scope.word != "" && $scope.selected == "fadeOut"){
			 return "animated fadeOut";
		}
		if($scope.word != "" && $scope.selected == "shake"){
		 return "animated shake";
		}
		if($scope.word != "" && $scope.selected == "swing"){
			return "animated swing";
		}
		if($scope.word != "" && $scope.selected == "tada"){
			return "animated tada";
		}
		if($scope.word != "" && $scope.selected == "hinge"){
			return "animated hinge";
		}
			
	}

}]);
	

})();