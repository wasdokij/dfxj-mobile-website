<template>
	<div class="rules ui-whitespace padding-t-20 padding-b-20 bg-white">
		<div class="text-title clearfix">
			<span class="label pull-left margin-r-5"></span>
			<span class="text">信息资产规则</span>
		</div>
		<div class="text-ontent padding-l-15 padding-t-10 ui-txt-info">
			<p>成为正式微股东就有资格累计信息资产，根据信息资产的分配级别获取信息资产。</p>
			<img src="/jin2.0/images/assets/form.jpg" />
		</div>
		<div class="text-center margin-t-20 padding-t-20">
			<a class="rules-back-btn" @click="goBack">
				返回
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				title: '信息资产规则',
			}
		},
		created: function () {
        	document.title = this.title;
       },
       activated: function () {
        	document.title = this.title;
        },
		methods: {
			goBack() {
				this.$router.go(-1)
			},
		},
	}
</script>
<style scoped>
	.rules {
		min-height: 100vh;
	}
	.text-title .label {
		display: inline-block;
		width: 5px;
		height: 24px;
		border-radius: 10px;
		background-color: #FFCB00;
	}
	.text-title .text {
		font-weight: 600;
	}
	.text-ontent p {
		padding: 10px 0;
		font-size: 14px;
		line-height: 1.5;
	}
	.text-ontent img {
		padding: 5px 0;
		width: 100%;
		vertical-align: middle;
	}
	.rules-back-btn {
		display: inline-block;
		width: 150px;
		height: 40px;
		line-height: 42px;
		border: 1px solid #ccc;
		border-radius: 40px;
	}
</style>