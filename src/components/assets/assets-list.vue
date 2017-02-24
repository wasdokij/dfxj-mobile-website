<template>
	<div class="ui-whitespace asset-list-wrap body-ba" 
		v-infinite-scroll="loadMore" 
		infinite-scroll-disabled="busy" 
		infinite-scroll-distance="0"
	>
		<div v-if="loadingShow === false">
		    <div class="ui-searchbar inupt-rgba ui-po-re30">
		        <i class="ui-icon ui-icon-search ui-icon-clor" @click="getSearchOption"></i>
		        <div class="ui-searchbar-input ">
		        	<input type="search" v-model="searchOption" placeholder="搜索用户排名" @keyup.enter="getSearchOption">
		        </div>
		    </div>
		    <div class="asset-list-banner">
		        <img src="/jin2.0/images/assets/infoset-header.png" width="100%">
		    </div>
		    <div class="bg-white">
		        <ul class="asset-list-before3 ui-whitespace">
		            <li v-for="item in firstThree">
		                <div class="ui-avatar" v-bind:class="{'ui-avatar-lg': item.number == 1 }">
		                    <span v-bind:style="{backgroundImage: 'url('+ item.wechat_avatar +')'}"></span>
		                </div>
		                <i class="asset-posi-ab ui-non1" v-bind:class="{'ui-non2': item.number == 1 }">{{item.number}}</i>
		                <div class="margin-t-5 text-center">
		                    <h4 class="ui-nowrap">{{item.user_name}}</h4>
		                    <div class="font16 line-h-nor" v-bind:class="{'ui-txt-warning': item.number == 1 }">{{item.amount}}</div>
		                </div>
		            </li>
		        </ul>
		        <ul class="ui-list jin-list  ui-border-tb">
		            <li class="ui-border-t" v-for="item in list">
		                <div class="headline">{{item.number > 99 ? '-' : item.number}}</div>
		                <div class="ui-avatar-s">
		                    <span v-bind:style="{backgroundImage: 'url('+ item.wechat_avatar +')'}"></span>
		                </div>
		                <div class="ui-list-info">
		                    <h4 class="ui-nowrap">{{item.user_name}}</h4>
		                    <p class="margin-t-5 font12 ui-txt-info line-h-nor">排行({{item.number}})</p>
		                </div>
		                <div class="text-right">
		                    <i class="font16">{{item.amount}}</i>
		                    <p class="ui-txt-muted line-h-nor font12">信息资产</p>
		                </div>
		            </li>
		        </ul>
		        <div class="ui-loading-wrap ba-wi" v-if="loadMoreTip">
			        <p class="font14 ui-txt-info">加载中</p>
			        <i class="ui-loading"></i>
			    </div>
			    <div class="ui-loading-wrap ba-wi" v-if="loadend">
			        <p class="font14 ui-txt-info">——&nbsp;&nbsp;&nbsp;扯这么久，终于到底了&nbsp;&nbsp;&nbsp;——</p>
			    </div>
		    </div>
		    <ul class="ui-list jin-list k-list-link container ui-border-t bottom-po-fi">
			    <li class="ui-border-t">
			        <div class="ui-avatar-s">
			            <span v-bind:style="{backgroundImage: 'url('+ my_asset.wechat_avatar +')'}"></span>
			        </div>
			        <div class="ui-list-info">
			            <h4 class="ui-nowrap">{{my_asset.user_name}}</h4>
			            <p class="margin-t-5 font12 ui-txt-info line-h-nor">排行({{my_asset.number}})</p>
			        </div>
			        <div class="text-right">
			            <i class="font16">{{my_asset.amount}}</i>
			            <p class="ui-txt-muted line-h-nor font12">信息资产</p>
			        </div>
			    </li>
			</ul>
			
		</div>
		<loading v-if="loadingShow"></loading>
	</div>
</template>
<script>
import Loading from '../common/loading.vue';
import { XHRGet } from '../../js/ajax.js';
	export default {
		data() {
			return {
				my_asset: {},
				firstThree: [],
				list: [],
				busy: false,
				loadingShow: true,
				page: 1,
				loadMoreTip: false,
				loadend: false,
				searchOption: '',
				title: '信息资产排行榜',
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
			getData: function() {
				XHRGet('/oriental_treasure/MyCenter/ranking', {} , function (response) {
					this.loadingShow = false;
					console.log(response.data)
					const data = response.data.data;
					this.my_asset = data.my_asset;
					this.firstThree = data.rank_list.top3;
					this.list = data.rank_list.list;
					
				}.bind(this));
			},
			loadMore: function(page) {
				this.loadMoreTip = true;
				this.page = this.page + 1;
				this.busy = true;
				console.info(this.page)
				const data = {
				    page: this.page,
				}
				XHRGet('/oriental_treasure/MyCenter/get_ranking', data , function (response) {
					console.log('分页请求的数据',response.data)
					this.busy = false;
					this.loadMoreTip = false;
					const data = response.data.data.rank_list;
				    for (let i = 0; i < data.list.length; i++) {
				        this.list.push(data.list[i]);
				    }
				    
				    if (data.list.length === 0) {
				    	this.loadend = true;
				    	this.busy = true;
				    }
				}.bind(this))
			},
			getSearchOption: function () {
				console.info(this.searchOption)
				this.$router.push({
					path: '/search',
					query: { search: this.searchOption }
				});
			},
		},
	}
</script>
<style scoped>
	.asset-list-wrap {
		min-height: 100vh;
	}
</style>