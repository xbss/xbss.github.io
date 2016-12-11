
// 加载完后执行
$(document).ready(function(){
	// 搜索框
	$("#top-search input").focusin(function(){ // 更改css
		$("#top-search input").css({
			'background': '#eee'
		});
		$("#top-search").css({
			'margin-left':'-60px',
			'background': '#eee'
		});
	});
	$("#top-search input").focusout(function(){ // 更改css
		$("#top-search input").css({
			'background': '#fff'
		});
		$("#top-search input").val("");
		$("#top-search").css({
			'margin-left':'0px',
			'background': '#fff'
		});
		/*$("#top-search").animate({
			'margin-left':'0px',
			'background': '#eee'
		},100);*/
	})
	
	// 头像菜单事件
	$("#avater-container div").mouseover(function(){
		$("#avater-nav").fadeIn();
	});
	$("#avater-menu").mouseleave(function(){
		$("#avater-nav").fadeOut();
	});
	/*$("#avater-container").fadeOut();*/
	$("#avater-container").click(function(){ // 点击回到顶部
		$('html,body').animate({scrollTop:0},500);
	});
	$(document).scroll(function(){ //绑定滚动事件，滚动到40px时显示头像菜单
		var document_top =  $(document).scrollTop();
		if(document_top >= 40)  $("#avater-container").fadeIn(0.1);
		else $("#avater-container").fadeOut(0.1);
	});
});