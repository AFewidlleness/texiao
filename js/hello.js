//下拉菜单
$(document).ready(function() {
	$('#nav li').hover(function() {
		$('ul', this).slideDown(200);
		$(this).children('a:first').addClass("hov");
	}, function() {
		$('ul', this).slideUp(100);
		$(this).children('a:first').removeClass("hov");
	});
});

//轮播图
var $li = $(".b_list ul li");
var len = $li.length - 1;
var _index = 0;
var $img = $(".b_main .b_m_pic li");
var $btn = $(".b_btn div");
var timer = null;

$li.hover(function() {
	$(this).addClass("l_hover");
}, function() {
	$(this).removeClass("l_hover");
});

$li.click(function() {
	_index = $(this).index();
	$li.eq(_index).addClass("l_click").siblings().removeClass("l_click");
	$img.eq(_index).fadeIn().siblings().fadeOut();
	play();
});

function play() {
	$li.eq(_index).addClass("l_click").siblings().removeClass("l_click");
	$img.eq(_index).fadeIn().siblings().fadeOut();
}

$btn.click(function() {
	var index = $(this).index();
	if(index) {
		_index++;
		if(_index > len) {
			_index = 0;
		}
		play();
	} else {
		_index--;
		if(_index < 0) {
			_index = len;
		}
		play();
	}
});

function auto() {
	timer = setInterval(function() {
		_index++;
		if(_index > len) {
			_index = 0;
		}
		play();
	}, 3000);
}
auto();
$(".b_main").hover(function() {
	clearInterval(timer);
}, function() {
	auto();
});
$(".b_btn div").hover(function() {
	clearInterval(timer);
}, function() {
	auto();
});

//手风琴
$(function() {
	$('span').click(function() {
		if($(this).siblings('li').hasClass('on')) {
			$(this).siblings('li').slideUp(500).removeClass('on');
			$(this).children('b').text('+');
		} else {
			$(this).siblings('li').slideDown(500).addClass('on');
			$(this).children('b').text('-');
		}
	});
});

//tab
var index = 0;
var timer = null;
var hasStarted = false;
$(function() {

	$('.module:not(:first)').hide();

	start();

	$('.notice').hover(function() {
		stop();
	}, function() {
		start();
	})

	$('.title-item').hover(function(e) {
		$('.title-item').removeClass('select');
		$(this).addClass('select');
		index = $(this).index();
		$('.module').hide();
		$('.module').eq(index).show();
	}, function() {

	});

});

function start() {
	if(!hasStarted) {
		hasStarted = true;
		timer = setInterval(autoPlay, 2000);
	}
}

function stop() {
	clearInterval(timer);
	hasStarted = false;
}

function autoPlay() {
	++index;
	if(index > 3) {
		index = 0;
	}
	$('.title-item').removeClass('select');
	$('.title-item').eq(index).addClass('select');
	$('.module').hide();
	$('.module').eq(index).show();
}

//回到顶部
$(function() {

	$('#goToTop').hide(); 

	$(window).scroll(function() {
		if($(this).scrollTop() > 500) {
			$('#goToTop').fadeIn();
		} else {
			$('#goToTop').fadeOut();
		}
	});

	$('#goToTop a').click(function() {
		$('html ,body').animate({
			scrollTop: 0
		}, 300);
		return false;
	});

});

//遮罩
$(".con ul li").hover(function(){
	$(this).find(".txt").stop().animate({height:"198px"},400);
	$(this).find(".txt h3").stop().animate({paddingTop:"60px"},400);
},function(){
	$(this).find(".txt").stop().animate({height:"45px"},400);
	$(this).find(".txt h3").stop().animate({paddingTop:"0px"},400);
})