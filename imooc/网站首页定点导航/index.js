$(document).ready(function(){
	// 滚动
	$(window).scroll(function(){

		var items = $("#content").find(".item");       // 获取数组items
		var menu = $("#menu");                         // 获取菜单
		var top = $(document).scrollTop();             // 获取滚动条到顶部的距离
		var currentId = "";                            // 滚动条现在位置的item
		
		// 将位置所需的item顶部距离找出，通过循环遍历
		items.each(function(){                         // 判断滚动条的位置在哪一个item
			var m = $(this);                           // 注意 ：m.offset().top 每一个item的顶部位置
			
			console.info("dd"+currentId + top + m.offset().top);
			if( top > m.offset().top - 300){
				currentId = "#" + m.attr("id");
			} else {
				return false;
			}
		});
		// 当前menu中选中的item
		var currentLink = menu.find(".current");

		// 当前滚动到的位置获取到有ID，和菜单项的不相符合时才替换
		if(currentId && currentLink.attr("href") != currentId){
			// 去掉存在的 选中样式
			currentLink.removeClass("current");
			// 加上对应的选中样式
			menu.find("[href=" + currentId + "]").addClass("current");
		}
	});
});