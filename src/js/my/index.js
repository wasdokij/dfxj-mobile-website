//import Vue from 'vue';
import axios from 'axios';
import Banking from '../../components/my/Bankcard.vue';
import '../lib/layer.js';
import '../mock/test.js';
import '../lib/layer.css';
import '../../css/my/index.css'
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
var login=new Vue({
    el: '#container',
    data: {
        assets:"",
        integral:"",
        commissions:"",
        bonus:"",
        commission:"",
        info:{
            isA: false,
            isB: true,
            isC: false,
            isD: true
        }
    },
    methods: {
        showData: function () {
            var _self = this;
            $.ajax({
                type: 'GET',
                url: '/oriental_treasure/my_center/index',
                success: function (data) {
                    _self.assets = JSON.stringify(data.assets);
                    _self.integral = JSON.stringify(data.integral);
                    _self.commissions = JSON.stringify(data.commissions);
                    _self.bonus = JSON.stringify(data.bonus);
                    _self.commission = JSON.stringify(data.commission);
                }
            });
        },
        //提现
            goToLogin: function () {
                let data = {
                    assets: this.info.assets,
                    integral: this.info. integral
                };
                console.log(data);
                const _this = this;
                axios.get('/api_bank',data).then(function(response){
                    console.log(response);
                    if (response.data.status == 0||1) {
                        _this.info.isA = true;
                        _this.info.isB = false;
                    }else{
                        location.href = 'phone.html';
                    }
                    console.log(response.data.status == 0||1);//可以注释，只是用来显示输出
                    // console.log( _this.BankingShow);//可以注释，只是用来显示输出
                });
            },
        //积分商城
            getData: function () {
                let data = {
                    assets: this.info.assets,
                    integral: this.info. integral
                };
                console.log(data);
                const _this = this;
                axios.get('/api_bank',data).then(function(response){
                    console.log(response);
                    if (response.data.status == 0||1) {
                        _this.info.isC = true;
                        _this.info.isD = false;
                    }
                    console.log(response.data.status == 0||1);//可以注释，只是用来显示输出
                    // console.log( _this.BankingShow);//可以注释，只是用来显示输出
                });
            }

    }
});
