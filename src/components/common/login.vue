<template>
	<div class="fixed-wrap container">
		<div class="login" id="login">
			<header class="text-center">
				<img class="ver-middle" src="../../images/login/logo-reg.png" width="160"/>
			</header>
			<div class="ui-whitespace">
				<div class="form-item">
					<label class="k-icon k-icon-shouji1 font22 ui-txt-muted"></label>
					<input type="tel" name="phone" v-model="phone" placeholder="手机号" />
				</div>
				<div class="form-item">
					<label class="k-icon k-icon-mima font20 ui-txt-muted"></label>
					<input type="password" name="phone" v-model="pwd" placeholder="登陆密码" />
				</div>
				<div class="forget-password text-right"><a href="#">忘记密码？</a></div>
				<div class="margin-t-15">
					<button class="weui-btn k-btn-yellow" v-on:click="goToLogin">登陆</button>
				</div>
				<p class="margin-t-15 text-center font14">
					<a class="ui-txt-default" href="../register/register.html">注册账号</a>
				</p>
				<div class="padding-t-20">
					<div class="weui-loadmore weui-loadmore_line" style="width: 100%;">
					    <span class="weui-loadmore__tips font12">使用第三方账号登陆</span>
					</div>
				</div>
				<div class="text-center" style="margin-top: -10px;">
					<a href="#"><img src="../../images/login/weixin.png" width="40" height="40"/></a>
					<p class="font12">微信登陆</p>
				</div>
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
.login {
    position: relative;
    width: 100%;
    min-height: 570px;
    height: 100%;
    background-image: url(../../images/register/login-bg.png);
    background-position: left;
    background-size: 100%;
    background-repeat: repeat-y;
}
</style>