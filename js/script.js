

$('.benefits__box').click(function(){
	if(!$(this).hasClass('active')){
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	}
});



$('.info__box').on('click', function(event){
	$(this).toggleClass('active');
});


var swiper = new Swiper('.swiper-container', {
	loop: true,
	spaceBetween: 50,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});




$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
		
	$('a.open-login').click(function (e) {
		e.preventDefault();
		$('.popup.popup-login').toggleClass('show');
		$('.popup.popup-register.show').removeClass('show');
		$('.bg-menu').toggleClass('show');
	});
	
	
	$('a.open-register').click(function (e) {
		e.preventDefault();
		$('.popup.popup-register').toggleClass('show');
		$('.popup.popup-login.show').removeClass('show');
		$('.bg-menu2').toggleClass('show');
	});
	
	
	
	$('.bg-menu').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	$('.close').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu').removeClass('show');
	});
	
	$('.bg-menu2').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	$('.close').click(function () {
		$('.popup').removeClass('show');
		$('.bg-menu2').removeClass('show');
	});
	





