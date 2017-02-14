<template>
	<div>
		<header class="padding-t-20 padding-b-20">
			<nav class="ui-whitespace jin-justify-flex">
				<a href="/xiaojin/my/index.html" class="back-btn  ui-txt-white">
					<span class="jin-icon jin-icon-fanhui"></span>
				</a>
				<router-link to="/assets-rules" class="rule-btn  ui-txt-white">规则</router-link>
			</nav>
			<div class="title-text ui-whitespace ui-txt-white">信息资产</div>
			<div class="ui-whitespace ui-txt-white rlt">
				<p class="font35">{{info.my_asset}}</p>
		    	<span class="font12">我的信息资产</span>
		    	<router-link to="/record" class="get-record-btn">获得记录</router-link>
		   	</div>
		    
		</header>
		<div class="available-asset-wrap">
			<div class="available-asset">
		    	<i></i>
		    	<ul class="asset-level">
		    		<li class="left">
		    			<div class="other">{{info.asset.vip_down[0]}}</div>
		    			<span class="assets font14 ui-txt-white">{{info.asset.vip_down[1]}}</span>
		    		</li>
		    		<li class="center">
		    			<div class="current-asset asset-yellow">
	    					<span class="font18">{{info.vip_count}}</span>
	    					<div class="font12 line-h-nor">VIP人数</div>
		    			</div>
		    			<span class="assets font18 ui-txt-white">{{info.asset.vip_middle[1]}}</span>
		    		</li>
		    		<li class="right">
		    			<div class="other">{{info.asset.vip_up[0]}}</div>
		    			<span class="assets font14 ui-txt-white">{{info.asset.vip_up[1]}}</span>
		    		</li>
		    	</ul>
		    </div>
		</div>
		
	    <div class="ui-whitespace padding-t-15 padding-b-15 bg-white ui-border-b text-center">
	    	<span class="font12 ui-txt-muted">信息资产总量</span>
	    	<p class="font35">{{info.all_asset}}</p>
	    </div>
	    <ul class="ui-flex assets-info-flex padding-t-20 padding-b-20 bg-white ui-border-b">
	    	<li class="ui-whitespace ui-border-r">
	    		<p class="font24 line-h-nor">{{info.this_month_profit}}</p>
	    		<span class="font10 ui-txt-muted">平台当月待分红(元)</span>
	    	</li>
	    	<li class="ui-whitespace">
	    		<p class="font24 line-h-nor ui-txt-warning">{{info.my_last_month_profit}}</p>
	    		<span class="font10 ui-txt-muted">我的上月分红</span>
	    	</li>
	    </ul>
	    <ul class="ui-list jin-list-link margin-t-15 margin-b-15 ui-border-b">
	    	<li @click="linkFn">
	    		<div class="ui-list-info">
	    			<h4>信息资产排行榜</h4>
	    		</div>
	    	</li>
	    </ul>
	    <loading v-if="loadingShow"></loading>
	</div>
</template>
<script>
	import Loading from '../common/loading.vue';
	import { XHRGet } from '../../js/ajax.js';
	export default {
		data() {
			return {
				info: {
					all_asset: "--",
					asset: {
						vip_down: ['-','-'],
						vip_middle: ['-','-'],
						vip_up: ['-','-'],
					},
					my_asset: "--",
					my_last_month_profit: "--",
					this_month_profit: "--",
					vip_count: "--",
 				},
				loadingShow: true,
				title: '信息资产',
			};
		},
		components: {
			Loading
		},
		created: function() {
			document.title = this.title;
			this.getData();
		},
		activated: function () {
        	document.title = this.title;
        },
		methods: {
			goBack: function () {
				window.history.go(-1);
			},
			linkFn: function () {
				this.$router.push('/assets-list');
			},
			getData: function() {
				const _this = this;
				XHRGet('/oriental_treasure/MyCenter/info.html', {} , function (response) {
					console.log(response.data)
					_this.info = response.data.data;
					_this.loadingShow = false;
				});
			},
		}
	}
</script>