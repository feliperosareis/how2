$(document).ready(function() {
	
	// Implementa o carrossel.
	$('.jobs').owlCarousel({
		loop: true,
		autoPlay: true,
		margin: 30,
		dots: true,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			}
		}
	});


});

// Rola a página até o topo.
$('.go-top').click(function(){
	$("html, body").animate({scrollTop: 0}, 1000);
});

// Adiciona/remove a classe que deixa o menu fixo.
$(document).on('scroll', function(){
	if ( $(window).scrollTop() > 10 )
	{
		$('.navbar').addClass('fixed');
	}
	else
	{
		$('.navbar').removeClass('fixed');
	}

	if ( $(window).scrollTop() > 50 )
	{
		$('.go-top').show();
	}
	else
	{
		$('.go-top').hide();
	}
});


// Rola a página conforme o menu clicado.
$( "a.nav-link" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
});