/*-------------------------------------------
Ready
-------------------------------------------*/
$(document).ready(function() {
	$(window).on("load",function(){
		/*-------------------------------------------
		Preload
		-------------------------------------------*/
		$.preload(
			'/images/aja_heading.png?v=20171226',
			'/images/aja_heading@2x.png?v=20171226',
			'/images/header-slogan-img.png?v=20171226',
			'/images/header-slogan-img-w160.png?v=20171226',
			'/images/header-slogan-img-w160@2x.png?v=20171226',
			'/images/logo-aja.png?v=20171226',
			'/images/logo-aja@2x.png?v=20171226',
			'/images/logo-logo.png?v=20171226',
			'/images/logo-logo@2x.png?v=20171226',
			'/images/logo-title.png?v=20171226',
			'/images/logo-title@2x.png?v=20171226'
		)
	});
	/*-------------------------------------------
	Resize & Reload
	-------------------------------------------*/
	var cachedWidth = $(window).width();
	var cachedHeight = $(window).height();
	$(window).resize(function(){
		var newWidth = $(window).width();
			if(newWidth !== cachedWidth){
			//location.reload();
			cachedWidth = newWidth;
		}
	});
	/*-------------------------------------------
	RWD: Toggle Menu
	-------------------------------------------*/
	$('.toggleMenu').click(function(){
		$(this).toggleClass('active');
		$('#menuContainer, #menu, #icon-menu, .menuMask').toggleClass('active');
		$('html').toggleClass('menuOpened');
		$('.toggleSearch, .searchBarRWD').removeClass('active');
	});
	$('.menuMask').click(function(){
		$(this).removeClass('active');
		$('#menuContainer, .toggleMenu, #menu, #icon-menu').removeClass('active');
		$('html').removeClass('menuOpened');
	});
	$('.toggleSearch').click(function(){
		$(this).toggleClass('active');
		$('.searchBarRWD').toggleClass('active');
	});
	/*-------------------------------------------
	RWD: Nav Sub
	-------------------------------------------*/
	$('#menu > li > a').click(function(){
		$(this).toggleClass('active');
		$(this).next(".sub").toggleClass('active');
	});
	/*-------------------------------------------
	ScrollUp
	-------------------------------------------*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollUp').fadeIn();
		} else {
			$('.scrollUp').fadeOut();
		}
	}); 
	$('.scrollUp').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
	/*-------------------------------------------
	Upgrade New Browser
	-------------------------------------------*/
	$('#upgradeNewBrowser .btnClose a').click(function(){
		$('#upgradeNewBrowser').hide();
	});
	/*-------------------------------------------
	PDF +Blank
	-------------------------------------------*/
	$('a[href*=".pdf"]').attr('target', '_blank');
	$('a[href*=".jpg"]').attr('target', '_blank');
	$('a[href*=".jpeg"]').attr('target', '_blank');
	$('a[href*=".png"]').attr('target', '_blank');
	$('a[href*=".gif"]').attr('target', '_blank');
	$('a[href*=".bmp"]').attr('target', '_blank');
	$('a[href*=".tif"]').attr('target', '_blank');
});