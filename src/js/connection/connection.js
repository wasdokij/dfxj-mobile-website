var dataUrl = '/oriental_treasure/Friend/mySubUser'; // page 大于0的整数
var filterDataUrl = '/oriental_treasure/Friend/filterSubUsers'; // page, search: 昵称、手机号或姓名, type: 0[全部] 1[注册用户] 2[微股东] 3[银卡vip] 4[金卡vip]
var loginUrl = '/oriental_treasure/register_and_login/login';
var backgroundMap = {
    1: '注册用户',
    2: '微股东',
    3: '银卡VIP',
    4: '金卡VIP'
};
var styleMap = {
    1: { background: '#fff', color: '#000', border: '1px solid #dadada'},
    2: { background: '#f75c5c', color: '#fff'},
    3: { background: '#dadada', color: '#fff'},
    4: { background: '#ffc234', color: '#fff'},
};
import Vue from 'vue';
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll';
new Vue({
  directives: {infiniteScroll}
});

function login() {
    axios.post(loginUrl, {
        cellphone: encrypt('15878193546'),
        password: encrypt('000000')
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
        isSearch: false,
        searchResult: [],
        data: {
            C: [{
                user_name: '',
                wechat_avatar: '',
                user_sn: '',
                real_name: ''
            }]
        },
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
        nullResult: function () {
            return this.searchResult.length === 0 && this.isSearch;
        },
        totalPage: function () {
            return Math.ceil(this.totalRows / this.listRows);
        }
    },
    mounted: function () {
        // if (window.isLogin) {
            console.log('mounted');
            this.$nextTick(function () {
                axios.post(dataUrl, {
                    page: encrypt('1')
                }).then(function (res) {
                    console.log('res', res);
                    this.assignData(app, res.data);
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
        assignData(obj, data) {
            Object.keys(data).forEach(function (key) {
                obj[key] = deepClone(data[key]);
            })
        },
        badge(levelName) {
            // var levelName = this.my_inviting.level_name;
            var ret = {};
            Object.keys(backgroundMap).forEach(function (key, index) {
                if (backgroundMap[key] === levelName) {
                    ret = styleMap[key];
                }
            });
            return ret;
        },
        loadMore() {
            (debounce(trueLoadMore, 1000)).call(this);
        }
    }
});

function deepClone(data) {
    var t = type(data), o, i, ni;

    if(t === 'array') {
        o = [];
    }else if( t === 'object') {
        o = {};
    }else {
        return data;
    }

    if(t === 'array') {
        for (i = 0, ni = data.length; i < ni; i++) {
            o.push(deepClone(data[i]));
        }
        return o;
    }else if( t === 'object') {
        for( i in data) {
            o[i] = deepClone(data[i]);
        }
        return o;
    }
}

function type(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

function debounce(fn, delay){
  var timer = null; // 声明计时器

  var closure =  function(){
    var context = this;
    var args = arguments;
    if (timer) {
        return;
    }
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
      timer = null;
    }, delay);
  };

  return function () {
      closure.call(this);
  }
}

function trueLoadMore() {
    this.busy = true;
    console.log('begin');
    if (parseInt(this.page) < this.totalPage) {
        var page = (parseInt(this.page) + 1) + '';
        console.log('page', page);
        var _self = this;
        var tmp = [];
        var plainObj = {};

        axios.post(dataUrl, {
            page: encrypt(page)
        }).then(function (res) {
            console.log('res', res);
            var finalKey = '';
            Object.keys(res.data.data).forEach(function (key) {
                Object.keys(app.data).forEach(function (keyOwn) {
                    if (keyOwn === key) {
                        finalKey = keyOwn;
                        console.log('finalKey', finalKey);
                    }
                })
            });
            if (finalKey) {
                tmp = app.data[finalKey].concat(res.data.data[finalKey]);
            }
            _self.assignData(plainObj, res.data);
            Object.keys(plainObj.data).forEach(function (key) {
                app.data[key] = plainObj.data[key];
            });
            if (tmp.length > 0) {
                app.data[finalKey] = tmp;
            }
            delete plainObj.data;
            _self.assignData(app, plainObj);
            _self.busy = false;
        }.bind(_self))
    }
}