$(function(){
	//nav
    $('.nav').navScroll({
    	scrollSpy: true,
    	navHeight: 82
    });

	//海云灯塔介绍
	$("#banner_img").bxSlider({
		auto: true,
		autoHover: true,
		controls: false
	});
	
	//中小企业数据营销服务
	$('#market_btn li').click(function(){
		$('.r-cont').hide();
		var marketbtn = $('#market_btn li'),
		 	index = $('#market_btn li').index(this);
		$('.r-cont').eq(index).show();
		marketbtn.eq(index).addClass('active')
			.siblings(this).removeClass('active');
		return false;
	});
	
	//合作伙伴
	$('#part_nav li').click(function(){
		$('.part-cont').hide();
		var partnav = $('#part_nav li'),
		 	index = $('#part_nav li').index(this);
		$('.part-cont').eq(index).show();
		partnav.eq(index).addClass('active')
			.siblings(this).removeClass('active');
		return false;
	});
	$(".carousel_imgp").bxSlider({
		auto: true,
		autoHover: true,
		pager: false,
		slideWidth: 966
	});

	//灯塔客户 循环 
	$("#auto_scroll").kxbdMarquee({direction:"up",isEqual:false});
	
	//海云灯塔介绍 循环
	$("#notice_scroll").kxbdMarquee({isEqual:false});
	
});