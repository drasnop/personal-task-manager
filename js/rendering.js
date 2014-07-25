
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
}

$(document).ready(function(){

	$('.sortable').sortable({
		//cancel: '.listName,.hiddenIcon,.newItem,.description,.setDateTime,.trashbin',
		items: '.item',
		helper: "clone",
		appendTo: 'body',
		connectWith: '.sortable'});


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



