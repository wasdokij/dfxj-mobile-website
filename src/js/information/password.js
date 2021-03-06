//import Vue from 'vue';
//import axios from 'axios';
//import '../lib/layer.js';
//import '../lib/layer.css';
//import { XHRGet } from '../ajax.js';
//
//var vm = new Vue({
//    el:'#container',
//    data:{
//        info : {
//            name: '',
//            yqr: '',
//            phone: ''
//        }
//    },
//    mounted: function () {
//        const _this = this;
//        XHRGet('/oriental_treasure/MySeting/index', {}, function (response) {
//            _this.info.name = response.data.data.user_name;
//            _this.info.yqr = response.data.data.inviting_people;
//            _this.info.phone = response.data.data.cellphone;
//        })
//    }
//});


import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import { XHRGet} from '../ajax.js';
import Password from 'components/information/password.vue';
//import name from 'components/information/name.vue';
//import phone from 'components/information/phone.vue';
//import inviter from 'components/information/inviter.vue';
//import mima from 'components/information/mima.vue';
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component:Password }
    //{ path: '/name', component:name },
    //{ path: '/phone', component:phone },
    //{ path: '/mima', component:mima },
    //{ path: '/inviter', component:inviter }

];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');
