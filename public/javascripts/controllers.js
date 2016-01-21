'use strict'

function MotionController($scope, $http, $sce){
    var search = 'mans zelmerlow heroes';
    var page = 1;
    var first = 0;

    $scope.id_clip = 'x2r8176';
    $scope.clips = [];

    function getListVideo() {
	var urlsearch = $scope.research || search;
	var url = "https://api.dailymotion.com/videos?fields=duration,title,id,description&sort=relevance&limit=20&page=" + page + '&search=' + urlsearch.split(' ').join('+') + '&callback=JSON_CALLBACK';
	$http({method: "JSONP", url: url})
	    .success(function(json) {
		$scope.clips = [];
		$scope.clips = json.list;
	    })
	    .error(function (data) {
		console.log("Error", data);
	    });
    }

    $scope.getVideo = function() {
	if (first == 0) {
	    getListVideo();
	    first = 1;
	}
	return $sce.trustAsResourceUrl('http://www.dailymotion.com/embed/video/' + $scope.id_clip + '?autoPlay=1');
    }
    
    $scope.launchnewvid = function(id) {
	$scope.id_clip = id;
    }

    $scope.results = function() {
	getListVideo();
    };
}


function ChatController(){
}

function TodoController($scope) {
    $scope.list = [
	{text: 'Test a framework'},
	{text: 'Make some app'},
	{text: 'try something'}
	
    ];

    $scope.getTotalList = function() {
	return $scope.list.length;
    };

    $scope.addElem = function() {
	if ($scope.formtext != "") {
	    $scope.list.push({
		text: $scope.formtext
	    });
	}
    }

    $scope.removeElem = function(index) {
	$scope.list.splice(index, 1);
    }
}

angular.module('app.controllerstodo', []).controller('TodoCtrl', TodoController);
angular.module('app.controllersmotion', []).controller('MotionCtrl', MotionController);
angular.module('app.controllerschat', []).controller('ChatCtrl', ChatController);
