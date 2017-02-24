
import Mock from 'mockjs';

const Random = Mock.Random;
Random.image();
Random.cname();
Random.id();

Mock.setup({
	timeout: 2000
});


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

	'list|5-10': [{
		'userName': '@cname',
		'avatar': '@image',
		'ranke|+1': 1,
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

//登陆注册

Mock.mock('/api_login',{
	'status|0-1': 0,
	'info': '登陆成功！'
});

////个人中心
Mock.mock('/api_personal_center',{
	'user': {
		'userId': '021322',
		'userSn': '4001365',
		'userName': '@cname',
		'avatar': '@image',
		'level|1-5': 1,
	},
	'isIdCard|0-1': 1,//是否认证
	'isBankCard|0-1': 1,//是否添加银行卡
	'isBase|0-1': 1,//是否绑定基站
	'isCom|0-1': 0,//是否开社区店
	'isBindPhone|0-1': 0,//是否已经绑定手机号
	//列表信息
	'listInfo': {
		'wallet': '105.12',
		'assets': '2,000',
		'bank': '建设银行',
		'idName': '@cname',//实名认证姓名
		'shopRecord|0-100': 1,//购物记录
		'baseStation|0-5': 0,//基站数量
		'order|0-1000': 0,//已下单
		'comAddress': '[南宁]百花苑社区店',
	}
});
//information页面
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
	'info': ""
});
