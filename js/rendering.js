/// Legacy items, these should go eventually
var items=["call back Amy",
	"check emails",
	"laundry",
	"7pm restaurant",
	"Tomorrow pay phone bill",
	"Apply for Fair Pharmacare",
	"Kick-Ass 2",
	"call back Amy",
	"check emails",
	"laundry",
	"7pm restaurant",
	"Tomorrow pay phone bill",
	"Apply for Fair Pharmacare",
	"Kick-Ass 2"
];

var white="255,255,255";
var green="176,229,124";
var lightblue="180,216,231";
var darkblue="130,201,236";
var yellow="255,236,148";
var pink="255,174,174";

function generateItem(item, color){
	return "<div class='item' style='background-color: rgb("+color+")' data-color=["+color+"] data-activated='false'> \
				<div class='checkbox' data-checked='false'>  \
					<div class='square hiddenIcon'></div><div class='checkmark'>✔</div>  \
				</div>	 \
				<div class='description contenteditable' contenteditable>"+item+"</div>  \
				<div class='setDateTime'>    \
					<div class='contenteditable dateTimeField' contenteditable></div>    \
					<img class='hiddenIcon opacityButton' src='img/calendar16.png' title='Set date/time'>  \
				</div>    \
				<img class='pin hiddenIcon opacityButton' src='img/pin16.png' data-pinned='false' data-dialogueExpanded='false' title='Pin item to main list'>    \
			</div>";
}


function generateEmptyItem(color){
	return generateItem("",color);
}

// this can be either an item or the newItem button
function insertItem(after,_this){
	var color=_this.parent('.todolist').data('color');
	var newItem;

	if(after){
		_this.after(generateEmptyItem(color));
		newItem=_this.next();
	}else{
		_this.before(generateEmptyItem(color));
		newItem=_this.prev()
	}
	newItem.children('.description').find('br').remove();  //has no effect!
	newItem.children('.description').focus();
	
	newItem.data('activated',false);
	initializeItemsBehavior();
}

function countNumberOfItemsChecked(_todolist){
	return _todolist.children('.item').children('.checkbox').filter(function(){
		return $(this).data('checked') == true;
	}).size();
}

function initializeItemsBehavior(){

	var item=$('.item').filter(function() { 
  		return $(this).data("activated") == false; 
	});
	item.data('activated',true);

	// toggle items icons
	item.mouseenter(function(){
		$(this).find('.hiddenIcon').css('visibility','visible');
	});
	item.mouseleave(function(){
		$(this).find('.hiddenIcon').css('visibility','hidden');
	});

	// keyboard events
	item.children('.description').keydown(function(event){
		// up
		if(event.which==38){
			$(this).parent('.item').prev().children('.description').focus();
		}
		// down
		if(event.which==40){
			$(this).parent('.item').next().children('.description').focus();
		}
	});
	item.children('.description').keypress(function(event){
			if(event.which==13){
				insertItem(true,$(this).parent('.item'));   // Don't put "item" here!!
			}
	});

	// cross items out
	item.children('.checkbox').click(function(){
		var color=$(this).parent('.item').data('color');
		var darkerColor=changeColor(color,-60);

		if(!$(this).data('checked'))
		{
			$(this).data('checked',true);

			// item, text and checkbox appearance
			$(this).parent('.item').css('color','rgb('+colorToString(darkerColor)+')');
			$(this).siblings('.description').css('text-decoration','line-through');
			
			$(this).children('.square').css('display','none');
			$(this).children('.checkmark').css('display','block');
			$(this).children('.checkmark').css('visibility','visible');
			
			// trashbin
			var count=countNumberOfItemsChecked($(this).parents('.todolist'));
			$(this).parents('.todolist').children('.trashbin').css('visibility','visible').attr('title','Delete '+count+' items');
		}
		else{
			$(this).data('checked',false);

			// item, text and checkbox appearance
			$(this).parent('.item').css('color','#191919');
			$(this).siblings('.description').css('text-decoration','none');
			
			$(this).children('.square').css('display','inline-block');
			$(this).children('.checkmark').css('visibility','visible');
			$(this).children('.checkmark').css('display','none');
			
			// trashbin
			if(countNumberOfItemsChecked($(this).parents('.todolist')) == 0){
				$(this).parents('.todolist').children('.trashbin').css('visibility','hidden');
			}
		}
	});

	// pin items
	item.children('.pin').click(function(){
		if(!$(this).data('pinned'))
		{
			$(this).data('pinned',true);

			$(this).attr('src','img/pinned16.png');
			$(this).attr('title',"Unpin item from main list");
			$(this).removeClass('hiddenIcon');
		}
		else
		{
			$(this).data('pinned',false);

			$(this).attr('src','img/pin16.png');
			$(this).attr('title',"Pin item to main list");
			$(this).addClass('hiddenIcon');
		}
	});

	// Set time/date
	var field;
	item.children('.setDateTime').click(function(){
		field=$(this);
		$(this).children('.hiddenIcon').hide();
		$(this).children('.contenteditable').show();
		$(this).children('.contenteditable').focus();
	});
}


function populateList(id){
	var list=$("#"+id);
	var color=list.data('color');
	list.css("background-color","rgb("+color+")");
	for(var i=0; i<items.length; i++){
		list.append(generateItem(items[i],color));
	}
}

function toggleList(i,checked){
	if(checked)
		$("#list"+i).show("fast");
	else
		$("#list"+i).hide("fast");
}

function initializeToggleLists(){
	for(var i=1; i<=4; i++){
		$("#list"+i).toggle(!$("#toggle_list"+i).checked);
		$("#toggle_list"+i).click(
			(function(j){
				return function(){
					toggleList(j,this.checked);
				}
			})(i));
	}
}

$(document).ready(function(){
	populateList("list1");
	populateList("list2");
	populateList("list3");
	populateList("list4");

	$('.todolist').append("<div class='newItem'>Add item...</div>");
	$('.todolist').append("<img class='trashbin opacityButton' src='img/trashbin.png' title='Delete checked items'>");

	$('.sortable').sortable({
		//cancel: '.listName,.hiddenIcon,.newItem,.description,.setDateTime,.trashbin',
		items: '.item',
		helper: "clone",
		appendTo: 'body',
		connectWith: '.sortable'});
	var CLheight=150;
	var CLIWheight=121;

	$('.todolist').mouseenter(function(){
		$(this).children('.hoverable').css('visibility','visible');
	});
	$('.todolist').mouseleave(function(){
		$(this).find('.dialogueElement').css('visibility','hidden');
	});
	$('.todolist .trashbin').click(function(){
		// foldUp the checked items and remove them
		$(this).siblings('.item').filter(function() { 
  			return $(this).children('.checkbox').data("checked") == true; 
		}).css('height',$(this).height()).css('min-height',0).slideUp(400, function(){
			$(this).remove();
		});
	});

	// Initialize newItems at the bottom
	$('.newItem').click(function(){
		insertItem(false,$(this));
	});

	$('#searchbox').click(function(){
		$(this).html("");
	});

	// Show/hide drop shadow from the header
	$(window).scroll(function(){
		console.log($("body").scrollTop());
		if($("body").scrollTop()>0)
			$("#header").css("box-shadow","-10px -7px 20px 0px #444");
		else
			$("#header").css("box-shadow","none");
	});

	// Initialize items
	initializeItemsBehavior();

	// Initialize show/hide lists
	initializeToggleLists();
});



