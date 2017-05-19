var myApp=angular.module("myApp", []);
myApp.controller("BookController",function($scope,$http){
	var url="data/bookdata.json";
	$http.get(url).then(function(res){
		$scope.books=res.data;
	});
	$scope.submitReview=function(book){
	//	alert(book.id);
		var star=document.getElementById('star_'+book.id);
		var review=document.getElementById('review_'+book.id);
		var email=document.getElementById('email_'+book.id);
		console.log(star+":"+review+":"+email);

	}
});
