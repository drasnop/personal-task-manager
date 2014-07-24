/*
 * Make RGB-Colors lighter / darker
 * @param array RGB Colors
 * @param number Amount
 */
function changeColor(color,amount){
	res=new Array();
	for(var i=0;i<3;i++){
		res[i]=Math.max(0,Math.min(255,color[i]+amount));
	}
	return res;
}

function colorToString(array){
	return array[0]+','+array[1]+','+array[2];
}

(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));