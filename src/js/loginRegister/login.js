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
			var config = {
				url: '/oriental_treasure/register_and_login/login',
//				url: '/api_login',
				data: {
					cellphone: '',
					password: ''
				}
			}

			const tel = /^1(3|4|5|7|8|9)\d{9}$/.test(this.phone);
			const pwd = /^(\w){6,15}$/.test(this.pwd);
			if (tel) {
				config.data.cellphone = encrypt(this.phone);
			} else {
				this.errorTip('手机号码有误！');
				return false;
			}
			if (pwd) {
				config.data.password = encrypt(this.pwd);
			} else {
				this.errorTip('密码有误，只能输入6-15个字母、数字、下划线');
				return false;
			}
			
			console.log(config.data)
			var load = layer.open({ type: 2,shadeClose: false})
			XHRPost(config.url, config.data, function (response) {
				console.log(response)
				layer.close(load);
				if (response.data.status === 1) {
					window.location.href = '/xiaojin/index/index.html'
				} else {
					this.errorTip(response.data.info);
				}
			}.bind(this));
		},
		//错误提示方法
		errorTip: function (msg) {
			layer.open({
				content: msg,
				btn: ['确定'],
				yes: function () {
					layer.closeAll();
				}
			});
		},
	}
});