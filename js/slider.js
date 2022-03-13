window.addEventListener('DOMContentLoaded', function(){
	
	/* INDEX Visual Swiper */
	const screen_w = document.documentElement.clientWidth;
		var viSwiper;
		if(screen_w < 768){
			viSwiper = new Swiper(".visualSwiper", {
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				scrollbar: {
					el: ".swiper-scrollbar",
				},
			});
		}
	
	/* INDEX Acitvity Swiper */
	const actiSwiper = new Swiper(".actiSwiper", {
		slidesPerView: 'auto',
		centeredSlides:true,
		freeMode: true,
		spaceBetween: 200,
		loop:true,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		},
		speed: 5000,
	});
	$('#activity .swiper-slide a').on('mouseover', function() {
		actiSwiper.autoplay.stop();
	});
	$('#activity .swiper-slide a').on('mouseout', function() {
		actiSwiper.autoplay.start();
	});
	
	/* INDEX Science of Feel Swiper */
	const sofSwiper = new Swiper(".sofSwiper", {
		slidesPerView: 'auto',
		centeredSlides: true,
		freeMode: true,
		spaceBetween: 20,
		loop:true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false
		},
		speed: 10000,
		breakpoints: {
			500: {
				spaceBetween: 40,
			},
			768: {
				spaceBetween: 10,
			},
		},
	});
		
	/* INDEX Community Swiper */
	const comSwiper = new Swiper('.comSwiper', {
		slidesPerView: 3,
		spaceBetween: 60,
		centeredSlides:true,
		loop:true,
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
		breakpoints: {
			300: {
				slidesPerView: 1.15,
				spaceBetween: 50,
			},
			600: {
				slidesPerView: 1.7,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3.2,
			},
			1400: {
				slidesPerView: 3.8,
			},
			1800: {
				slidesPerView: 4.8,
			},
		},
	});	
	$('#comContents .swiper-slide').on('mouseover', function() {
		comSwiper.autoplay.stop();
	});
	$('#comContents .swiper-slide').on('mouseout', function() {
		comSwiper.autoplay.start();
	});
	
	/* ABOUT US - Media Swiper */
	const mediaSwiper = new Swiper('.mediaSwiper', {
		slidesPerView: 1.1,
		centeredSlides:true,
		spaceBetween: 40,
		/*slidesPerGroup:2,*/
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
		breakpoints: {
			300: {
				slidesPerView: 1.1,
				spaceBetween: 40,
				centeredSlides:true,
			},
			580: {
				slidesPerView: 1.3,
				centeredSlides:true,
			},
			680: {
				slidesPerView: 1.5,
				centeredSlides:true,
			},
			768: {
				slidesPerView: 1.5,
				centeredSlides:false,
			},
			850: {
				slidesPerView: 1.7,
				centeredSlides:false,
			},
			960: {
				slidesPerView: 1.9,
				centeredSlides:false,
			},
			1100: {
				slidesPerView: 2.1,
				centeredSlides:false,
			},
			1230: {
				slidesPerView: 2.3,
				centeredSlides:false,
			},
			1370: {
				slidesPerView: 2.5,
				centeredSlides:false,
			},
			1500: {
				slidesPerView: 2.7,
				centeredSlides:false,
			},
			1620: {
				slidesPerView: 2.9,
				centeredSlides:false,
			},
			1750: {
				slidesPerView: 3.1,
				centeredSlides:false,
			},
			1900: {
				slidesPerView: 3.3,
				centeredSlides:false,
			},
		},
	});	
	$('#mediaContents .swiper-slide').on('mouseover', function() {
		mediaSwiper.autoplay.stop();
	});
	$('#mediaContents .swiper-slide').on('mouseout', function() {
		mediaSwiper.autoplay.start();
	});
	
	/* ABOUT US - fixedlulu Swiper */
	const luluSwiper = new Swiper(".luluSwiper", {
		slidesPerView: 'auto',
		centeredSlides: true,
		freeMode: true,
		spaceBetween: 200,
		loop:true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		speed: 10000,
	});
	
	/* ABOUT US - Our Values Swiper */
		const valSwiper = new Swiper(".valSwiper", {
			spaceBetween: 10,
			effect: "fade",
			loop:true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".valnext",
				prevEl: ".valprev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
		$('#values .swiper-slide').on('mouseover', function() {
			valSwiper.autoplay.stop();
		});
		$('#values .swiper-slide').on('mouseout', function() {
			valSwiper.autoplay.start();
		});
	
});

/* Visual reload */
let load = 1;
window.addEventListener('resize', function(event) {
	screen_w = document.documentElement.clientWidth;
	if(screen_w < 768){
		swiper = new Swiper(".visualSwiper", {
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
		});
		load--;
	}
	if(screen_w >= 768){
		console.log('working');
		if(load < 1){
			location.reload();
			load = 1;
		}
	}
});
