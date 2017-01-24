// 你封装的工具库

//倒计时函数
/*
 使用方法countdown(10,function (number) {
 	console.log(number)
 })
 * */
export function countdown(time,callback) {
	var t = time;
 	var timer = setInterval(function(){
 		t -= 1;
 		if(t === 0){
 			clearInterval(timer);
 		}
		callback(t)
 	},1000);
}

//获取url参数的方法
export function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
