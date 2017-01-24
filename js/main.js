
$(document).ready(function(){
	$('#SiteMainMenu').slicknav({
		'label':'<div class="mobyMenu fa fa-bars"></div>',
		'prependTo':'#mobmenuBox'
	});
});


$('.usermenu').click(function() {
	$('.usermenuDroped').slideToggle('slow');
});


$('.mainclick').click(function() {
	
});

$('a.mainclick').bind('click', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: ($($anchor.attr('href')).offset().top - 100)
	}, 1250);
	event.preventDefault();
});


window.onscroll = function() {scrollMenu()};
function scrollMenu(){
	var mmenu = $('.siteheader').offset();
	if(mmenu.top > 100){
		$('.siteheader').addClass('scrolled');
	}else{
		$('.siteheader').removeClass('scrolled');
	}
}


