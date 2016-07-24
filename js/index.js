


$(function(){
	var $imgs=$('.left img');
	var $lis=$('#btn2 div');
	var win=$($('.banner-box'));
	var $lbtn=$('#lbtn');
	var $rbtn=$('#rbtn');
	console.log($lbtn);
	var $len=$imgs.length;
	$imgs.css('left','100%').eq(0).css('left','0');
	$lis.removeClass('red').eq(0).addClass('red');

	var now=0;
	var next=0;
	var time=2000;		
	var flag=true;
	var t=setInterval(mover,time);
		win.mouseover(function(){
			clearInterval(t);
		})
		win.mouseout(function(){
			t=setInterval(mover,time);
		})
		$lbtn.click(function(){
			if(flag){
				flag=false;
				movel();
			}
		})
		$rbtn.click(function(){
			if(flag){
				flag=false;
				mover();
			}	
		})
		function mover(){
			next++;
			if(next==$len){
				next=0;
			}
			$imgs.eq(next).css('left','100%');
			$imgs.eq(next).animate({left:'0'},500);
			$imgs.eq(now).animate({left:'-100%'},500,function(){
				flag=true;
			});
			$lis.eq(next).addClass('red');
			$lis.eq(now).removeClass('red');
			$imgs.eq(next).css('left','100%').css('left','0');			
			now=next;
		}
		function movel(){
			next--;
			if(next<0){
				next=$len-1;
			}
			$imgs.eq(next).css('left','-100%');
			$imgs.eq(next).animate({left:'0'},500);
			$imgs.eq(now).animate({left:'100%'},500,function(){
				flag=true;
			});
			$lis.eq(next).addClass('red');
			$lis.eq(now).removeClass('red');
			$imgs.eq(next).css('left','-100%').css('top','0');			
			now=next;
		}
})