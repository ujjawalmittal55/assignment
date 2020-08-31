(function () {
	var app = angular.module('app',[]);
	app.controller('controller',controller);
	controller.$inject=['$scope','$filter'];
	function controller($scope,$filter) {
		$scope.name ="";
		$scope.display="";
		$scope.image ='3';
		$scope.Change =function(){
			var y1=$scope.name;
			var x =y1.split(',');
			var y;
			if(y1==""){y="Please enter data first" }
				else if(x.length>3){y="Too much!" }
						else if(x.length>0 && x.length<=3) {y= "Enjoy!"}
								$scope.display=y;
								console.log(x.length);
		};
	}
}
	)();