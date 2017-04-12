$(document).ready(function(){

	$('.panel-head').click(function(){
		var elm_parent=$(this).parent(".panel");
		elm_parent.addClass("active");
		elm_parent.prevAll().removeClass("active");
		elm_parent.nextAll().removeClass("active");
	});
});