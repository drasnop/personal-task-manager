var defaultSearchBoxText="Search...";

var colors = {
	white:"255,255,255",
	green:"176,229,124",
	lightblue:"180,216,231",
	darkblue:"130,201,236",
	yellow:"255,236,148",
	pink:"255,174,174"
};

var Todolist = function(name,color,tasks){
	this.name=name;
	this.color=color;
	
	this.show=true;
	this.newTask="Add task...";
	this.taskCompleted=0;
	
	this.searchResults=[];
	this.tasks=tasks;

	this.darkcolor=function(){
		return;
	}
};

var Task=function(description){
	this.description=description;
	this.completed=false;
};

var tasks1 = [];
tasks1.push(
	new Task("call back Amy"),
	new Task("check emails"),
	new Task("laundry"),
	new Task("7pm restaurant"),
	new Task("Tomorrow pay phone bill"),
	new Task("Apply for Fair Pharmacare"),
	new Task("Kick-Ass 2"),
	new Task("call back Amy"),
	new Task("check emails"),
	new Task("laundry"),
	new Task("7pm restaurant"),
	new Task("Tomorrow pay phone bill"),
	new Task("Apply for Fair Pharmacare"),
	new Task("Kick-Ass 2")
	);

function copyTasksArray (a) {
    var b=[];
    for(var i in a){
        b.push(new Task(a[i].description));
    }
    return b;
}

var tasks2=copyTasksArray(tasks1);
var tasks3=copyTasksArray(tasks1);
var tasks4=copyTasksArray(tasks1);

var lists = [];
lists.push(
	new Todolist("Inbox",colors.darkblue,tasks1),
	new Todolist("Groceries",colors.pink,tasks2),
	new Todolist("Long term",colors.yellow,tasks3),
	new Todolist("Academic",colors.green,tasks4)
	);


/*
[
{
	name: "Inbox",
	color: colors.darkblue,
	show: true,
	searchResults: [],
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
	searchResults: [],
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
	searchResults: [],
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
	searchResults: [],
	newTask: "Add task...",
	taskCompleted:0,
	tasks: [
	{
		description: "call back Antoine",
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
];*/