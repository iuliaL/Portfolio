
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
	$('#nav-btn').click(function(){
		$('.page-icon').show().animate({ 
			'opacity': '1',
			'margin-right': '15'
		}, 600);
	})

}); //-- end doc ready