import axios from 'axios';
//ajax
//post请求
export function XHRPost(url, data, callback, failBack) {
	axios.post(url, data).then(function(response){
		if (callback)
		callback(response)
	})
	.catch(function (error) {
		console.log(error);
		if (failBack) {
			failBack(error);
		} else {
			if (window.layer) {
		    	layer.closeAll();
			    layer.open({
			    	content: error,
			    	btn: ['关闭'],
					yes: function () {
						layer.closeAll();
					}
			    });
		    } else {
		    	alert(error)
		    }
		}
	});
}

//get请求
export function XHRGet(url, data, callback, failBack) {
	axios.get(url, {
		params: data
	})
  	.then(function (response) {
    	if (callback)
		callback(response)
  	})
  	.catch(function (error) {
    	console.log(error);
    	if (failBack) {
			failBack(error);
		} else {
			if (window.layer) {
		    	layer.closeAll();
			    layer.open({
			    	content: error,
			    	btn: ['关闭'],
					yes: function () {
						layer.closeAll();
					}
			    });
		    } else {
		    	alert(error)
		    }
		}
  	});
}