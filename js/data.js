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
	this.taskCompleted=0;
	
	this.searchResults=[];
	this.tasks=tasks;

	/* Used to display a task that has been crossed-out */
	this.darkerColor=function(){
		darker=[];
		for(var i=0;i<3;i++){
			darker[i]=Math.max(0,Math.min(255,color[i]+darkerColorOffset));
		}
		return darker;
	};

	this.darkerColorAsString=function(){
		return darkColor.join(',');
	};

	this.colorAsString=function () {
		return color.join(',');
	};
};

/* Object prototype for a task */
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

var tasks2=clone(tasks1);
var tasks3=copyTasksArray(tasks1);
var tasks4=copyTasksArray(tasks1);


var lists = [];
lists.push(
	new Todolist("Inbox",colors.darkblue,tasks1),
	new Todolist("Groceries",colors.pink,tasks2),
	new Todolist("Long term",colors.yellow,tasks3),
	new Todolist("Academic",colors.green,tasks4)
	);


/* Utility function required for deep copy */
function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}