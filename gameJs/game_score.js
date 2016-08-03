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
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_score:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_score:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_score:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_score:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_score:'100%'}
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