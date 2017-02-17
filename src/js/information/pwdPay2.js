//import Vue from 'vue';
//import axios from 'axios';
//import '../mock/test.js';
//import '../lib/layer.js';
//import '../lib/layer.css';
//import BackCart from 'components/information/bank_cart.vue';
//import { countdown } from '../tools.js';
//import { XHRGet} from '../ajax.js';
//import { XHRPost} from '../ajax.js';
//var login = new Vue({
//    el: "#container",
//    data: {
//        disabled:true,
//        info: {
//            //isA: true,
//            //isB: false,
//            id_cart_phone:"",
//            bank_cart_phone:""
//        }
//    },
//
//    methods: {
//
//        //失去焦点事件
//        test: function () {
//            const _this = this;
//            if (this.info.id_cart_phone != "" && this.info.bank_cart_phone != "" ) {
//                _this.disabled = false;
//            }
//        },
//        //选择银行进行验证
//        goGetbank:function(){
//            this.info.isA = false;
//            this.info.isB = true;
//        }
//    }
//})


import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import pwdPay2 from 'components/information/pwdPay2.vue';
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component: pwdPay2}
    //{path: '/bank', component:BackCart }
];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');
