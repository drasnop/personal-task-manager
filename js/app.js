var app = angular.module('todos',['contenteditable','ngAnimate']);

app.controller('contenteditableController', ['$scope', function($scope) {}]);

app.controller('TodosController', function($scope, focus){
	this.lists = lists;
	this.searchQuery = "";
	this.activeSearch = false;

	this.toggle = function(list){
		list.show= !list.show;
	};

	this.addNewTask = function(event, list) {
		if(event.which==13){
			list.tasks.push({description: list.newTask});
			list.newTask="";	
			initializeItemsBehavior();
		}
	};

	this.newTaskClicked = function(list) {
		list.newTask="";
	};

	this.newTaskBlurred = function(list) {
		if(list.newTask != "")
			list.tasks.push({description: list.newTask});
		list.newTask="Add task...";
	};

	this.toggleTaskCheckbox = function(task, list){
		task.completed= !task.completed;
	};

	this.deleteCompletedTasks = function(list){
		for(var i=0;i<list.tasks.length;i++){
			if(list.tasks[i].completed){
				list.tasks.splice(i,1);
				i--;
			}
		}
	};

	this.searchBoxFocus = function(){
		this.activeSearch=true;
		focus("input");
	};

	this.clearSearch = function(){
		this.activeSearch=false;
		this.searchQuery="";
	};
});

app.directive('focusOn', function() {
	return function(scope, elem, attr) {
		scope.$on('focusOn', function(e, name) {
			if(name === attr.focusOn) {
				elem[0].focus();
			}
		});
	};
});

app.factory('focus', function ($rootScope, $timeout) {
	return function(name) {
		$timeout(function (){
			$rootScope.$broadcast('focusOn', name);
		});
	}
});