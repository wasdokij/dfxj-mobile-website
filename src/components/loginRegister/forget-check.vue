<template>
	<div>
		<div class="form-item form-item-bg-gray form-item-btn-r">
			<label class="jin-icon jin-icon-chongzhi font20 text-color-red-dark" style="margin-top: -16px;"></label>
			<input id="blur" class="text-color-red-dark" type="tel" name="phone" v-model="phone" placeholder="手机号" />
			<span class="code-btn">获取验证码</span>
		</div>
		<div class="form-item form-item-bg-gray">
			<label class="jin-icon jin-icon-xinxi font18 text-color-red-dark"></label>
			<input class="text-color-red-dark" type="text" name="code" v-model="code" placeholder="输入验证码"/>
		</div>
		<div class="padding-t-20">
			<button class="jin-btn jin-btn-red-gradient" v-on:click="nextStepFn">下一步</button>
		</div>
	</div>
	
</template>

<script>
	export default {
		props: ['nextStepFn']
	}
</script>