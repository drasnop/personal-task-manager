var app = angular.module('todos',[])

app.controller('TodosController', function(){
	this.lists = lists;
});

var lists = [
	{
		name: "List1",
		color: "130,201,236",
		show: true,
		items: [
			{
				description:"check email",
			},
			{
				description:"do laundry",
			}]
	},
	{
		name: "List2",
		color: "255,174,174",
		show: true,
		items: [
			{
				description:"check email",
			},
			{
				description:"do laundry",
			}]
	},
];