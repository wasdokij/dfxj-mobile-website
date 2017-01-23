import HomeInviteAccept from 'components/index/index-invite-accept.vue';
import { countdown } from '../../js/tools.js';
import '../lib/layer.js';
import '../lib/layer.css';
import { XHRPost } from '../ajax.js';

var V = new Vue({
    el: '#container',
    data: {
    	getCodeBtnDisable: true,
    }
    components: {
        HomeInviteAccept
    },
    methods: {
    	//验证手机
    	checkPhone: function (phone) {
			const tel = /^1(3|4|5|7|8|9)\d{9}$/.test(phone);
			return tel;
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
		
		//获取验证码
    	getCode: function () {
			const tel = this.checkPhone(this.phone)
			if (!tel) {
				this.errorTip('手机号码有误！');
				return false;
			}
			this.getCodeBtnDisable = false;
			this.conut_time = '...';

			const data = {
				cellphone: encrypt(this.phone),
				exist: encrypt('0')
			}
			XHRPost('/oriental_treasure/register_and_login/sendPhoneCode', data, function (response) {
				if (response.data.status === 1) {
					const _this = this;
					countdown(60,function (time) {
						_this.conut_time = time + 's';
						if (time === 0) {
							_this.getCodeBtnDisable = true;
						}
					});
					this.errorTip(response.data.info);
				} else {
					this.errorTip(response.data.info);
					this.getCodeBtnDisable = true;
				}
				
			}.bind(this), function (error) {
				this.errorTip(response.data.info);
				this.getCodeBtnDisable = true;
			}.bind(this));
			
		},
    }
});
