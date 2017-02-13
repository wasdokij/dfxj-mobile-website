import Vue from 'vue';
import * as api from './api';
import * as tools from '../tools';
// import VueRouter from 'vue-router';
// import Vuex from 'vuex';
// Vue.use(VueRouter);
// Vue.use(Vuex);

document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
}, false);

window.app = new Vue({
    el: '#container',
    created() {
        let self = this;
        // 拿到银行卡列表
        api.getCard(function (res) {
            console.log('res222', res);
            let bankCards = res.data;
            if (bankCards.status !== 0) {
                Object.keys(self.bankCards).forEach(function (key) {
                    self.bankCards[key] = tools.deepClone(bankCards[key]);
                });
            }
            if (bankCards.status === 0) {
                // 啥都不做
            }
        }, function (err) {
            console.error('err', err);
        });
        // 是否实名认证
        api.isCert(function (res) {
            if (res.data.status === 1) {
                self.isCert = true;

            }
        }, () => {});
    },
    data: {
        bankCards: {
            data: [],
            status: 0,
            info: '',
            totalRows: 0
        },
        isCert: false,
        currentPage: 'home',
        certDialog: false
    },
    computed: {
        visible() {
            let cardNum = this.bankCards.data.length;
            let home = this.currentPage === 'home';
            let addPage = this.currentPage === 'addPage';
            let hasCard = cardNum > 0 && home;
            let nullResult = cardNum === 0 && home;
            return {
                home, addPage, cardNum, hasCard, nullResult
            }
        }
    },
    methods: {
        goBack() {
            history.back();
        },
        goAddCard() {
            if (this.isCert) {
                console.log('heheh');
                pageManager.go('addPage');
            } else {
                this.certDialog = true;
            }
        },
        closeDialog() {
            this.certDialog = false;
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
