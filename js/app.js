var app = angular.module('todos',['contenteditable']);

app.controller('contenteditableController', ['$scope', function($scope) {}]);

app.controller('TodosController', function(){
	this.lists = lists;
	this.searchfor = "";

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
});

app.filter('textfilter',[ function () {
	return function(items, searchString) {
		var filtered = [];            
		searchString = searchString.toLowerCase();
		angular.forEach(items, function(item) {
			if( item.description.toLowerCase().indexOf(searchString) >= 0 ) filtered.push(item);
		});
		return filtered;
	};
}]);