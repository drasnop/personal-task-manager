var colors = {
	white:[255,255,255],
	green:[176,229,124],
	lightblue:[180,216,231],
	darkblue:[130,201,236],
	yellow:[255,236,148],
	pink:[255,174,174]
};
var darkerColorOffset=-60;

/* Object prototype for a todolist */
var Todolist = function(name,color,tasks){
	this.name=name;
	this.color=color;
	
	this.show=true;
	this.newTask="Add task...";
	
	this.searchResults=[];
	this.tasks=tasks;

	/* Used to display a task that has been crossed-out */
	this.darkerColor=function(){
		var darker=[];
		for(var i=0;i<color.length;i++){
			darker[i]=Math.max(0,Math.min(255,color[i]+darkerColorOffset));
		}
		return darker;
	};

	this.darkerColorAsString=function(){
		return (this.darkerColor()).join(',');
	};

	this.colorAsString=function () {
		return color.join(',');
	};

	this.numCompletedTasks=function () {
		var completed=0;
		for(var i in this.tasks){
			if(this.tasks[i].completed)
				completed++;
		}
		return completed;
	}
};

/* Object prototype for a task */
var Task=function(description){
	this.description=description;
	this.completed=false;
	this.hovered=false;
	this.pinned=false;
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

var tasks2=clone(tasks1);
var tasks3=clone(tasks1);
var tasks4=clone(tasks1);


var lists = [];
lists.push(
	new Todolist("Inbox",colors.darkblue,tasks1),
	new Todolist("Groceries",colors.pink,tasks2),
	new Todolist("Long term",colors.yellow,tasks3),
	new Todolist("Academic",colors.green,tasks4)
	);