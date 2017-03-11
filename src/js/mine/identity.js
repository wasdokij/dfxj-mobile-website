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
        this.getWXConfig();
    },
    data: {
        certInfo: {
            id_card_no: '',
            real_name: '',
            status: 0, // 0 尚未认证，1 只有文字资料，2 认证完成
            verify_code: '',
            counting: '',
            countingNum: 60
        },
        imgInfo: {
            people: {
                localId: '',
                serverId: ''
            },
            flag: {
                localId: '',
                serverId: ''
            }
        },
        currentPage: 'home',
    },
    computed: {
        visible() {
            // 身份认证面板
            let status = this.certInfo.status;
            let status0 = status == 0;
            let status1 = status == 1;
            let status2 = status == 2;
            let idPanel = status != 0;
            let panelInfo = status2 ? '认证通过' : '审核中';
            //
            let home = this.currentPage === 'home';
            let addPage = this.currentPage === 'addPage';
            // 身份证上传部分
            let imgInfo = this.imgInfo;
            let peopleImg = !imgInfo.people.serverId;
            let flagImg = !imgInfo.flag.serverId && !peopleImg;
            let uploadButton = !imgInfo.people.serverId || !imgInfo.flag.serverId;
            return { status0, status1, status2, idPanel, panelInfo, home, addPage, peopleImg, flagImg, uploadButton };
        }
    },
    methods: {
        isCert() {
            let self = this;
            api.isCert(res => {
                console.log('res', res);
                if (res.data.status === 1) tools.assignData(self.certInfo, res.data.data);

                api.layerOpen(res.data);
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
                    self.certInfo.status = 1;
                }
                api.layerOpen(res.data);
            }, function() {});

        },
        goBack() {
            history.back();
        },
        getVerifyCode() {
            _getVerifyCode(this);
        },
        getWXConfig(){
            api.getWXConfig({
                uri: encrypt(location.pathname)
            }, res => {
                console.log('wxconfiging', res);
                if (res.data.status == 1) {
                    let app = res.data.data;
                    console.log('app', app);
                    wx.config({
                        // debug: true,
                        debug: false,
                        appId: app.appId || app.appid,
                        timestamp: app.timestamp,
                        nonceStr: app.nonceStr || app.noncestr,
                        signature: app.signature,
                        jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'downloadImage']
                    });
                }

                api.layerOpen(res.data);
            }, () => {});
        },
        beginUpload() {
            let self = this;
            let type = 'people';
            try {
                type = self.imgInfo.people.serverId ? 'flag' : 'people';
                // alert('type ' + JSON.stringify(type));
            } catch (e) {
                // alert('type error ' + JSON.stringify(e));
            }
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    // alert('type again ' + JSON.stringify(type));
                    self.uploadImage(type, localIds[0]);
                }
            });
        },
        uploadImage(type, localId) {
            let self = this;
            // alert('type' + JSON.stringify(type));
            wx.uploadImage({
                localId: localId,
                isShowProgressTips: 1,
                success: function (res) {
                    let serverId = res.serverId;
                    api.uploadPhoto({
                        serverId: encrypt(serverId),
                        type: type === 'people' ? encrypt('id_card_temp') : encrypt('id_card_back_temp')
                    }, function (res) {
                        // 成功回调
                        if (res.data.status == 1) {
                            self.imgInfo[type].serverId = serverId;
                            self.imgInfo[type].localId = localId;
                        }
                        // alert(JSON.stringify(self.imgInfo));
                        // alert('res ' + JSON.stringify(res.data));
                    }, function (res) {
                        // 失败回调
                        // alert('fail ' + JSON.stringify(res.data));
                    })
                }
            })
        },
        confirmUpload() {
            let self = this;

            if (this.imgInfo.people.serverId && this.imgInfo.flag.serverId) {
                api.confirmPhoto(function (res) {
                    // alert('res ' + JSON.stringify(res));
                    if (res.data.status === 1) {
                        pageManager.go('home');
                        self.certInfo.status = 2;
                        self.isCert();
                    }
                    api.layerOpen(res.data);
                }, function(e) {
                    // alert('error ' + JSON.stringify(e));
                });
            }
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
            api.layerOpen(res.data);
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

// app.$watch('currentPage', function (val, oldVal) {
//     let self = this;
//
//     if (val === 'addPage') {
//         self.certInfo.status = 1;
//     }
//     if (val === 'home') {
//
//     }
// });

