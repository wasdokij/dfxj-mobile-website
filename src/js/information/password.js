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
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component:Password }
];
const router = new VueRouter({
    // ES6��д�﷨���൱��routes:routes
    routes
});
// ��󴴽�vueʵ��������
const app = new Vue({
    router
}).$mount('#container');
