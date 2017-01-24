<template>
	<div class="tip-dialog-wrap container">
		<div class="tip-dialog">
			<div class="header">
				<div class="logo logo-1" v-if="config.type == 1"></div>
				<div class="logo logo-2" v-else-if="config.type == 2"></div>
				<div class="logo logo-3" v-else-if="config.type == 3"></div>
				<div class="logo logo-4" v-else-if="config.type == 4"></div>
				<div class="logo logo-5" v-else></div>
			</div>
			<div class="content ui-whitespace padding-t-5 padding-b-15">
				<h3 class="font18 text-center ui-txt-default">{{ config.title }}</h3>
				<p class="font14 ui-txt-info">{{ config.describe }}</p>
			</div>
			<ul class="action-list">
				<li class="action" v-on:click="dialogAction">{{ config.yesBtn.name }}</li>
				<li class="close ui-txt-warning" v-on:click="dialogClose">{{ config.noBtn.name }}</li>
			</ul>
		</div>
	</div>	
</template>
<script>
	//config 的配置项,配置项需要在父组件配置
	/*{
		type: 1, //类型，有1、2、3、4、5种，不同的图标
		title:　'您还未绑定手机号',
		describe: '您还未绑定手机号，无法操作此步骤，请先前往绑定手机号。',
		yesBtn: {
			name:　'去绑定', //确认按钮的文字
			method: null //确认回调
		},
		noBtn: {
			name:　'关闭', //关闭按钮的文字
			method: null //关闭回调
		},
	}*/
	export default {
		props: ['config'],
		methods: {
			dialogAction: function () {
				this.config.yesBtn.method()
			},
			dialogClose: function () {
				this.config.noBtn.method()
			},
		},
	}
</script>
<style>
	.tip-dialog-wrap {
		display: -webkit-box;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.2);
		-webkit-box-align: center;
		-webkit-box-pack: center;
	}
	.tip-dialog {
		width: 80%;
		background: rgba(255,255,255,.98);
	}
	.action-list li {
		height: 45px;
		line-height: 45px;
		text-align: center;
		border-top: 1px solid #eee;
	}
	.action-list li.action {
		color: #4990E2;
	}
	.tip-dialog .header {
		width: 100%;
		text-align: center;
	}
	.tip-dialog .header .logo {
		display: inline-block;
		width: 140px;
		height: 120px;
		vertical-align: middle;
		/*背景图片需要写在css文件内，因为写在.vue组件内路径会有问题*/
		/*background-image: url(../../images/icon-list-alert.png);*/
		background-position: 0 0;
	    background-repeat: no-repeat;
	    background-size: auto 108%;
	    /*background-color: #0074D9;*/
	}
	.tip-dialog .header .logo-1 {
		margin-top: -40px;
		background-position: 18px -5px;
	}
	.tip-dialog .header .logo-2 {
		margin-top: -40px;
		background-position: -180px 5px;
	}
	.tip-dialog .header .logo-3 {
		margin-top: -40px;
		background-position: -382px -6px;
	}
	.tip-dialog .header .logo-4 {
		margin-top: -40px;
		background-position: -570px -5px;
	}
	.tip-dialog .header .logo-5 {
		margin-top: -40px;
		background-position: -782px -4px;
	}
</style>

