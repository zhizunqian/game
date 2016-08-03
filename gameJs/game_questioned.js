$(function(){

	//---------- 答过题的人
	var answeredData=[
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我想说，我们真的认识吗？|友尽！',answer_questioned:'0%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'额！我忍住了拉黑你一万次的冲动！',answer_questioned:'10%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'你对得起我们走过的青春岁月吗?',answer_questioned:'20%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'有事没事，多联系一下我呗！',answer_questioned:'30%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'咱俩这关系挺尴尬，用红包开温吧!',answer_questioned:'40%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'以后多关心我一下，会更了解我的。',answer_questioned:'50%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'虽刚及格，算真朋友啦！',answer_questioned:'60%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'嘻嘻，你还是挺了解我的嘛！',answer_questioned:'70%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'哎呦，我们没有白认识这么久！',answer_questioned:'80%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'你这么了解我，让我怎么办?',answer_questioned:'90%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'哈哈！你对我用情太深啦！',answer_questioned:'100%'}
	]
	answeredData.forEach(function(value){
		$(".questioned_container .questioned_list").append('<div class="item"> <div class="photo"><img src="'+value.answer_img+'" alt=""></div> <div class="name"> <p class="name_weChat">'+value.answer_nameWeChat+'</p> <p class="name_weChatWrap">'+value.answer_nameWeChatWrap+'</p> </div> <div class="result">'+value.answer_questioned+'</div> <div class="clear"></div> </div>')
	})


	// ------------questioned  look_answer
	$("#look_answer").on('tap',function(){
		location.href='game_rightAnswer.html';
	})



})