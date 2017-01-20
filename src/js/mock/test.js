
import Mock from 'mockjs';

const Random = Mock.Random;
Random.image();
Random.cname();
Random.id();

Mock.setup({
	timeout: 2000
})

//邀请页面
Mock.mock('/api_invite',{
	'userName': '@cname',
	'userId': '@id',
	'userSn': '@id',
	'userAvatar': '@image',
	'list|3': ['@image']
});

//信息资产排行
Mock.mock('/api_assets_list',{
	'user': {
		'userName': '@cname',
		'avatar': '@image',
		'ranke|+1': 1,
		'assetsNumber|100-10000': 200
	},
	'firstThree|3':[{
		'userName': '@cname',
		'avatar': '@image',
		'ranke|+1': 1,
		'assetsNumber|100-10000': 200
	}],
	'list|5-20': [{
		'userName': '@cname',
		'avatar': '@image',
		'ranke|+1': 4,
		'assetsNumber|100-10000': 200
	}],
});

//信息资产
Mock.mock('/api_assets',{
	'first': {
		'vip': '10万',
		'assets': '400'
	},
	'current': {
		'vip': '108586',
		'assets': '200'
	},
	'last': {
		'vip': '20万',
		'assets': '80'
	},
	'vipNumber|80000-200000': 0,
	'assetsTotal': '5,256,236',
	'waiteFh': '2315.00',
	'lastMonthFh': '200.00',
	'userAssets': '2,130',
});

Mock.mock('/api_login',{
	'status|0-1': 0,
	'info': '登陆成功！'
});
Mock.mock('/api_name',{
	'status|0-1': 0,
	'info': 'v'
});
Mock.mock('/api_information',{
	'status|0-1': 0,
	'info': '恭喜，修改成功！'
});
Mock.mock('/api_information01',{
	'status|0-1': 0,
	'info': " <div class='ui-loading-block show'> <div class='ui-loading-cnt'>  <i style='display:block;width:100%;height:80px;line-height:80px;font-size:60px;' class='k-icon-dagouxuanzhong'></i><p>成功</p>       </div></div>"




});
