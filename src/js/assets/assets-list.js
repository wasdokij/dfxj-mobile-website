
import Loading from '../../components/common/loading.vue';
import { XHRGet } from '../ajax.js';
import '../mock/test.js';

var assetsList = new Vue({
	el: '#assetsList',
	data: {
		user: {
			userName: '空店',
			avatar: '../../images/avatar.png',
			ranke: 0,
			assetsNumber: '0'
		},
		firstThree: [],
		list: [],
		loadingShow: true,
		loading: false,
		stopRequese: true,
	},
	components: {
		Loading
	},
	
	created: function() {
		this.getData();
		var page = 1;
	    window.addEventListener('scroll', function () {
	  	    var scrollTop = document.body.scrollTop; 
		    if(scrollTop + window.innerHeight >= document.body.clientHeight) {
		    	if (this.stopRequese) {
		    		page++;
		    		// 触发加载数据
		        	this.loadMore(page);
		    	} else {
		    		return false
		    	}
		        
		    }
	    }.bind(this));
	},
	
	methods: {
		getData: function() {
			const _this = this;
			XHRGet('/api_assets_list', {} , function (response) {
				console.log('assetsInfo',response)
				var firstThree = [],
				    moreList = [];
				
				for (let i = 0; i < response.data.list.length; i++) {
					if (i == 0) {
						firstThree[1] = response.data.list[i];
					} else if (i == 1) {
						firstThree[0] = response.data.list[i];
					} else if (i == 2) {
						firstThree[2] = response.data.list[i];
					} else {
						moreList.push(response.data.list[i]);
					}
				}
				_this.user = response.data.user;
				_this.loadingShow = false;
				_this.firstThree = firstThree;
				_this.list = moreList;
			})
		},
		loadMore: function(page) {
			this.stopRequese = false;
			console.info(page)
			XHRGet('/api_assets_list', {page: page} , function (response) {
				console.log('分页请求的数据',response.data.list)
				this.stopRequese = true;
				
//				this.list.connect(response.data.list)
			    for (let i = 0; i < response.data.list.length; i++) {
			        this.list.push(response.data.list[i]);
			    }
			}.bind(this))
		},
		
		search: function () {
			
		},
		
	}
});
