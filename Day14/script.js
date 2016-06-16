var app=angular.module("ChommiesApp",["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/feed.html"
  })
  $routeProvider.when("/personal.html", {
    templateUrl: "templates/personal.html"
  })
})

app.controller("feedCtrl",function($scope, $http, $window) {
	$scope.sendProp = function() {
		console.log("click");

		$http({
			method:"POST",
			url:"http://ixchommies.herokuapp.com/props" + "?token=5c5af1afbfafb8bae320c39bd8580c30",
			data: {
				props: $scope.newProp.text,
				for: $scope.newProp.receiver.id
			},
		}).then(function(response){
			console.log(response.data);
			$scope.newProp = {};
		}).catch(function(response) {
			// $scope.error="unable";
			console.log(response);
		});
	};

	$scope.Refresh=function () {
		$window.location.reload();
	};
	
	$http({
		method:"GET",
		url:"http://ixchommies.herokuapp.com/brus" + "?token=5c5af1afbfafb8bae320c39bd8580c30"
	}).then(function(response) {
		console.log(response);
		$scope.brus=response.data;
	});

	$http({
		method:"GET",
		url:"http://ixchommies.herokuapp.com/props" + "?token=5c5af1afbfafb8bae320c39bd8580c30"
	}).then(function(response) {
		console.log(response);
		$scope.props=response.data;
	});
});

app.controller("personalCtrl",function($scope, $http) { 
	// $http({
	// 	method:"GET",
	// 	url:"http://ixchommies.herokuapp.com/brus" + "?token=5c5af1afbfafb8bae320c39bd8580c30"
	// }).then(function(response) {
	// 	console.log(response);	
	// 	$scope.brus=response.data;

	// });
	$http({
		method:"GET",
		url:"http://ixchommies.herokuapp.com/props/me" + "?token=5c5af1afbfafb8bae320c39bd8580c30"
	}).then(function(response) {
		console.log(response);
		$scope.props=response.data;

	});
});