$(function(){
	//搜索框
	$('.search').mouseenter(function(){
		$(this).stop(true).css({width:33});
		$('.input').stop(true).css({width:0});
		$(this).animate({width:248},500);
		$(this).css('border','1px solid #efefef');
		$('.input').animate({width:202},500);
	}).mouseleave(function(){
		$(this).animate({width:33},500);
		$(this).css('border','1px solid transparent');
		$('.input').animate({width:0},500);
	})
	
	//点击转换图片
	 
	$.get('./assets/php/1.php',function(data){
		console.log('data',data);
		var content='';
		data.forEach(function(value,key){
			content+='<li class="'+value.id+'">';
			content+='<div class="con">';
				content+='<div class="image-big">'+value.bigImage+'</div>';
				content+='<div class="image-small">';
					content+='<dl>'+value.smallImage+'</dl>';
				content+='</div>';
				content+='<div class="text">'+value.text+'</div>';
				content+='</div>';
			content+='</div>';
			content+='</li>';
		})
		document.querySelector('.main .section4 .sec4-one').innerHTML+=content;

		 $('ul li .image-small img').click(function(){
			var imageIndex=$(this).parent().index();
			console.log(imageIndex);
			$(this).parent().parent().parent().parent().find('.image-big img').eq(imageIndex).show().siblings().hide();
			$(this).parent().addClass('active').siblings().removeClass('active');
		})
	},'json')
	$.get('./assets/php/2.php',function(data){
		var content='';
		data.forEach(function(value,key){
			content+='<li class="'+value.id+'">';
			content+='<div class="con">';
				content+='<div class="image-big">'+value.bigImage+'</div>';
				content+='<div class="image-small">';
					content+='<dl>'+value.smallImage+'</dl>';
				content+='</div>';
				content+='<div class="text">'+value.text+'</div>';
				content+='</div>';
			content+='</div>';
			content+='</li>';
		})
		document.querySelector('.main .section4 .sec4-two').innerHTML+=content;

		 $('ul li .image-small img').click(function(){
			var imageIndex=$(this).parent().index();
			console.log(imageIndex);
			$(this).parent().parent().parent().parent().find('.image-big img').eq(imageIndex).show().siblings().hide();
			$(this).parent().addClass('active').siblings().removeClass('active');
		})
	},'json')
	$.get('./assets/php/3.php',function(data){
		var content='';
		data.forEach(function(value,key){
			content+='<li class="'+value.id+'">';
			content+='<div class="con">';
				content+='<div class="image-big">'+value.bigImage+'</div>';
				content+='<div class="image-small">';
					content+='<dl>'+value.smallImage+'</dl>';
				content+='</div>';
				content+='<div class="text">'+value.text+'</div>';
				content+='</div>';
			content+='</div>';
			content+='</li>';
		})
		document.querySelector('.main .section4 .sec4-three').innerHTML+=content;

		 $('ul li .image-small img').click(function(){
			var imageIndex=$(this).parent().index();
			console.log(imageIndex);
			$(this).parent().parent().parent().parent().find('.image-big img').eq(imageIndex).show().siblings().hide();
			$(this).parent().addClass('active').siblings().removeClass('active');
		})
	},'json')
	$.get('./assets/php/4.php',function(data){
		var content='';
		data.forEach(function(value,key){
			content+='<li class="'+value.id+'">';
			content+='<div class="con">';
				content+='<div class="image-big">'+value.bigImage+'</div>';
				content+='<div class="image-small">';
					content+='<dl>'+value.smallImage+'</dl>';
				content+='</div>';
				content+='<div class="text">'+value.text+'</div>';
				content+='</div>';
			content+='</div>';
			content+='</li>';
		})
		document.querySelector('.main .section4 .sec4-four').innerHTML+=content;

		 $('ul li .image-small img').click(function(){
			var imageIndex=$(this).parent().index();
			console.log(imageIndex);
			$(this).parent().parent().parent().parent().find('.image-big img').eq(imageIndex).show().siblings().hide();
			$(this).parent().addClass('active').siblings().removeClass('active');
		})
	},'json')



	//点击切换推荐，新品，价格
	$('.section3 .sec3-left a').click(function(){
		var index=$(this).index();
		$(this).addClass('one').siblings().removeClass('one');
		$(this).parent().parent().siblings('.section4').children().eq(index).show().siblings().hide();
	})

	//点击价格切换升降值
	var bool=true;
	$('.section3 .sec3-left a:eq(2)').click(function(){
		if(bool){
			$(this).parent().parent().siblings('.section4').children().eq(2).show().siblings().hide();
			bool=false;
		}else{
			$(this).parent().parent().siblings('.section4').children().eq(3).show().siblings().hide();
			bool=true;
		}
	})
	
	//移入放大，为您推荐
	$('.rec-bottom li').mouseenter(function(){
		$('.rec-bottom li img').stop(true).css({width:180,height:180});
		$(this).find('img').animate({width:190,height:190});
	}).mouseleave(function(){
		$(this).find('img').animate({width:180,height:180});
	})

	//右侧固定
	function fixed(){
		var w=$(window).height();
		var d=$(document).scrollTop();
		if(d>w){
		    $('.fixed').fadeIn();	
		}else{
			$('.fixed').fadeOut();
		}
	}

	$(window).scroll(function(){
		fixed();
	})
	$('.fixed .goTop').click(function(){
		$(window).scrollTop(0);
	})

})