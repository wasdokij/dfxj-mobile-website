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

