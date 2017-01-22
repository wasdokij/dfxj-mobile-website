<template>
	<div>
		<div class="form-item form-item-bg-gray">
			<label class="jin-icon jin-icon-mima font18 text-color-red-dark"></label>
			<input class="text-color-red-dark" type="password" name="newPassword" v-model="pwd" placeholder="新密码" />
		</div>
		<div class="form-item form-item-bg-gray">
			<label class="jin-icon jin-icon-mima font18 text-color-red-dark"></label>
			<input class="text-color-red-dark" type="password" name="rePassword" v-model="pwd" placeholder="确认新密码" />
		</div>
		<div class="padding-t-20">
			<button class="jin-btn jin-btn-red-gradient" v-on:click="goToLogin">保存</button>
		</div>
	</div>
</template>