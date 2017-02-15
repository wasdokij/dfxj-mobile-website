import Vue from 'vue';
import * as api from './api';
import * as tools from '../tools';

document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
}, false);

let _getVerifyCode = tools._debounce(fnFactory, 100);

window.app = new Vue({
    el: '#container',
    created() {
        this.isCert();
    },
    data: {
        certInfo: {
            id_card_no: '',
            real_name: '',
            status: '',
            verify_code: '',
            counting: '',
            countingNum: 60
        },
        currentPage: 'home'
    },
    computed: {
        visible() {
            let isCert = !!this.certInfo.status;
            let home = this.currentPage === 'home';
            let addPage = this.currentPage === 'addPage';
            return { isCert, home, addPage };
        }
    },
    methods: {
        isCert() {
            let self = this;
            api.isCert(res => {
                console.log('res', res);
                if (res.data.status === 1) tools.assignData(self.certInfo, res.data.data);
            }, function() {});
        },
        goNext() {
            let { id_card_no, real_name, verify_code } = this.certInfo;
            let self = this;
            api.signInID({
                id_card_no: encrypt(id_card_no),
                real_name: encrypt(real_name),
                verify_code: encrypt(verify_code)
            }, function (res) {
                if (res.data.status === 1) {
                    pageManager.go('addPage');
                }
            }, function() {});

        },
        goBack() {
            history.back();
        },
        getVerifyCode() {
            _getVerifyCode(this);
        }
    }
});

// 路由
window.pageManager = {
    _pages: [
        { url: '#', name: 'home'}, { url: '#add', name: 'addPage'}
    ],
    _defaultPage: { url: '#', name: 'home'},
    _find(key, value) {
        let page = null;
        for (let i = 0, len = this._pages.length; i < len; i++) {
            if (this._pages[i][key] === value) {
                page = this._pages[i];
                break;
            }
        }
        return page;
    },
    _go(page) {
        location.hash = page.url;
    },
    go(to) {
        let page = this._find('name', to);
        if (!page) {
            return;
        }
        this._go(page);
    },
    init(app) {
        console.log('init');
        let self = this;
        window.onhashchange = function () {
            let url = location.hash.indexOf('#') === 0 ? location.hash : '#';
            let page = self._find('url', url);
            if(page) app.currentPage = page.name;
        };

        let url = location.hash.indexOf('#') === 0 ? location.hash : '#';
        let page = self._find('url', url) || self._defaultPage;
        app.currentPage = page.name;
        return this;
    }
};

window.pageManager.init(app);

// 函数工厂
function fnFactory(app) {
    let self = app;

    // if((/^1(3|4|5|7|8)\d{9}$/.test(self.certInfo.cellphone))) {
        // self.certInfo.counting = true;

        api.getVerifyCode({
            // cellphone: encrypt(self.certInfo.cellphone),
            exist: encrypt('1')
        }, function (res) {
            if (res.data.status === 1) {
                self.certInfo.counting = true;
                // self.certInfo.dialogShow = true;
            }
        }, function() {
            self.certInfo.counting = false;
        })
    // }
}

// watch
app.$watch('certInfo.counting', function (val, oldVal) {
    // 自动绑定this为vue instance
    let self = this;
    console.log('val', val, 'oldVal', oldVal);
    if (val && !oldVal) {
        tools.countdown(60, function (num) {
            self.certInfo.countingNum = num;
            if (num === 0) {
                setTimeout(function () {
                    self.certInfo.counting = false;
                }, 1000);
            }
        })
    }
});

// 微信配置
