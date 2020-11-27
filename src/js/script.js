// burger

$(document).ready(function () {
	$('.header__burger, .menu').click(function () {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// slick-slider

$(document).ready(function () {
	$('.slider').slick({
		centerMode    : true,
		centerPadding : '0px',
		slidesToShow  : 2,
		arrows        : true,
		responsive    : [
			{
				breakpoint : 1350,
				settings   : {
					arrows        : true,
					centerMode    : true,
					centerPadding : '10px',
					slidesToShow  : 1.1,
				},
			},
			{
				breakpoint : 769,
				settings   : {
					arrows        : true,
					centerMode    : true,
					centerPadding : '10px',
					slidesToShow  : 1.1,
				},
			},
			{
				breakpoint : 480,
				settings   : {
					arrows        : false,
					centerMode    : true,
					centerPadding : '40px',
					slidesToShow  : 1,
				},
			},
		],
	});
});
