var jsondata = [];

function readJson() {
	//var dataroot="/data.json",;
	$("#jsondata").append("<div>" + "dsfasd" + "</div>");
	$.getJSON("data.json", function(data) {
		//jsondata = data;
		$("#jsondata").append("<div>" + "each" + "</div>");
		$.each(data, function(index, info) {
			//jsondata[index] =info;
			//$("#jsondata").append("<div>" + info + "</div>");
			$("#jsondata").append("姓名：" + info["name"] + "<br>");
			$("#jsondata").append("性别：" + info["sex"] + "<br>");
			$("#jsondata").append("邮箱：" + info["email"] + "<br>");

		});
	});
}
$("#jsondata").html(jsondata);
console.info(jsondata);


function loadInfo() {
	$.getJSON("data.json", function(data) {
		$("#title").append(data.title + "<hr/>");
		$("#content").append(data.content + "<hr/>");
		//jquery解析map数据
		$.each(data.infomap, function(key, value) {
			$("#mapinfo").append(key + "----" + value + "<br/><hr/>");
		});
		//解析数组
		$.each(data.comments, function(i, item) {
			$("#info").append(
				"<div>" + item.id + "</div>" +
				"<div>" + item.nickname + "</div>" +
				"<div>" + item.content + "</div><hr/>");
		});
	});
}