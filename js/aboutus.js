/*jQuery*/
$(function () {
	// redblock show
	$('#visual').addClass('show');
	$('#showbottom').addClass('show');
	
	// moveup
	$('#moveup').hover(function(){
		$(this).toggleClass('on');
	});
	$('#moveup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	$('#showbottom').click(function(){
		$("html, body").animate({ scrollTop: 700 }, "slow");
	});

	// header - mbtn click header_inner modal show
	$('#mbtn').click(function () {
		if ($(this).parent().hasClass('on')) {
			$('.header_inner').removeClass('on');
		} else {
			$('.header_inner').addClass('on');
			$('.gnb>li>a').css({'color':'#fff'})
		}
	});

	// header - sub_menu arrow rotation
	$('.subm>a').click(function () {
		if ($(this).parent().hasClass('on')) {
			$(this).parent().removeClass('on');
		}else {
			$('.subm').removeClass('on');
			$(this).parent().addClass('on');
		}
	});


// CONTENT Parallax Scroll Functions	
var lastScrollTop = 0;
$(window).scroll(function() {
	// header - scroll header_inner color change*
	var win_top = $(window).scrollTop();
	var win_h = $(window).height();

	if (win_top >= 540) {
		$('.header_inner').addClass('dark');
		$('.gnb>li>a').css({'color':'#000'});
	}
	if (win_top < 540) {
		$('.header_inner').removeClass('dark');
		$('.gnb>li>a').css({'color': '#fff'});
	}
	$('.on .gnb>li>a').css({'color':'#fff'});

	// header - scroll show
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		$('header').css({top:'-75px'});
	}else {
		$('header').css({top:'0px'});
	}
	lastScrollTop = st;
	
	// moveup - scroll show
	if(win_top >= 200){
		$('#moveup').css({opacity:'1'});
	}else{
		$('#moveup').css({opacity:'0'});
	}
	
	// CONTENT Parallax Scroll	
	var visual_top = $('#visual').offset().top;
	var about_top = $('#about').offset().top;
	var values_top = $('#values').offset().top;
	var manifesto_top = $('#manifesto').offset().top;
	var media_top = $('#media').offset().top;
	
	if(win_top > visual_top+200){
		$('#about').addClass('on');
	}
	if(win_top > visual_top+1000){
		$('#about .lifevision').addClass('on');
		$('#about .txtbox_product').addClass('on');
		$('#about .txtbox_bestlife').addClass('on');
	}	
	
	if(win_top > values_top-50){
		$('#values').addClass('on');
	}
	if(win_top > media_top-500){
		$('#media').addClass('on');
	}
});

	var bprev = 'img/icon_left_black.png';
	var bnext = 'img/icon_right_black.png';
	var wprev = 'img/icon_left_white.png';
	var wnext = 'img/icon_right_white.png';
	
// header - modal disapper when resize
$(window).on('resize', function () {
	let win = $(this);
	
	if (win.width() >= 1024) {
		if ($('.header_inner').hasClass('on')) {
			$('.header_inner').removeClass('on');
		}
		if ($('.header_inner').hasClass('dark')) {
			$('.gnb>li>a').css({'color':'#000'});
		}
		$('#navWrap .subm > a').attr('href', 'aboutus.html');
		$('#mediaContents .prev>img').attr('src', wprev);
		$('#mediaContents .next>img').attr('src', wnext);
	}

	if (win.width() < 1024) {
		$('#navWrap .subm > a').attr('href', '#');
		$('#mediaContents .prev>img').attr('src', bprev);
		$('#mediaContents .next>img').attr('src', bnext);
	}
});
	
	if ($(window).width() < 1024) {
		$('#navWrap .subm > a').attr('href', '#');
		$('#moveup').css({right:'2%', bottom:'100px'});
	}
	if ($(window).width() >= 1024) {
		$('#mediaContents .prev>img').attr('src', wprev);
		$('#mediaContents .next>img').attr('src', wnext);
	}
	
});




