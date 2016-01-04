
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


//------------------------------------to top arrow color changing---
 var backToTopArrow = function(){
    $('.arrow > i').css({"color": "#eee", "transition" : "0.7s"});
   	setTimeout(function(){
   	    $('.arrow > i').css({"color":"#666", "transition" : "0.7s"});
    },1000);

};
setInterval(backToTopArrow,3000);

//------------------------------------smoothly scroll to top---
$('.arrow').click(function(event){
	event.preventDefault();
	$("html, body").animate({ scrollTop: "0px" }, 800);
});

//-------------------------------------------------------------
var aboutParagraphPosition = $('#about').offset().top;
console.log(aboutParagraphPosition);
$("#learn-more-btn").click(function(){
	$('body').animate({ scrollTop: aboutParagraphPosition }, 'normal');
});

}); //-- end doc ready