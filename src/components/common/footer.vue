
<template>
	<div class="margin-t-20">
		<div class="footer bg-white">
			<a v-bind:class="{ current: type === 1 }" :href="indexUrl" @click="setCurrentIndex(1)">
				<span class="jin-icon jin-icon-store font24"></span>
				<div class="text font10">首页</div>
			</a>
			<a v-bind:class="{ current: type === 2 }" :href="contactUrl" @click="setCurrentIndex(2)">
				<span class="jin-icon jin-icon-renmai font26"></span>
				<div class="text font10">人脉</div>
			</a>
			<a v-bind:class="{ current: type === 3 }" :href="foundUrl" @click="setCurrentIndex(3)">
				<span class="jin-icon jin-icon-earth font24"></span>
				<div class="text font10">发现</div>
			</a>
			<a v-bind:class="{ current: type === 4 }" :href="mineUrl" @click="setCurrentIndex(4)">
				<span class="jin-icon jin-icon-user font24"></span>
				<div class="text font10">我的</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			current: Number,
		},
		data () {
			return {
				type: 1,
				indexUrl: '/xiaojin/index/index.html',
				contactUrl: '/xiaojin/connection/connection.html',
				foundUrl: '/xiaojin/discover/index.html',
				mineUrl: 'xiaojin/my/index.html',
			}
		},
		created: function () {
			this.type = this.current;
		},
		methods: {
			setCurrentIndex: function (index) {
				this.type = index;
			},
		}
	}
</script>

<style scoped>
	.footer {
		display: -webkit-box;
		width: 100%;
		height: 55px;
		border-top: 1px solid #DADADA;
	}
	.footer a {
		display: -webkit-box;
		width: 100%;
		height: 55px;
		-webkit-box-align: center;
		-webkit-box-pack: center;
		-webkit-box-orient: vertical;
		-webkit-box-flex: 1;
		color: #000;
		box-sizing: border-box;
	}
	.footer a .jin-icon {
		line-height: 1;
	}
	.footer a .text {
		/*margin-top: 3px;*/
		line-height: 1;
	}
	.footer a:active,
	.footer a.current {
		position: relative;
		height: 60px;
		margin-top: -5px;
		padding-top: 5px;
		color: #fff;
		background: #FF3E2A;
		box-shadow: 0 0 10px 0 rgba(255,62,41,0.70);
	}
</style>