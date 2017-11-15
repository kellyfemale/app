
$(function(){
	//图片轮播
	var index = 0;
	var timer = 0;
	var len = $('.advert-image li').length;
	var cloneFirst = $('.advert-image li:first').clone();

	$('.advert-image').append(cloneFirst);
	
	function carousel(){
		timer = setInterval(function(){
			index++;
			if (index > len) {
				index = 1;
				$('.advert-image').css('left',0);
			}
			fun();
		},5000)
	}
	carousel();

	$('.carousel').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		carousel();
	})
	function fun(){
		$('.advert-image').animate({left:-1349*index},300);
		$('.advert-index li').eq(index%len).addClass('active');
		$('.advert-index li').eq(index%len).siblings().removeClass('active');
	}

	//点击小圆点
	$('.advert-index li').click(function(){
		index=$(this).index();
		fun();
	})

	//导航链接下滑



	$('.nav .change').mouseenter(function(){

		$('.header').css('backgroundColor','#fff');
		$('.logo a').addClass('blue');
		$('.cart').addClass('black');
	    $('.nav li a').addClass('active');

	    
	  	var slideIndex=$(this).index()-1;
	   	$('.header .slide').stop(true).slideDown(1000);
	   	$('.header .slide .item').eq(slideIndex).show().siblings().hide();
	  	
	}).mouseleave(function(){
		$('.header').css('backgroundColor','transparent');
		$('.logo a').removeClass('blue');
		$('.cart').removeClass('black');
		$('.nav li a').removeClass('active');

	})

	$('.nav').mouseenter(function(){

	}).mouseleave(function(){
		$('.header .slide').hide();
	})
	$('.header .nav li:not(.change)').mouseenter(function(){
		$('.header .slide').hide();
		$('.header .item').hide();
	})
	$('.header .slide').mouseenter(function(){
		$('.header').css('backgroundColor','#fff');
		$('.logo a').addClass('blue');
		$('.cart').addClass('black');
	    $('.nav li a').addClass('active');

		$(this).stop().show();
	}).mouseleave(function(){
		$('.header').css('backgroundColor','transparent');
		$('.logo a').removeClass('blue');
		$('.cart').removeClass('black');
		$('.nav li a').removeClass('active');

		$(this).hide();
	})


	//登录内容
	$('.header .login').mouseover(function(){
		$('.login .login-content').show();
		$('.login .triangle').show();
	}).mouseout(function(){
		$('.login .login-content').hide();
		$('.login .triangle').hide();
	})

	$('.login-content li a').mouseover(function(){
		$(this).addClass('color');
	}).mouseout(function(){
		$(this).removeClass('color');
	})
	//购物车内容
	$('.header .cart').mouseover(function(){
		$('.cart .cart-content').show();
		$('.cart .triangle').show();
	}).mouseout(function(){
		$('.cart .cart-content').hide();
		$('.cart .triangle').hide();
	})

	//配件导航链接移入
	$('.acc-nav-content li a').mouseover(function(){
		$(this).addClass('color');
	}).mouseout(function(){
		$(this).removeClass('color');
	})
	//导航下滑
	function accessory_fix(){
		var w=$(window).height()/2;
		var d=$(document).scrollTop();
		if(d>w){
			$('.accessory-nav').slideDown(500);
			// $('.store').animate({right:0},500);
		    $('.store').show();
			
			
		}else{
			$('.accessory-nav').slideUp(500);
			$('.store').hide();
		}
	}

	$(window).scroll(function(){
		accessory_fix();
	})
	//右侧固定
	$('.store .first').mouseenter(function(){
		$(this).stop(true).css({right:-80});
		$(this).animate({right:0},500);
		$('.first span').addClass('active');
		$(this).css('backgroundColor','#a39a9a');
	}).mouseleave(function(){
		$(this).animate({right:-80},500);
		$('.first span').removeClass('active');
		$(this).css('backgroundColor','#d8d8d8');
	})

	$('.store .app-icon').mouseenter(function(){
		$('.app-icon .app').stop(true).hide();
		$('.app-icon .app').slideDown(300);
		$(this).css('backgroundColor','#a39a9a');
	}).mouseleave(function(){
		$('.app-icon .app').slideUp(300);
		$(this).css('backgroundColor','#d8d8d8');
	})

	$('.store .third').mouseenter(function(){
		$(this).stop(true).css({right:-80});
		$(this).animate({right:0},500);
		$(this).css('backgroundColor','#a39a9a');
	}).mouseleave(function(){
		$(this).animate({right:-80},500);
		$(this).css('backgroundColor','#d8d8d8');
	})
	$('.store .third').click(function(){
		$(window).scrollTop(0);
	})

	/*手机产品滑动*/
	$('.product li').mouseenter(function(){
		$('.product li').find('.after').stop(true).css('left',0);
		$('.product li').find('.before').stop(true).css('left',0);

		$(this).find('.after').animate({left:-50},800);
		$(this).find('.before').animate({left:50},800);
	}).mouseleave(function(){
		$(this).find('.after').animate({left:0},800);
		$(this).find('.before').animate({left:0},800);
	})
	//发现产品左右按钮
	$('.find-content > div').mouseover(function(){
		$(this).addClass('color');
	}).mouseout(function(){
		$(this).removeClass('color');
	})
	$('.find-content').mouseover(function(){
		$(this).children('div').show();
	}).mouseout(function(){
		$(this).children('div').hide();
	})
	//点击滑动事件
	var findIndex=0;
	function find(){
		$('.find-all').stop(true).animate({left:-1340*findIndex},600);
		$('.find-index li').eq(findIndex).addClass('color').siblings().removeClass('color');
	}
	$('.find-content .left').click(function(){
		findIndex--;
		if (findIndex <0 ) {
			findIndex=0;
		}
		find();
		
	})
	$('.find-content .right').click(function(){

		findIndex++;
		if (findIndex >1 ) {
			findIndex=2;
		}
		find();
	})
	//点击小圆点
	$('.find-index li').click(function(){
		findIndex=$(this).index();
		find();
	})

	//shop商品显示
	$('.shop-content li').mouseenter(function(){
		$(this).find('img').first().stop(true).hide();
		$(this).find('img').first().fadeIn(800);
	}).mouseleave(function(){
		$(this).find('img').first().hide();
	})
	//footer图片切换
	$('.ban .one').mouseenter(function(){
		$(this).children('.after').show();
	}).mouseleave(function(){
		$(this).children('.after').hide();
	})

	$('.footer .right .one').mouseenter(function(){
		$(this).children('.after').show();
	}).mouseleave(function(){
		$(this).children('.after').hide();
	})



})
