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

function getRequest() { 
	var url = location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	return theRequest; 
} 
