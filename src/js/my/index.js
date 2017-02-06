//import Vue from 'vue';
import axios from 'axios';
import '../lib/layer.js';
import '../lib/layer.css';
import jinFooter from '../../components/common/footer.vue';
import { XHRGet } from '../ajax.js';

var login = new Vue({
    el: '#container',
    data: {
    	invite_url: '',
        can_user_money: "",
        info_asset: "",
        last_month_commission: "",
        last_month_divident: "",
        level_name: "",
        real_name: "",
        score: "",
        user_bank_count: "",
        wechat_avatar: "",
        nowMonth: "",
        nowDate: "",
        nowStr: "",
        info: {
            isA: false,
            isB: true,
            isC: false,
            isD: true,
            isE:false,
            isF:true
        }
    },
    components: {
        jinFooter
    },
    mounted: function () {
        const _this = this;
        XHRGet('/oriental_treasure/my_center/index', {}, function (response) {
        	console.info(response.data.data.user_sn)
        	_this.invite_url = '/xiaojin/index/invite.html?user_sn=' + response.data.data.user_sn;
            var date = new Date();
            var a = new Array("日", "一", "二", "三", "四", "五", "六");
            var week = new Date().getDay();
            var str = a[week];
            _this.nowMonth = date.getMonth();
            _this.nowDate = date.getDate();
            _this.nowStr = str;
            _this.can_user_money = response.data.data.can_user_money,
                _this.info_asset = response.data.data.info_asset,
                _this.last_month_commission = response.data.data.last_month_commission,
                _this.last_month_divident = response.data.data.last_month_divident,
                _this.level_name = response.data.data.level_name,
                _this.score = response.data.data.score,
                _this.wechat_avatar = response.data.data.wechat_avatar
            //
            if(response.data.data.real_name === ''){
                _this.real_name = "未验证";
            }else{
                _this.real_name = response.data.data.real_name;
            }
            //
            if(response.data.data.user_bank_count === ''){
                _this.user_bank_count = "未提交";
            }else{
                _this.user_bank_count = response.data.data.user_bank_count;
            }
        });

    },

    methods: {
    	//路由导航
    	changeLouter: function (url) {
    		window.location.href = url;
    	},
        //提现
        getWithdrawal: function () {
            //let data = {
            //assets: this.info.assets,
            //integral: this.info.integral
            //};
            //console.log(data);
            const _this = this;
            XHRGet('/oriental_treasure/my_center/index', {}, function (response) {
                console.log(response);
                if (response.data.status == 1) {
                    window.location.href = 'http://jin.weigudong.cn/index.php/Withdraw/widthdrawal.html'

            }else{
                    _this.info.isA = true;
                    _this.info.isB = false;
                }
            });
        },
        //积分商城
        getIntegral: function () {
            //let data = {
            //assets: this.info.assets,
            //integral: this.info. integral
            //};
            //console.log(data);
            const _this = this;
            XHRGet('/oriental_treasure/my_center/index', {}, function (response) {
                console.log(response);
                if (response.data.status == 1) {
                   // window.location.href = '#'
                    _this.info.isE=true;
                    _this.info.isF=false;

                } else {
                    _this.info.isC = true;
                    _this.info.isD = false;
                }

            });
        },
        //未实名关闭
        getShutDown: function () {
            this.info.isA = false;
            this.info.isB = true;
        },
        //绑定银行卡关闭
        getClone: function () {
            this.info.isC = false;
            this.info.isD = true;
        },
        //功能正在开发中
        getBill:function(){
            this.info.isE = true;
            this.info.isF = false;
        },
        //我知道了
        getKnow:function(){
            this.info.isE = false;
            this.info.isF = true;
        }


    }
})
