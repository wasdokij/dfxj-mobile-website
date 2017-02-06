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
<<<<<<< HEAD
=======

// 防抖动函数
/* 使用方法
*  var newFn = debounce(fn, 1000).bind(this);
*  newFn();
*  注意this的绑定
* */
export function debounce(fn, delay) {
  var timer = null; // 声明计时器

  var closure =  function(){
    var context = this;
    var args = arguments;
    if (timer) {
        return;
    }
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
      timer = null;
    }, delay);
  };

  return function () {
      closure.call(this);
  }
}

// 深拷贝
/*
* 使用方法
* var newObj = deepClone(obj, data);
* */
export function deepClone(data) {
    var t = type(data), o, i, ni;

    if(t === 'array') {
        o = [];
    }else if( t === 'object') {
        o = {};
    }else {
        return data;
    }

    if(t === 'array') {
        for (i = 0, ni = data.length; i < ni; i++) {
            o.push(deepClone(data[i]));
        }
        return o;
    }else if( t === 'object') {
        for( i in data) {
            o[i] = deepClone(data[i]);
        }
        return o;
    }
}

function type(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

/*若登录失败，则跳转到登录页*/
export function loginError(res) {
    if (!!res && res.status == 1) {
        // window.location.pathname = '/xiaojin/login_register/login';
    } else {
        window.location.pathname = '/xiaojin/login_register/login';
    }
}
>>>>>>> master
