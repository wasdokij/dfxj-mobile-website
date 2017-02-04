import Loading from '../../components/common/loading.vue';
import { XHRGet } from '../ajax.js';
import '../mock/test.js';

var assets = new Vue({
	el: '#assets',
	data: {
		info: {
			first: {
				vip: '-',
				assets: '-'
			},
			current: {
				vip: '-',
				assets: '-'
			},
			last: {
				vip: '-',
				assets: '-'
			},
			vipNumber: '-',
			assetsTotal: '-',
			waiteFh: '-',
			lastMonthFh: '-',
			userAssets: '-',
		},
		loadingShow: true
	},
	components: {
		Loading
	},
	created: function() {
		this.getData();
	},
	methods: {
		getData: function() {
			const _this = this;
			XHRGet('/api_assets', {} , function (response) {
				console.log('assetsInfo',response)
				_this.info = response.data;
				_this.loadingShow = false;
			});
		},
	}
});
