$(function(){
	$("#ad-carousel").carousel();
	$("#top-nav .navbar-collapse a").click(function(e){
		var href = $(this).attr("href");
		var tabId = $(this).attr("data-tab");
		if("#" !== href){
			e.preventDefault();
			$(document).scrollTop($(href).offset().top );
			if(tabId){
				$("#tab-characteristics a[href=#" + tabId + "]").tab("show");
			}
		}
	});
});


/*$(document).ready(function(){
	
});
*/