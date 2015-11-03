# unsliderFor24SolarTerms
use 'unslider.js' create a web page to show solar term, 'unslider.js' is a very good and simple way to show your images,it is a  Combination of CSS and JavaScript technologies achieve to effect of Photo Carousel
## 使用unslider.js图片轮播插件创建一个能轮播24节气的网页
>24节气图片来自花瓣网，背景图片来源于网络
>[unslider.js](http://unslider.com/)需要[jquery](http://download.csdn.net/download/qq1360303452/9212377)的支持
>资源地址[github](https://github.com/xbss/unsliderFor24SolarTerms)

>1.创建html

```
<!--加载div-->
<div class="unsliderDiv">
	<ul>
		<li><img src="img/01立春.gif"/></li>
		<li><img src="img/02雨水.gif"/></li>
		<li><img src="img/03惊蛰.gif"/></li>
		<li><img src="img/04春分.jpg"/></li>
		<li><img src="img/05清明.gif"/></li>
		<li><img src="img/06谷雨.gif"/></li>
		<li><img src="img/07立夏.gif"/></li>
		<li><img src="img/08小满.gif"/></li>
		<li><img src="img/09芒种.gif"/></li>
		<li><img src="img/10夏至.gif"/></li>
		<li><img src="img/11小暑.gif"/></li>
		<li><img src="img/12大暑.gif"/></li>
		<li><img src="img/13立秋.gif"/></li>
		<li><img src="img/14处暑.gif"/></li>
		<li><img src="img/15白露.gif"/></li>
		<li><img src="img/16秋分.gif"/></li>
		<li><img src="img/17寒露.gif"/></li>
		<li><img src="img/18霜降.gif"/></li>
		<li><img src="img/19立冬.gif"/></li>
		<li><img src="img/20小雪.gif"/></li>
		<li><img src="img/21大雪.gif"/></li>
		<li><img src="img/22冬至.gif"/></li>
		<li><img src="img/23小寒.gif"/></li>
		<li><img src="img/24大寒.gif"/></li>
	</ul>
</div>
```

>2.css美化

```
.unsliderDiv {
	position: relative;
	height: auto;
	width: 400px;
	overflow: hidden;
	margin: 0 auto;
	text-align: center;
	border: none;
}
.unsliderDiv li {
	list-style: none;
}
.unsliderDiv ul li {
	float: left;
	list-style: none;
}
.unsliderDiv .dots {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 20px;
}
.unsliderDiv .dots li {
	display: inline-block;
	width: 3px;
	height: 3px;
	margin: 0 4px;
	text-indent: -999em;
	border: 2px solid #fff;
	border-radius: 6px;
	cursor: pointer;
	opacity: 0.4;
	-webkit-transition: background .5s, opacity .5s;
	-moz-transition: background .5s, opacity .5s;
	transition: background .5s, opacity .5s;
}
.unsliderDiv .dots li.active {
	background: #fff;
	opacity: 1;
}
```

>3.javascript代码

```
var slider = $('.unsliderDiv').unslider({
    speed: 3000,               //  滚动速度
    delay: 2000,              //  动画延迟
    complete: function() {},  //  动画完成的回调函数
    keys: true,               //  启动键盘导航
    dots: true,               //  显示圆点导航
    fluid: false              //  支持响应式设计
});
```