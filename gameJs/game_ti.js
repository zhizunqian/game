$(function(){
	// ti
	var tiData=[
		{ti_num:'1',ti_img:'img/1.jpg',ti_question:'我最喜欢什么动画片?',ti_answer_1:'A.  火影',ti_answer_2:'B.  火影B',ti_answer_3:'C.  火影C',ti_answer_4:'D.  火影D'},
		{ti_num:'2',ti_img:'img/1.jpg',ti_question:'我最?',ti_answer_1:'A.  火影',ti_answer_2:'B.  火影',ti_answer_3:'C.  火影',ti_answer_4:'D.  火影'},
		{ti_num:'3',ti_img:'img/1.jpg',ti_question:'我最喜?',ti_answer_1:'A.  火影',ti_answer_2:'B.  火影',ti_answer_3:'C.  火影',ti_answer_4:'D.  火影'},
		{ti_num:'4',ti_img:'img/1.jpg',ti_question:'我最喜欢?',ti_answer_1:'A.  火影',ti_answer_2:'B.  火影',ti_answer_3:'C.  火影',ti_answer_4:'D.  火影'},
		{ti_num:'5',ti_img:'img/1.jpg',ti_question:'我最喜欢1?',ti_answer_1:'A.  火影',ti_answer_2:'B.  火影',ti_answer_3:'C.  火影',ti_answer_4:'D.  火影'},
		{ti_num:'6',ti_img:'img/1.jpg',ti_question:'我最喜欢2?',ti_answer_1:'A.  火影',ti_answer_2:'B.  火影',ti_answer_3:'C.  火影',ti_answer_4:'D.  火影'},
		{ti_num:'7',ti_img:'img/1.jpg',ti_question:'我最喜欢3?',ti_answer_1:'A.  火影',ti_answer_2:'B.  火影',ti_answer_3:'C.  火影',ti_answer_4:'D.  火影'},
		{ti_num:'8',ti_img:'img/1.jpg',ti_question:'我最喜欢8?',ti_answer_1:'A.  火影8',ti_answer_2:'B.  火影88',ti_answer_3:'C.  火影888',ti_answer_4:'D.  火影8888'},
		{ti_num:'9',ti_img:'img/1.jpg',ti_question:'我最喜欢9?',ti_answer_1:'A.  火影9',ti_answer_2:'B.  火影99',ti_answer_3:'C.  火影999',ti_answer_4:'D.  火影9999'},
		{ti_num:'10',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  火影10',ti_answer_2:'B.  888',ti_answer_3:'C.  88',ti_answer_4:'D.  78'},
		{ti_num:'11',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  火影10',ti_answer_2:'B.  777',ti_answer_3:'C.  777',ti_answer_4:'D.  77'},
		{ti_num:'12',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  火影10',ti_answer_2:'B.  666',ti_answer_3:'C.  666',ti_answer_4:'D.  66'},
		{ti_num:'13',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  火影10',ti_answer_2:'B.  555',ti_answer_3:'C.  66',ti_answer_4:'D.  5'},
		{ti_num:'14',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  火影10',ti_answer_2:'B.  444',ti_answer_3:'C.  44',ti_answer_4:'D.  4'},
		{ti_num:'15',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  3333',ti_answer_2:'B.  3',ti_answer_3:'C.  33',ti_answer_4:'D.  333'},
		{ti_num:'16',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  2222',ti_answer_2:'B.  22',ti_answer_3:'C.  2',ti_answer_4:'D.  222'},
		{ti_num:'17',ti_img:'img/1.jpg',ti_question:'我最喜欢10?',ti_answer_1:'A.  1111',ti_answer_2:'B.  11',ti_answer_3:'C.  1',ti_answer_4:'D.  111'}
	];
	var answerArr=[];
	var tiNumArr=[];

	
	$(".ti_container").html('<div class="ti_num">'+tiData[0].ti_num+'</div> <div class="ti_banner"> <div class="ti_bannerImg"><img src="'+tiData[0].ti_img+'" alt=""></div> <div class="ti_word"><p>'+tiData[0].ti_question+'</p></div> </div> <div class="ti_answer"> <div class="ti_answer_n"><p>'+tiData[0].ti_answer_1+'</p></div> <div class="ti_answer_n"><p>'+tiData[0].ti_answer_2+'</p></div> <div class="ti_answer_n"><p>'+tiData[0].ti_answer_3+'</p></div> <div class="ti_answer_n"><p>'+tiData[0].ti_answer_4+'</p></div> </div>');
		

	$(".ti_container").delegate(".ti_answer_n","tap",function(){
		var _index=$(this).index();
		var _tiNum=parseInt($(".ti_container .ti_num").html());
		var _tiAnswer=$(this).find("p").html();

		tiNumArr.push(_tiNum);
		answerArr.push(_tiAnswer);

		$(this).css({background:'#921f1d'});
		

		/*$(this).find('p').animate({color:'#921f1d'},10,function(){
			$(".ti_container").animate({left:"-200%"},300,function(){
				$(this).html(" ");
				_tiNum+=1;
			})
		})*/
		// $(".ti_container").animate({left:'-200%'},600,function(){
		// 	$(".ti_container").animate({left:'200%'});
		// })


		



			// $(".ti_container").html('<div class="ti_num">'+_tiNum+'</div> <div class="ti_banner"> <div class="ti_bannerImg"><img src="'+tiData[_tiNum].ti_img+'" alt=""></div> <div class="ti_word"><p>'+tiData[_tiNum].ti_question+'</p></div> </div> <div class="ti_answer"> <div class="ti_answer_n"><p>'+tiData[_tiNum].ti_answer_1+'</p></div> <div class="ti_answer_n"><p>'+tiData[_tiNum].ti_answer_2+'</p></div> <div class="ti_answer_n"><p>'+tiData[_tiNum].ti_answer_3+'</p></div> <div class="ti_answer_n"><p>'+tiData[_tiNum].ti_answer_4+'</p></div> </div>');
		function move(){
			// $(".ti_container").animate({left:'0'});
		}
		
		var t=setTimeout(move,300);


		if(_tiNum==11){
			location.href="game_score.html";
			// location.href="game_ready.html";
		}


	})
})