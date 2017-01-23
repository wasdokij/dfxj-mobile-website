<template>
	<div>
		<div class="form-item form-item-bg-gray">
			<label class="jin-icon jin-icon-mima font18 text-color-red-dark"></label>
			<input class="text-color-red-dark" type="password" name="newPassword" v-model="new_password" placeholder="新密码" />
		</div>
		<div class="form-item form-item-bg-gray">
			<label class="jin-icon jin-icon-mima font18 text-color-red-dark"></label>
			<input class="text-color-red-dark" type="password" name="rePassword" v-model="repassword" placeholder="确认新密码" />
		</div>
		<div class="padding-t-20">
			<button class="jin-btn jin-btn-red-gradient" v-on:click="changePassword">保存</button>
		</div>
	</div>
</template>

<script>
	import { XHRPost } from '../../js/ajax.js';
	export default {
		data () {
			return {
				new_password: '',
				repassword: '',
			}
		},
		methods: {
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
			changePassword: function () {
				const data = {
					new_password: '',
					repassword: '',
				}
				const pwd = /^(\w){6,15}$/.test(this.new_password);
				if (pwd) {
					data.new_password = encrypt(this.new_password);
				} else {
					this.errorTip('密码有误，只能输入6-15个字母、数字、下划线');
					return false;
				}
				if (this.repassword === this.new_password) {
					data.repassword = encrypt(this.repassword);
				} else {
					this.errorTip('两次密码不一致，请重新输入！');
					return false;
				}
				
				const load = layer.open({ type: 2,shadeClose: false})
				XHRPost('/oriental_treasure/register_and_login/modifyPassword', data, function (response) {
					layer.close(load);
					if (response.data.status === 1) {
						layer.open({
							content: '密码修改成功!',
							time: 2.5,
							end: function () {
								window.location.href = '/xiaojin/login_register/login/html';
							}
						});
					} else {
						this.errorTip(response.data.info);
					}
				}.bind(this));
			},
		},
	}
</script>