$(function(){

	// 测一测还是开始出题
	var a=location.href;
	a+="?id=dati";
	var b=a.indexOf("id");//dati
	if(b==-1){
		// chuti
		$("#startBtn").html('<div class="start_word_chu"></div>');
	}
	else{
		// dati
		$("#startBtn").html('<div class="start_word_ce"></div>');
	}

	// 点击按钮跳转链接
	$("#startBtn").on("tap",function(){
		location.href="game_ti.html";
	})
})