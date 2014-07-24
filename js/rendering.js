
function initializeItemsBehavior(){

	var item=$('.item').filter(function() { 
  		return $(this).data("activated") == false; 
	});
	item.data('activated',true);

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



