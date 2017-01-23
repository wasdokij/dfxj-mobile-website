<template>
    <div class="jin-wrap bg-white">
        <div class="home-top home-accept-bg"></div>
        <ul class="invite-accept-panel jin-box-center padding-b-20">
            <li class="invite-accept-input font14">
                 <input type="tel" v-model="phone" placeholder="输入您的手机号" />
            </li>
            <li class="invite-accept-input jin-justify-flex font14">
                <input type="text" v-model="code" placeholder="输入验证码" />
                <div class="invite-accept-gain font12" v-if="getCodeBtnDisable === true" @click="getCode">
                	{{ conut_time === 0 ? '重新获取' : '获取' }}
                </div>
                <div class="invite-accept-gain btn-gray font12" v-if="getCodeBtnDisable === false">
                	{{ conut_time }}
                </div>
            </li>
            <li class="invite-accept-input font14">
                 <input type="password" v-model="pwd" placeholder="设置登录密码" />
            </li>
            <li class="invite-accept-btn margin-t-15" @click="goToRegister">立即领取</li>
        </ul>
        <accept-text></accept-text>
    </div>
</template>
<style scoped>
	.btn-gray {
		background-color: #DDDDDD;
	}
   	.padding-tb-25 {
		padding-top: 25px;
		padding-bottom: 25px;
  	}
</style>
<script>
	import { XHRPost } from '../../js/ajax.js';
	import { countdown } from '../../js/tools.js';
	import acceptText from 'components/index/index-invite-accept-text.vue';
    export default{
        data () {
            return{
            	phone: '',
				code: '',
				pwd: '',
				inviting_sn: '',
				conut_time: 60,
				getCodeBtnDisable: true,
            }
        },
        components:{
            acceptText
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
					this.errorTip(error);
					this.getCodeBtnDisable = true;
				}.bind(this));
				
			},
			//提交注册资料
			goToRegister: function () {
			var config = {
				url: '/oriental_treasure/register_and_login/goRegister',
//				url: '/api_login',
				data: {
					cellphone: '',
					verify_code: '',
					password: '',
					inviting_sn: encrypt(this.inviting_sn),
				},
			}
			
			const tel = this.checkPhone(this.phone);
			if (tel) {
				config.data.cellphone = encrypt(this.phone);
			} else {
				this.errorTip('手机号码有误！');
				return false;
			}
			
			if (this.code) {
				config.data.verify_code = encrypt(this.code);
			} else {
				this.errorTip('请输入验证码');
				return false;
			}
			
			const pwd = /^(\w){6,15}$/.test(this.pwd);
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
					layer.open({
						content: response.data.info,
						time: 1.5,
						end: function () {
							window.location.href = '/xiaojin/index/index.html';
						}
					});

				} else {
					this.errorTip(response.data.info);
				}
			}.bind(this));
		},
	    }
    }
</script>
