<template>
	<div>
		<div class="form-item form-item-bg-gray form-item-btn-r">
			<label class="jin-icon jin-icon-chongzhi font20 text-color-red-dark" style="margin-top: -16px;"></label>
			<input id="blur" class="text-color-red-dark" type="tel" name="phone" v-model="phone" placeholder="手机号" />
			<span class="code-btn" @click.prevent="getCode" v-if="getCodeBtnDisable">
				{{ conut_time === 0 ? '重新获取' : '获取验证码' }}
			</span>
			<span class="code-btn" disabled v-if="getCodeBtnDisable == false">{{ conut_time }}</span>
		</div>
		<div class="form-item form-item-bg-gray">
			<label class="jin-icon jin-icon-xinxi font18 text-color-red-dark"></label>
			<input class="text-color-red-dark" type="text" name="code" v-model="code" placeholder="输入验证码"/>
		</div>
		<div class="padding-t-20">
			<button class="jin-btn jin-btn-red-gradient" @click="goToNext">下一步</button>
		</div>
	</div>
	
</template>

<script>
	import { XHRPost } from '../../js/ajax.js';
	import { countdown } from '../../js/tools.js';
	export default {
		data () {
			return {
				phone: '',
				code: '',
				conut_time: 60,
				getCodeBtnDisable: true,
			}
		},

		methods: {
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
					exist: encrypt('1')
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
			goToNext: function () {
				const data = {
					cellphone: '',
					verify_code: '',
				}
				const telResault = this.checkPhone(this.phone);
				if (telResault) {
					data.cellphone = encrypt(this.phone)
				} else {
					this.errorTip('手机号码有误！');
					return false;
				}
				if (this.code !== '') {
					data.verify_code = encrypt(this.code);
				} else {
					this.errorTip('请输入验证码！');
					return false;
				}
				XHRPost('/oriental_treasure/register_and_login/forgetPassword',data, function (response) {
					console.log(response)
					if (response.data.status === 1) {
						this.$emit('go-to-next')
					} else {
						this.errorTip(response.data.info)
					}
					
				}.bind(this));
			}
		}
	}
</script>