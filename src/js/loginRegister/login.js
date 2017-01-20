
//import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import { XHRPost } from '../ajax.js';

var login = new Vue({
	el: '#login',
	data: {
		phone: '',
		pwd: '',
	},

	methods: {
		goToLogin: function () {
			let data = encrypt({
				cellphone: this.phone,
				password: this.pwd
			});
			console.log(data)
			var load = layer.open({ type: 2,shadeClose: false})
			XHRPost('/api_login', data, function (response) {
				console.log(response)
				layer.close(load);
				if (response.data.status === 1) {
					window.location.href = '/index.php/index.html'
				} else {
					layer.open({
						content: response.data.info,
						btn: ['确定'],
						yes: function () {
							layer.closeAll();
						}
					});
				}
			});
		}
	}
});