//所有get请求的地址都在这个文件配置，方便统一维护

//邀请页面
export const inviteApi = '/api_invite';

//信息资产排行榜
export const assetsListApi = 'api_assets_list';

// 登录
export const loginUrl = '/oriental_treasure/register_and_login/login';
export const loginPage = '/xiaojin/login_register/login';

/*人脉页面开始*/
export const connectionDataUrl = '/oriental_treasure/Friend/mySubUser'; // page: 大于0的整数

export const connectionSearchUrl = '/oriental_treasure/Friend/filterSubUsers'; // page, search: 昵称、手机号或姓名, type: 0[全部] 1[注册用户] 2[微股东] 3[银卡vip] 4[金卡vip]
/*人脉页面结束*/