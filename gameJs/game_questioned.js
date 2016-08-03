$(function(){

	//---------- 答过题的人
	var answeredData=[
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_questioned:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_questioned:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_questioned:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_questioned:'100%'},
		{answer_img:'img/2.jpg',answer_nameWeChat:'我是微信名',answer_nameWeChatWrap:'我是你的小苹果~~~',answer_questioned:'100%'}
	]
	answeredData.forEach(function(value){
		$(".questioned_container .questioned_list").append('<div class="item"> <div class="photo"><img src="'+value.answer_img+'" alt=""></div> <div class="name"> <p class="name_weChat">'+value.answer_nameWeChat+'</p> <p class="name_weChatWrap">'+value.answer_nameWeChatWrap+'</p> </div> <div class="result">'+value.answer_questioned+'</div> <div class="clear"></div> </div>')
	})


	// ------------questioned  look_answer
	$("#look_answer").on('tap',function(){
		location.href='game_rightAnswer.html';
	})



})