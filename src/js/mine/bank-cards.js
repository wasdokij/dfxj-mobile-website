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

let _getVerifyCode = tools._debounce(fnFactory, 100);

window.app = new Vue({
    el: '#container',
    created() {
        let self = this;
        // 拿到银行卡列表
        this.getCard();
        // 是否实名认证
        api.isCert(function (res) {
            if (res.data.status === 1) {
                self.isCert = true;
                tools.assignData(self.ownerInfo, res.data.data);
            }
            api.layerOpen(res.data);
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
        ownerInfo: {
            id_card_no: '',
            real_name: ''
        },
        cardAdding: {
            bank_name: '',
            bank_card_no: '',
            verify_code: '',
            counting: false,
            countingNum: 60,
            cellphone: '',
            dialogShow: false,
            message: ''
        },
        cardSelected: {
            visible: false,
            bank_card_no: '',
            bank_name: '',
            id: ''
        },
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
                pageManager.go('addPage');
            } else {
                this.certDialog = true;
            }
        },
        getVerifyCode() {
            _getVerifyCode(this);
        },
        bindCard() {
            let self = this;
            let { bank_name, bank_card_no, verify_code } = this.cardAdding;
            if ( bank_name && bank_card_no && verify_code) {
                api.addCard({
                    bank_name: encrypt(bank_name),
                    bank_card_no: encrypt(bank_card_no),
                    verify_code: encrypt(verify_code)
                }, function (res) {
                    if (res.data.status === 1) {
                        console.log('添加成功', res.data);
                        tools.assignData(self.cardAdding, api.getInitialCardAddingForm());
                        self.cardAdding.dialogShow = true;
                        self.cardAdding.message = res.data.info;
                        self.getCard();
                        pageManager.go('home');
                    }
                    if (res.data.status === 0) {
                        console.log('添加失败', res.data);
                        self.cardAdding.dialogShow = true;
                        self.cardAdding.message = res.data.info;
                    }
                }, function() {})
            }
        },
        getCard() {
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
                    tools.assignData(self.bankCards, api.getInitialBankCardList());
                    self.bankCards.data = [];
                }
            }, function (err) {
                console.error('err', err);
            });
        },
        selectCard(card) {
            tools.assignData(this.cardSelected, card);
            this.cardSelected.visible = true;
        },
        deleteCard() {
            let { id } = this.cardSelected;
            let self = this;

            api.deleteCard({
                id: encrypt(id)
            }, function (res) {
                if (res.data.status === 1) {
                    self.cardSelected.visible = false;
                    self.getCard();
                }
                if (res.data.status === 0) {
                    self.cardSelected.visible = false;
                }
                api.layerOpen(res.data);
            }, function() {});
        },
        closeDialog() {
            this.cardAdding.dialogShow = false;
        }
    },
    filters: {
        cellphone(val) {
            return val.slice(0, 3) + '****' + val.slice(7);
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

    if((/^1(3|4|5|7|8)\d{9}$/.test(self.cardAdding.cellphone))) {
        // self.cardAdding.counting = true;

        api.getVerifyCode({
            cellphone: encrypt(self.cardAdding.cellphone),
            exist: encrypt('1')
        }, function (res) {
            if (res.data.status === 1) {
                self.cardAdding.counting = true;
                // self.cardAdding.dialogShow = true;
            }
        }, function() {
            self.cardAdding.counting = false;
        })
    }
}

// watch
app.$watch('cardAdding.counting', function (val, oldVal) {
    // 自动绑定this为vue instance
    let self = this;
    console.log('val', val, 'oldVal', oldVal);
    if (val && !oldVal) {
        tools.countdown(60, function (num) {
            self.cardAdding.countingNum = num;
            if (num === 0) {
                setTimeout(function () {
                    self.cardAdding.counting = false;
                }, 1000);
            }
        })
    }
});