/*jQuery*/
$(function () {
	$('#motion').addClass('show');
	
	// logo motion
	setTimeout(function() {
        $(".logo_img").addClass('visible');
    }, 1400);
	
	// moveup
	$('#moveup').hover(function(){
		$(this).toggleClass('on');
	});
	$('#moveup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	if ($(window).width() < 1024) {
		$('#navWrap .subm > a').attr('href', '#');
		$('#moveup').css({
			right:'2%',
			bottom:'100px'
		});
	}

	// header - mbtn click header_inner modal show
	$('#mbtn').click(function () {
		if ($(this).parent().hasClass('on')) {
			$('.header_inner').removeClass('on');
		} else {
			$('.header_inner').addClass('on');
			$('.gnb>li>a').css({
				'color': '#fff'
			})
		}
	});

	// header - sub_menu arrow rotation
	$('.subm>a').click(function () {
		if ($(this).parent().hasClass('on')) {
			$(this).parent().removeClass('on');
		} else {
			$('.subm').removeClass('on');
			$(this).parent().addClass('on');
		}
	});

	// visual - hover bg image change
	$('.men>a').hover(function () {
		$('.women').removeClass('on')
		$('.men').addClass('on')
		$('.visual_wrap').addClass('on')
	});
	$('.women>a').hover(function () {
		$('.men').removeClass('on')
		$('.women').addClass('on')
		$('.visual_wrap').removeClass('on')
	});

	// activity text change
	$('#activity>ul>li>a').mouseenter(function(){
		$('#activity>ul>li>a').css({
			'color': '#e5e5e5',
			transition: 'color 0.5s ease'
		});
		$(this).css({
			'color': '#d31334',
			transition: 'color 0.5s ease'
		});
	});
	$('#activity>ul>li>a').mouseleave(function(){
		$('#activity>ul>li>a').css({
			'color': '#383634',
			transition: 'color 0.5s ease'
		});
	});
});


// CONTENT Parallax Scroll Functions	

var lastScrollTop = 0;
$(window).scroll(function () {

	// header - scroll header_inner color change*
	var win_top = $(window).scrollTop();
	var win_h = $(window).height();
	var activ_top = $('#activity').offset().top;

	if (win_top >= activ_top) {
		$('.header_inner').addClass('dark');
		$('.gnb>li>a').css({
			'color': '#000'
		});
	}
	if (win_top < activ_top) {
		$('.header_inner').removeClass('dark');
		$('.gnb>li>a').css({
			'color': '#fff'
		});
	}
	$('.on .gnb>li>a').css({
		'color': '#fff'
	});

	// header - scroll show
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		$('header').css({
		top:'-75px'
	});
	} else {
		$('header').css({
		top:'0px'
	});
	}
	lastScrollTop = st;
	
	// moveup - scroll show
	if(win_top >= 200){
		$('#moveup').css({
			opacity:'1'
		});
	}else{
		$('#moveup').css({
			opacity:'0'
		});
	}
	
	// CONTENT Parallax Scroll	
	var aboutus_top = $('#aboutus').offset().top;
	var mod_top = $('#mothersday').offset().top;
	var sof_top = $('#sof').offset().top;
	var mirror_top = $('#mirror').offset().top;
	var comm_top = $('#community').offset().top;
	if(win_top > activ_top-200){
		$('#aboutus').addClass('on');
	}
	if(win_top > aboutus_top+300){
		$('#mothersday').addClass('on');
	}
	if(win_top > mod_top){
		$('#sof').addClass('on');
	}
	if(win_top > sof_top+400){
		$('#mirror').addClass('on');
	}
	if(win_top > mirror_top+200){
		$('#community').addClass('on');
	}

});



// header - modal disapper when resize
$(window).on('resize', function () {
	let win = $(this);
	if (win.width() >= 1024) {
		if ($('.header_inner').hasClass('on')) {
			$('.header_inner').removeClass('on');
		}
		if ($('.header_inner').hasClass('dark')) {
			$('.gnb>li>a').css({
				'color': '#000'
			});
		}
		$('#navWrap .subm > a').attr('href', 'aboutus.html');
	}

	if (win.width() < 1024) {
		$('#navWrap .subm > a').attr('href', '#');
	}
});




