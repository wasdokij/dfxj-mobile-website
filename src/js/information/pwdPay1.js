//import Vue from 'vue';
//import axios from 'axios';
//import '../mock/test.js';
//import '../lib/layer.js';
//import '../lib/layer.css';
//import { countdown } from '../tools.js';
//import { XHRGet} from '../ajax.js';
//import { XHRPost} from '../ajax.js';
//var login = new Vue({
//    el: "#container",
//    data : {
//        disabled:true,
//        info: {
//            ypwd:"",
//            xpwd:"",
//            xpwd1:""
//        }
//
//    },
//    methods: {
//        //失去焦点事件
//        test:function(){
//            const _this = this;
//            if(this.info.ypwd!=""&&this.info.xpwd!=""&&this.info.xpwd1!=""){
//                _this.disabled = false;
//            }
//        },
//        //错误提示方法
//        errorTip: function (msg) {
//            layer.open({
//                content: msg,
//                btn: ['确定'],
//                yes: function () {
//                    layer.closeAll();
//                }
//            });
//        },
//        successTip: function (msg) {
//            layer.open({
//                content: msg,
//                btn: ['确定'],
//                yes: function () {
//                    window.location.href = 'http://www.testapi.net/xiaojin/information/password.html'
//                }
//            });
//        },
//        //保存事件
//        goBaocun: function () {
//            const data = {
//                pay_password: encrypt(this.info.ypwd),
//                new_pay_password:encrypt(this.info.xpwd),
//                re_password:encrypt(this.info.xpwd1)
//            }
//            //const _this = this;
//            XHRPost('/oriental_treasure/MySeting/editPayPassword', data, function (response) {
//                if (response.data.status === 1) {
//                    this.successTip(response.data.info);
//                    //this.successTip(1111);
//                }else{
//                    this.errorTip(response.data.info);
//                }
//                console.log(this.errorTip);
//            }.bind(this))
//        }
//
//    }
//})
import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import pwdPay1 from 'components/information/pwdPay1.vue';
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component: pwdPay1}
];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');
