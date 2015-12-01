
$(function(){
	//--------------navbar links icons
	$('.page').mouseover(function(){
		$(this).find('.page-icon').show().animate({ 
			'opacity': '1'
		}, 600);
	}).mouseleave(function(){
		$(this).find('.page-icon').css('opacity','0').hide();
 });
	//-------------------------------

}); //-- end doc ready