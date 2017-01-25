<template>
	<div class="fixed-wrap container">
		<div class="register" id="register">
			<header class="text-center">
				<img class="ver-middle" src="../../images/login/logo-reg.png" width="160"/>
			</header>
			<div class="ui-whitespace">
				<div class="form-item">
					<label class="k-icon k-icon-yonghu1 font22 ui-txt-muted" style="margin-top: -18px;"></label>
					<input type="text" name="name" v-model="name" placeholder="输入姓名" />
				</div>
				<div class="form-item">
					<label class="k-icon k-icon-shouji1 font22 ui-txt-muted"></label>
					<input type="tel" name="phone" v-model="phone" placeholder="输入手机号" />
				</div>
				<div class="form-item">
					<label class="k-icon k-icon-mima font20 ui-txt-muted"></label>
					<input type="password" name="phone" v-model="pwd" placeholder="设置登陆密码" />
				</div>
				<div class="text-right font12">邀请人：黄恩景</div>
				<div class="margin-t-15">
					<button class="weui-btn weui-btn_warn" v-on:click="goToRegister">注册</button>
				</div>
				<p class="margin-t-15 text-center font14">
					<a class="ui-txt-default" href="../login/login.html">已有账号，直接登陆</a>
				</p>
			</div>
		</div>
	</div>
</template>
<style>
header {
    height: 110px;
    line-height: 110px;
}
.form-item {
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    border-bottom: 1px solid #9B9B9B;
}
.form-item label {
    position: absolute;
    top: 50%;
    margin-top: - 15px;
}
.form-item input {
    width: 100%;
    height: 100%;
    padding: 5px 5px 5px 40px;
    font-size: 16px;
    border: none;
    border-radius: none;
    background: none;
}
.forget-password a {
    font-size: 12px;
    color: #000;
}
.fixed-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.register {
    position: relative;
    width: 100%;
    min-height: 570px;
    height: 100%;
    background-image: url(../../images/register/bg-art.png),url(../../images/register/login-bg.png);
    background-position: bottom,left;
    background-size: 100%,100%;
    background-repeat: no-repeat,repeat-y;
}
</style>