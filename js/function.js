$(function () {

	
	$('nav li').hover(function () {
		$('nav li').removeClass('selected');
		$(this).addClass('selected');
	})


	$('nav.mobile h3').click(function(){
		$('nav.mobile ul').slideToggle();
	})

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});
		return false;
	});

})