//import Vue from 'vue';
//import axios from 'axios';
//import '../lib/layer.js';
//import '../lib/layer.css';
//import jinFooter from '../../components/common/footer.vue';
//import { XHRGet } from '../ajax.js';
//
//var login = new Vue({
//    el: '#container',
//    data: {
//        invite_url: '',
//        can_user_money: "",
//        info_asset: "",
//        last_month_commission: "",
//        last_month_divident: "",
//        level_name: "",
//        real_name: "",
//        score: "",
//        user_bank_count: "",
//        wechat_avatar: "",
//        status:"",
//        //日期有关
//        nowMonth: "",
//        nowDate: "",
//        nowStr: "",
//        info: {
//            isA: false,
//            isB: true,
//            isC: false,
//            isD: true,
//            isE:false,
//            isF:true
//        }
//    },
//    components: {
//        jinFooter
//    },
//    mounted: function () {
//        //原生获取日期
//        var date = new Date();
//        var a = new Array("日", "一", "二", "三", "四", "五", "六");
//        var week = new Date().getDay();
//        var str = a[week];
//        this.nowMonth = date.getMonth();
//        this.nowDate = date.getDate();
//        this.nowStr = str;
//        const _this = this;
//       //请求数据
//        XHRGet('/oriental_treasure/my_center/index', {}, function (response) {
//            console.info(response.data.data.user_sn);
//            _this.invite_url = '/xiaojin/index/invite.html?user_sn=' + response.data.data.user_sn;
//            _this.status=response.data.status;
//            _this.can_user_money = response.data.data.can_user_money;
//            _this.info_asset = response.data.data.info_asset;
//            _this.last_month_commission = response.data.data.last_month_commission;
//            _this.last_month_divident = response.data.data.last_month_divident;
//            _this.level_name = response.data.data.level_name;
//            _this.score = response.data.data.score;
//            _this.wechat_avatar = response.data.data.wechat_avatar;
//            //
//            if(response.data.data.real_name === ''){
//                _this.real_name = "未验证";
//            }else{
//                _this.real_name = response.data.data.real_name;
//            }
//            //
//            if(response.data.data.user_bank_count === ''){
//                _this.user_bank_count = "未提交";
//            }else{
//                _this.user_bank_count = response.data.data.user_bank_count;
//            }
//        });
//
//    },
//
//    methods: {
//        //路由导航
//        changeLouter: function (url) {
//            window.location.href = url;
//        },
//        //提现要修改
//        getWithdrawal: function () {
//            const _this = this;
//                if (_this.user_bank_count == 0) {
//                    _this.info.isC = true;
//                    _this.info.isD = false;
//                }else{
//                    window.location.href = '/xiaojin/mine/bank_cards'
//                }
//        },
//        //银行卡
//        getBank: function () {
//            const _this = this;
//            if (_this.user_bank_count == 0) {
//                _this.info.isC = true;
//                _this.info.isD = false;
//            }else{
//                window.location.href = '/xiaojin/mine/bank_cards'
//            }
//        },
//        //积分商城
//        getIntegral: function () {
//            const _this = this;
//                if (_this.status == 1) {
//                    _this.info.isE=true;
//                    _this.info.isF=false;
//
//                } else {
//                    _this.info.isA = true;
//                    _this.info.isB = false;
//                }
//            console.log(_this.user_bank_count);
//        },
//        //未实名关闭
//        getShutDown: function () {
//            this.info.isA = false;
//            this.info.isB = true;
//        },
//        //绑定银行卡关闭
//        getClone: function () {
//            this.info.isC = false;
//            this.info.isD = true;
//        },
//        //功能正在开发中
//        getBill:function(){
//            this.info.isE = true;
//            this.info.isF = false;
//        },
//        //我知道了
//        getKnow:function(){
//            this.info.isE = false;
//            this.info.isF = true;
//        }
//
//    }
//})
import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import myIndex from 'components/my/index.vue';
import Password from 'components/information/password.vue';
import Name from 'components/information/name.vue';
import Phone from 'components/information/phone.vue';
import Phone01 from 'components/information/inviter01.vue';
import Inviter from 'components/information/inviter.vue';
import Mima from 'components/information/mima.vue';
import Dlmima from 'components/information/close.vue';
import Authentication from 'components/information/authentication.vue';
import PwdPay from 'components/information/pwdPay.vue';
import PwdPay1 from 'components/information/pwdPay1.vue';
import PwdPay2 from 'components/information/pwdPay2.vue';
import PwdPay3 from 'components/information/pwdPay3.vue';
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component: myIndex },
    { path: '/password', component: Password},
    { path: '/name', component: Name},
    {path: '/phone',component: Phone},
    { path: '/phone1', component: Phone01 },
    { path: '/mima', component: Mima},
    { path: '/dlmima', component: Dlmima},
    { path: '/inviter', component:Inviter},
    {path: '/authentication',component: Authentication},
    { path: '/pwdPay', component: PwdPay },
    { path: '/pwdPay1', component: PwdPay1},
    { path: '/pwdPay2', component: PwdPay2},
    {path: '/pwdPay3',component: PwdPay3}
];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');

