var myApp=angular.module("myApp", []);
myApp.controller("BookController",function($scope,$http){
	var url="data/bookdata.json";
	$http.get(url).then(function(res){
		$scope.books=res.data;
	});
});
