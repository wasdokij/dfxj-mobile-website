<template>
	<div class="search">
		<ul class="ui-list jin-list  ui-border-tb">
            <li class="ui-border-t" v-for="item in list">
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
       	<div class="assets-default text-center" v-if="nullData">
       		<img src="/jin2.0/images/null-result.png"/>
       		<p class="ui-txt-muted font14">搜索不到任何信息</p>
       	</div>
       	<loading v-show="loadingShow"></loading>
	</div>
</template>
<script>
import Loading from '../common/loading.vue';
import { XHRGet } from '../../js/ajax.js';
	export default {
		data() {
			return {
				list: [],
				search: this.$route.query.search,
				nullData: false,
				loadingShow: true,
				title: '搜索',
			};
		},
		components: {
			Loading
		},
		created: function () {
			document.title = this.title;
			this.searchFn();
		},
		activated: function () {
        	document.title = this.title;
        },
		methods: {
			searchFn: function () {
				console.error(this.search)
				XHRGet('/oriental_treasure/MyCenter/asset_search',{ search: this.search }, function (response) {
					console.log (response.data)
					this.loadingShow = false;
					this.list = response.data.data;
					if (response.data.status === 0) {
						this.nullData = true;
					}
				}.bind(this))
			},
		},
	}
</script>
<style scoped="scoped">
	.assets-default {
		margin-top: 40px;
	}
</style>