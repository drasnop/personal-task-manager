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

	// cross items out
/*	item.children('.checkbox').click(function(){
		var color=$(this).parent('.item').data('color');
		var darkerColor=changeColor(color,-60);

		if(!$(this).data('checked'))
		{
			$(this).data('checked',true);

			// item, text and checkbox appearance
			$(this).parent('.item').css('color','rgb('+colorToString(darkerColor)+')');
			$(this).siblings('.description').css('text-decoration','line-through');
		}
		else{
			$(this).data('checked',false);

			// item, text and checkbox appearance
			$(this).parent('.item').css('color','#191919');
			$(this).siblings('.description').css('text-decoration','none');
		}
	});*/

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

$(document).ready(function(){


	$('.sortable').sortable({
		//cancel: '.listName,.hiddenIcon,.newItem,.description,.setDateTime,.trashbin',
		items: '.item',
		helper: "clone",
		appendTo: 'body',
		connectWith: '.sortable'});

/*	$('.todolist .trashbin').click(function(){
		// foldUp the checked items and remove them
		$(this).siblings('.item').filter(function() { 
  			return $(this).children('.checkbox').data("checked") == true; 


		}).css('height',$(this).height()).css('min-height',0).slideUp(400, function(){
		

			$(this).remove();
		});
	});*/

	$('#searchbox').click(function(){
		$(this).html("");
	});

	// Show/hide drop shadow from the header
	$(window).scroll(function(){
		if($("body").scrollTop()>0)
			$("#header").css("box-shadow","-10px -7px 20px 0px #444");
		else
			$("#header").css("box-shadow","none");
	});

	// Initialize items
	initializeItemsBehavior();
});



