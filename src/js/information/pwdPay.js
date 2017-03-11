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
//    data: {
//        disabled:true,
//        info: {
//            isA: true,
//            isB: false,
//            id_cart_phone:"",
//            bank_cart_phone:""
//        }
//    },
//    methods: {
//        //没有身份证验证时间
//        goAuthentication:function(){
//            XHRGet('/oriental_treasure/UserRealInfo/showInfo', {}, function (response) {
//                if (response.data.status === 0) {
//                    window.location.href = 'http://www.testapi.net/xiaojin/information/authentication.html'
//                }else{
//                    window.location.href = 'http://www.testapi.net/xiaojin/information/pwdPay2.html'
//                }
//
//            })
//        }
//    }
//})
import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import { XHRGet} from '../ajax.js';
import pwdPay from 'components/information/pwdPay.vue';
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component: pwdPay}
];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');
