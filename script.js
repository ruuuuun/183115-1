var txt=['見','ら','れ','て','る'];
var addtxt='';
var n=0;
var i=0;


$(function(){
	$('#autotext').on('inview',function() {
		
		var count=setInterval(function(){
			addtxt+=txt[n];
			$('#add').html(addtxt);
			n++;
				
			if(n==5){
				i++;		
				n=0;
			}
			
			if(i>4){
    			clearInterval(count);
			}
		},130);
		
		setTimeout(function(){
			$('#change').fadeIn();
		},3800);
		
		setTimeout(function(){
			$('body').css("background-color","black");
			$('body').css("transition-duration","1s");
		},4000);
		
		setTimeout(function(){
			$('.date').css("display","none");
			$('.img1').css("display","none");
			$('.img2').css("display","none");
			$('.img3').css("display","none");
			$('.img4').css("display","none");
			$('.img5').css("display","none");
			$('.img6').css("display","none");
			$("body,html").animate({scrollTop:0},700);
			$('#headerImg').removeClass('wrap');
			$('#headerImg').addClass('changeWrap');
			var target = document.getElementById('headerImg');
			
			if(target.className=="changeWrap"){
				$('.img1').fadeIn();
				$('.img2').fadeIn();
				$('.img3').fadeIn();
				$('.img4').fadeIn();
				$('.img5').fadeIn();
				$('.img6').fadeIn();
				
				$('header img').attr("src","header_sam.JPG");
				$('.date').css("border-bottom","none");
				$('.img1').attr("src","IMG_7321_2.JPG");
				$('.img2').attr("src","IMG_8302_2.JPG");
				$('.img3').attr("src","IMG_8193_2.JPG");
				$('.img4').attr("src","sam2_2.JPG");
				$('.img5').attr("src","IMG_8088_2.JPG");
				$('.img6').attr("src","IMG_8072_2.JPG");
				
				$('.txt1').text("莉頑律縺ｯ螟ｩ豌励′濶ｯ縺九▲縺溘?縺ｧ謨｣豁ｩ縺ｫ陦後″縺ｾ縺励◆笙ｪ邏?謨ｵ縺ｪ闃ｱ繧定ｦ九▽縺代※繝?Φ繧ｷ繝ｧ繝ｳMAX??ｼ?隨? 縺?＞縺薙→縺ゅｋ縺ｨ縺?＞縺ｪ縺?ﾂｴ濶ｸ??*)");
				$('.txt2').text("雎ｬ?ｴ髯ｦ?｣郢ｧ蝣､謐ｩ邵ｺ?ｦ邵ｺ鬘費ｽ･?ｭ郢ｧ鄙ｫ竏?O隨邵ｺ貅假ｿ･邵ｺ霈費ｽ楢ｱ?ｽｩ邵ｺ?窶ｻ郢晏?･繝ｨ郢晏?･繝ｨ()");
				$(".txt3").text("莉頑律縺ｯ縺ｿ繧薙〒繝舌�繝吶く繝･繝ｼ笙｡鬨偵℃縺吶℃縺ｦ逍ｲ繧後■繧�▲縺�( ﾂｴ濶ｸ�) 譛霑代■繧�▲縺ｨ逍ｲ繧梧ｰ怜袖縲ゅ�螟上ヰ繝�°縺ｪ縺�ｼ滉ｽ楢ｪｿ邂｡逅�↓縺ｯ豌励ｒ莉倥￠繧医≧��");
				$(".txt4").text("莉頑律縺ｯ繧ｫ繝輔ぉ縺ｫ陦後▲縺溘ｈ笙ｪ縺ｪ繧薙°隱ｰ縺九�隕也ｷ壹ｒ諢溘§繧九ｈ縺�↑豌励′縺吶ｋ繝ｻ繝ｻ繝ｻ縲�遘√�繝輔ぃ繝ｳ縺九↑繝ｼ�滂ｼ�(隨�) 螢ｰ縺九￠縺ｦ縺上ｌ繧後�縺�＞縺ｮ縺ｫ��(隨�)");
				$('.txt5').text("莉頑律縺ｯ豬ｷ縺ｫ陦後″縺ｾ縺励◆笘縺｡繧?▲縺ｨ閧悟ｯ偵°縺｣縺溘￠縺ｩ縲?幕謾ｾ逧?↑豌怜?縺ｫ縺ｪ繧後※濶ｯ縺九▲縺溘↑縺?ｽ橸ｼ");
				
				$('#main_R').text("繝上Φ繝舌?繧ｬ繝ｼ縺ｨ縺?ｂ繧阪％縺");
				$('#main_R').css("color","red");
				
				$('.txt1').css("color","red");
				$('.txt2').css("color","red");
				$('.txt3').css("color","red");
				$('.txt4').css("color","red");
				$('.txt5').css("color","red");
				
				
				$('.remove').remove();
				$('#change').remove();
				$('#autotext').remove();
				
				$('html,body').animate({scrollTop:3500},10000);
				
			}
		},4700);
	});
});
