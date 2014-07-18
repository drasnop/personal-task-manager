var app = angular.module('todos',['contenteditable']);

app.controller('contenteditableController', ['$scope', function($scope) {}]);

app.controller('TodosController', ['$rootScope', function($rootScope){
	this.lists = lists;
	this.searchBoxText = "Search...";
	//this.searchQuery = "";
	$rootScope.search=false;

	this.toggle = function(list){
		list.show= !list.show;
	};

	this.addNewTask = function(event, list) {
		if(event.which==13){
			list.tasks.push({description: list.newTask});
			list.newTask="";	
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
		if(task.completed)
			list.taskCompleted++;
		else
			list.taskCompleted--;
	};

	this.deleteCompletedTasks = function(list){
		for(var i=0;i<list.tasks.length;i++){
			if(list.tasks[i].completed){
				list.tasks.splice(i,1);
				i--;
				list.taskCompleted--;
			}
		}
	}

	this.searchBoxFocus = function(){
		$rootScope.search=true;
		this.searchBoxText="";
	}

	this.searchBoxBlur = function(){
		$rootScope.search=false;
		this.searchBoxText="Search...";
	}
}]);

app.filter('textfilter',['$rootScope', function ($rootScope) {
	return function(items, searchString) {
		if(!$rootScope.search)
			return items;

		var filtered = [];            
		searchString = searchString.toLowerCase();
		angular.forEach(items, function(item) {
			if( item.description.toLowerCase().indexOf(searchString) >= 0 ) filtered.push(item);
		});
		return filtered;
	};
}]);