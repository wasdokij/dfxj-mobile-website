//import Vue from 'vue';
import axios from 'axios';
import Banking from '../../components/my/Bankcard.vue';
import '../lib/layer.js';
//import '../mock/test.js';
import '../lib/layer.css';
//import '../../css/my/index.css'
import { XHRGet } from '../ajax.js';
//var login = new Vue({
//    el: "#container",
//    data: {
//        info:{
//            assets:"5600",
//            integral:"3300",
//            commissions:"678.85",
//            bonus:"3392",
//            commission:"1009.00",
//            isA:false,
//            isB:true,
//            isC:false,
//            isD:true
//        }
//        //BankingShow: false
//    },
//    //components: {
//    //    Banking
//    //},
//    methods:{
//        //goToLogin: function () {
//        //    let data = {
//        //        assets: this.info.assets,
//        //       integral: this.info.integral
//        //    };
//        //    this.info.isA = true;
//        //    this.info.isB = false;
//        //    //axios.post('/api_information',data).then(function(response){
//        //    //        console.log(response);
//        //    //if (response.data.status == 0||1) {
//        //    //    layer.open({
//        //    //        content: response.data.info,
//        //    //        btn: ['确定'],
//        //    //        yes: function () {
//        //    //            layer.closeAll();
//        //    //        }
//        //    //    });
//        //    //}
//        //    //});
//        //      },
//        goToLogin: function () {
//                let data = {
//                    assets: this.info.assets,
//                    integral: this.info. integral
//                };
//                console.log(data);
//                const _this = this;
//                axios.get('/api_bank',data).then(function(response){
//                    console.log(response);
//                    if (response.data.status == 0||1) {
//                        _this.info.isA = true;
//                        _this.info.isB = false;
//                    }
//                    console.log(response.data.status == 0||1);//可以注释，只是用来显示输出
//                   // console.log( _this.BankingShow);//可以注释，只是用来显示输出
//                });
//        },
//        getData: function () {
//            this.info.isC = true;
//            this.info.isD = false;
//        }
//
//    }
//
//});
var login = new Vue({
    el: '#container',
    data: {
        can_user_money:"",
        info_asset:"",
        last_month_commission:"",
        last_month_divident:"",
        level_name:"",
        real_name:"",
        score:"",
        user_bank_count:"",
        wechat_avatar:"",
        nowMonth:"",
        nowDate:"",
        nowStr:"",
        info:{
            isA: false,
            isB: true,
            isC: false,
            isD: true
        }


    },
    mounted: function () {
            const _this = this;
            XHRGet('/oriental_treasure/my_center/index', {},function (response) {
                var date = new Date();
                var a = new Array("日", "一", "二", "三", "四", "五", "六");
                var week = new Date().getDay();
                var str =a[week];
                _this.nowMonth = date.getMonth();
                _this.nowDate = date.getDate();
                _this.nowStr = str;
                _this.can_user_money = response.data.data.can_user_money,
                _this.info_asset = response.data.data.info_asset,
                _this.last_month_commission = response.data.data.last_month_commission,
                _this.last_month_divident = response.data.data.last_month_divident,
                _this.level_name = response.data.data.level_name,
                _this.real_name =response.data.data.real_name,
                _this.score = response.data.data.score,
                _this.user_bank_count =response.data.data.user_bank_count,
                _this.wechat_avatar=response.data.data.wechat_avatar,


                    console.log(response.data.data.can_user_money);//测试  可以删除
                    console.log(_this.info_asset);//测试  可以删除
            });
            //console.log(this.can_user_money);
        },

    methods: {
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
                        window.location.href = '#'
                    }else{
                        _this.info.isA = true;
                        _this.info.isB = false;
                    }
                    console.log(response.data.status);//可以注释，只是用来显示输出
                });
            },
        //积分商城
            getIntegral : function () {
                //let data = {
                    //assets: this.info.assets,
                    //integral: this.info. integral
                //};
                //console.log(data);
                const _this = this;
                XHRGet('/oriental_treasure/my_center/index', {},function(response){
                    console.log(response);
                    if (response.data.status == 1) {
                        window.location.href = '#'
                    }else{
                        _this.info.isC = true;
                        _this.info.isD = false;
                    }
                    console.log(response.data.status == 1);//可以注释，只是用来显示输出
                    // console.log( _this.BankingShow);//可以注释，只是用来显示输出
                });
            },
        //未实名关闭
        getShutDown:function(){
            this.info.isA = false;
            this.info.isB = true;
        },
        //绑定银行卡关闭
        getClone:function(){
            this.info.isC = false;
            this.info.isD = true;
        }


    }
});
