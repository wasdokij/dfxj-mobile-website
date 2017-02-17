//import Vue from 'vue';
//import axios from 'axios';
//import '../mock/test.js';
//import '../lib/layer.js';
//import '../lib/layer.css';
//import Loading from '../../components/common/loading.vue';
//import { countdown } from '../tools.js';
//import { XHRPost} from '../ajax.js';
//var login = new Vue({
//    el: '#container',
//    data: {
//        info:{
//        name:""
//        },
//        loadingShow: false
//    },
//    components: {
//        Loading
//    },
//    methods: {
//        errorTip: function (msg) {
//            layer.open({
//                content: msg,
//                btn: ['确定'],
//                yes: function () {
//                    layer.closeAll();
//                }
//            });
//        },
//        goToLogin: function() {
//            const data = {
//                user_name:encrypt(this.info.name)
//            };
//            const _this = this;
//            //console.log(this.info.name);
//                this.loadingShow = true;
//                XHRPost('/oriental_treasure/MySeting/editUserName', data, function (response) {
//                    //console.log(response);
//                    //console.log(data.input);
//                    _this.loadingShow = false;
//
//                    if (response.data.status === 1) {
//                        window.location.href = 'password.html'
//                    }else{
//                        _this.errorTip(response.data.info);
//                    }
//                });
//
//        }
//    }
//});


import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import name from 'components/information/name.vue';
import { countdown } from '../tools.js';

const routes = [
    { path: '/', component: name}
];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');
