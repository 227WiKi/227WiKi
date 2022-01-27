$(document).ready(function(){
	//初期設定
	var height = $(window).height();
	var w = $(window).width();
	var x = 768;

	if(w > x){ 
			wresize();
			$("body").addClass('pcmode');
		}else{
			wresize_sp();
			$("body").addClass('spmode');
	}
	
	//リサイズ処理
	$(window).resize(function(){
		var ww = $(window).width();
		if(w != ww) {
			w = ww;
			if(w > x){ 
				wresize();
				$("body").addClass('pcmode');
				$("body").removeClass('spmode');
			}else{
				wresize_sp();
				$("body").addClass('spmode');
				$("body").removeClass('pcmode');
			}
		}
	});
	
	function wresize(){
		height = $(window).height();
		w = $(window).width();
	}
	
	function wresize_sp(){
		height = $(window).height();
		w = $(window).width();
	}

	$("#sp_menu a").click(function () {
		height = $(window).height();
		trg = $("nav");
			$('nav .nav_link').css('height',height);
		trg.stop(true,true).fadeIn();
		$('body').css('overflow','hidden');
		return false;
	});

	$(".nav_close a").click(function () {
		trg = $("nav");
		trg.stop(true,true).fadeOut();
		$('body').css('overflow','visible');
		return false;
	});


	jQuery(window).scroll(function() {
		toggleEvent();
	});

	$(".tab_trigger").hover(
			function () {
				trg = $(this).find('.mediaSortList');
				if($("body").hasClass('pcmode')){
					trg.stop(true,true).fadeIn('fast');
				}
			},
			function () {
				if($("body").hasClass('pcmode')){
					trg.stop(true,true).fadeOut('fast');
				}
			}
	);

	$(".mediaSortList_year").hover(
			function () {
				trg = $(this).find('ul');
				if($("body").hasClass('pcmode')){
					trg.stop(true,true).fadeIn('fast');
				}
			},
			function () {
				if($("body").hasClass('pcmode')){
					trg.stop(true,true).fadeOut('fast');
				}
			}
	);

	$(".tab_trigger .tabs_list_link").click(function () {
		if($("body").hasClass('spmode')){
			trg = $(this).parent().find('.mediaSortList');
			if (trg.css('display') == 'block') {
				trg.stop(true,true).fadeOut();
			}else{
				trg.stop(true,true).fadeIn();
			}
		}
		return false;
	});

	$(".mediaSortList_year .mediaSortList_year_btn").click(function () {
		if($("body").hasClass('spmode')){
			trg = $(this).parent().find('ul');
			if (trg.css('display') == 'block') {
				trg.stop(true,true).fadeOut();
			}else{
				$('.mediaSortList_year ul').hide();
				trg.stop(true,true).fadeIn();
			}
		}
		return false;
	});


});

	function toggleEvent() {
		w = $(window).width();
		height = $(window).height();
		scrollx = $(this).scrollTop();
		header_h = $(".header_menu").outerHeight();
		if (jQuery(this).scrollTop() > header_h) {
			$(".header_menu").addClass('fixed_header');
		} else {
			$(".header_menu").removeClass('fixed_header');
		}
		if (jQuery(this).scrollTop() > header_h) {
			$("nav").addClass('fixed_header');
		} else {
			$("nav").removeClass('fixed_header');
		}

		scrollY = $(window).scrollTop();
		$(".trigger").each(function(){
			var $this = $(this);
			if(scrollY + height > $this.offset().top){
				$this.removeClass("trigger");
			}
		});
	}

$(window).on('load', function(){
	toggleEvent();
});