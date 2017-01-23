var dataUrl = '/oriental_treasure/Friend/mySubUser'; // page 大于0的整数
var filterDataUrl = '/oriental_treasure/Friend/filterSubUsers'; // page, search: 昵称、手机号或姓名, type: 0[全部] 1[注册用户] 2[微股东] 3[银卡vip] 4[金卡vip]
var loginUrl = '/oriental_treasure/register_and_login/login';
import Vue from 'vue';
import axios from 'axios';

function login() {
    axios.post(loginUrl, {
        cellphone: encrypt('15878193546'),
        password: encrypt('123456')
    }).then(function (res) {
        console.log('loginres', res);
        if (res.data.status === 1) {
            window.isLogin = true;
        }
    })
}

login();

function bindFastClick() {
    // 启动fastclick
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function(){
            FastClick.attach(document.body);
        }, false);
    }
}
bindFastClick();
// 搜索框
window.app = new Vue({
    el: '#container',
    data: {
        search: '',
        isFocus: false,
        data: {},
        my_inviting: {},
        listRows: 10, // 每次返回10条数据
        other_count: {
            gold_count: 0, // 金卡
            gudong_count: 0, // 微股东
            silver_count: 0, // 银卡
            register_count: 0 // 注册用户
        }, // 用户分类信息
        totalRows: 0,
        page: '0',

    },
    computed: {

    },
    mounted: function () {
        // if (window.isLogin) {
            console.log('success333');
            this.$nextTick(function () {
                axios.post(dataUrl, {
                    page: encrypt('1')
                }).then(function (res) {
                    console.log('res', res);
                    this.assignData(res.data);
                }.bind(this))
            });
        // }
    },
    directives: {
        focus: {
            update(el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    },
    methods: {
        cancelSearch() {
            this.isFocus = false;
        },
        focusSearch() {
            this.isFocus = true;
        },
        clearSearch() {
            this.search = '';
        },
        assignData(dataOld) {
            var data = Object.assign({}, dataOld);
            window.data = data;
            window.dataOld = dataOld;
            Object.keys(data).forEach(function (key) {
                if (Object.prototype.toString.call(data[key] === '[object Object]')) {
                    // app[key] = Object.assign({}, app[key], data[key]);
                    console.log('object', key, data[key]);
                } else if (Object.prototype.toString.call(data[key] === '[object Array]')) {
                    // app[key] = Object.assign([], app[key], data[key]);
                    console.log('array', key, data[key]);
                } else {
                    // app[key] = data[key];
                }
            })
        }
    }
});