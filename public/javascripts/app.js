'use strict'

var module = angular.module('app', ['ngRoute', 'app.controllerstodo', 'app.controllersmotion', 'app.filter', 'app.unsafefilter']);

function RouteConfig($routeProvider, $locationProvider) {
    $routeProvider
	.when("/todolist", {
	    templateUrl: "todo.ejs",
	    controller: "TodoCtrl" })
	.when("/clipmotion", {
	    templateUrl: "clip.ejs",
	    controller: "MotionCtrl" })
	.otherwise({ redirectTo: "/todolist" });

    $locationProvider.html5Mode(true);
}

angular.module('app').config(RouteConfig);
