
var module = angular.module('app', ['ngRoute', 'app.controllerstodo', 'app.controllersmotion', 'app.controllerschat']);

function RouteConfig($routeProvider, $locationProvider) {
    $routeProvider
	.when("/todolist", {
	    templateUrl: "todo.ejs",
	    controller: "TodoCtrl" })
	.when("/clipmotion", {
	    templateUrl: "clip.ejs",
	    controller: "MotionCtrl" })
	.when("/chat_socket", {
	    templateUrl: "chat.ejs",
	    controller: "ChatCtrl" })
	.otherwise({ redirectTo: "/todolist" });

    $locationProvider.html5Mode(true);
}

angular.module('app').config(RouteConfig);
