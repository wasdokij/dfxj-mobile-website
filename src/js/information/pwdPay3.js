import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import pwdPay3 from 'components/information/pwdPay3.vue';
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component: pwdPay3}
];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');
