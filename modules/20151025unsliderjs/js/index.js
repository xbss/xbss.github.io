var slider = $('.unsliderDiv').unslider({
    speed: 3000,               //  滚动速度
    delay: 2000,              //  动画延迟
    complete: function() {},  //  动画完成的回调函数
    keys: true,               //  启动键盘导航
    dots: true,               //  显示圆点导航
    fluid: false              //  支持响应式设计
});
data = slider.data('unslider'); 
//  开始 Unslider
//data.start();
 
//  暂停 Unslider
//data.stop();
 
// 滑块跳转,还有一个可选的方法参数
//data.move(5, function() {});
//  data.move(0);
 
//  手动激活键盘功能
//data.keys();
 
// 跳转到下一滑块
//data.next();
 
//  跳转到上一滑块
//data.prev();
 
//  添加圆点导航
//data.dots();