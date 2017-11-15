$(function(){
	//切换大小图片
	
	$('.demain .section2 .image-small li').click(function(){
		var smallIndex=$(this).index();
		$('.demain .section2 .image-big img').eq(smallIndex).fadeIn(300).siblings().fadeOut(300);
		$(this).addClass('color').siblings().removeClass('color');
	})

	//点击花呗分期
	$('.sec2-right .stage a').click(function(){
		$(this).addClass('color').siblings().removeClass('color');
	})


	//点击加减
	$('.sec2-right .number .plus').click(function(){
		var num=$('.sec2-right .number input').val();
		num++;
		// console.log(num);
		$('.sec2-right .number input').val(num);
	})
	$('.sec2-right .number .minus').click(function(){
		var num=$('.sec2-right .number input').val();
		num--;
		if(num<=1){
			num=1;
			$('.sec2-right .number input').val(num);
		}
		$('.sec2-right .number input').val(num);
	})
	//详情介绍，参数介绍，常见问题
	$('.section3 .title li a').click(function(){
		var secIndex=$(this).parent().index();
		$(this).addClass('border').parent().siblings().children().removeClass('border');
		$('.section3 .content div').eq(secIndex).show().siblings().hide();
	})
	//下滑部分

	function down(){
		var wh=$(window).height();
		var dh=$(document).scrollTop();
		if(dh>190){
			$('.down').slideDown(500);
			$('.down .right .text').show();
			if(dh>600){
				$('.down .buy').slideDown();
				// $('.down .buy').animate({width:180},50);
				if(dh>760){
					$('.down ul').show();
				}else{
					$('.down ul').hide();
				}
			}else{
				$('.down .buy').slideUp();
				// $('.down .buy').animate({width:0},50);
			}
			
		}else{
			$('.down').slideUp(500);
			$('.down .right .text').hide();
		
	}
}

	$(window).scroll(function(){
		down();
	})

})