var app = angular.module('todos',['contenteditable']);

app.controller('contenteditableController', ['$scope', function($scope) {}]);

app.controller('TodosController', function(){
	this.lists = lists;

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

var colors = {
	white:"255,255,255",
	green:"176,229,124",
	lightblue:"180,216,231",
	darkblue:"130,201,236",
	yellow:"255,236,148",
	pink:"255,174,174"
};

var lists = [
	{
		name: "Inbox",
		color: colors.darkblue,
		show: true,
		newTask: "Add task...",
		taskCompleted:0,
		tasks: [
			{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			},{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			}]
	},
	{
		name: "Groceries",
		color: colors.pink,
		show: true,
		newTask: "Add task...",
		taskCompleted:0,
		tasks: [
			{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			},{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			}]
	},
	{
		name: "Long term",
		color: colors.yellow,
		show: true,
		newTask: "Add task...",
		taskCompleted:0,
		tasks: [
			{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			},{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			}]
	},
	{
		name: "Academic",
		color: colors.green,
		show: true,
		newTask: "Add task...",
		taskCompleted:0,
		tasks: [
			{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			},{
				description: "call back Amy",
				completed: false
			},{
				description: "check emails",
				completed: false
			},{
				description: "laundry",
				completed: false
			},{
				description: "7pm restaurant",
				completed: false
			},{
				description: "Tomorrow pay phone bill",
				completed: false
			},{
				description: "Apply for Fair Pharmacare",
				completed: false
			},{
				description: "Kick-Ass 2",
				completed: false
			}]
	},
];