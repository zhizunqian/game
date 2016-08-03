$(function(){
	//---------- 付过钱跟没有付过钱
	var a=location.href;
	// a+="?id=yes";
	// var b=a.indexOf("id");//dati
	var b=a.indexOf("id");//dati
	if(b==-1){
		// no
		$("#pay_look_btn").html('<p class="score_zhifu">支付1元给XXXX</p> <p class="score_toukan">偷偷看正确回答~^o^~</p>');
		$("#pay_look_btn").on('tap',function(){
			location.href="game_pay.html";
		})
	}
	else{
		// yes
		$("#pay_look_btn").html('<p class="score_chakan">查看正确答案</p>');
		$("#pay_look_btn").on('tap',function(){
			location.href="game_rightAnswer.html";
		})
	}

	//---------- 点击我也要玩 跳转链接
	$("#MyPlay").on("tap",function(){
			location.href="game_index.html";
	})

	//---------- 答过题的人
	var answeredData=[
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我想说，我们真的认识吗？|友尽！',answer_score:'0%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'额！我忍住了拉黑你一万次的冲动！',answer_score:'10%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'你对得起我们走过的青春岁月吗?',answer_score:'20%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'有事没事，多联系一下我呗！',answer_score:'30%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'咱俩这关系挺尴尬，用红包开温吧!',answer_score:'40%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'以后多关心我一下，会更了解我的。',answer_score:'50%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'虽刚及格，算真朋友啦！',answer_score:'60%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'嘻嘻，你还是挺了解我的嘛！',answer_score:'70%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'哎呦，我们没有白认识这么久！',answer_score:'80%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'你这么了解我，让我怎么办?',answer_score:'90%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'哈哈！你对我用情太深啦！',answer_score:'100%'}
	]
	answeredData.forEach(function(value){
		$(".score_container .score_list").append('<div class="item"> <div class="photo"><img src="'+value.answer_img+'" alt=""></div> <div class="name"> <p class="name_weChat">'+value.answer_nameWeChat+'</p> <p class="name_weChatWrap">'+value.answer_nameWeChatWrap+'</p> </div> <div class="result">'+value.answer_score+'</div> <div class="clear"></div> </div>')
	})


	// ------------score_num
	var score_num=Number($('#score_num').html());
	var score_init=0;
	var score_num_time=setInterval(function(){
		score_init+=1;
		$("#score_num").html(score_init);
		if(score_init==score_num){
			clearInterval(score_num_time)
		}
	},100)  




})