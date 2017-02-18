import { loginUrl, connectionDataUrl as dataUrl, connectionSearchUrl as searchUrl } from '../api-config';
import { debounce, deepClone, loginError } from '../tools';
import { backgroundMap, styleMap, searchTypeMap, bindFastClick} from './constants';
import Vue from 'vue';
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll';
import footerVue from '../../components/common/footer.vue';
Vue.use(infiniteScroll);
// login();
bindFastClick();

window.app = new Vue({
    el: '#container',
    components: {
        'footer-vue': footerVue
    },
    data: {
        peopleData: {
            data: {},
            page: 0,
            listRows: 10,
            totalRows: 0,
            other_count: {},
            my_inviting: {},
            status: 0
        },
        searchPeopleState: {
            searchType: '',
            search: ''
        },
        searchPeopleResult: {
            data: [],
            page: 0,
            listRows: 10,
            totalRows: 0,
            status : 0
        },
        busy: true,
        searchBusy: false, // 筛选页的搜索
        hash: ''
    },
    computed: {
        totalPage: function () {
            if (this.peopleData.status == 0) {
                return 1;
            }
            return Math.ceil(this.peopleData.totalRows / this.peopleData.listRows);
        },
        totalSearchPage: function () {
            if (this.searchPeopleResult.status == 0) {
                return 1;
            }
            return Math.ceil(this.searchPeopleResult.totalRows / this.searchPeopleResult.listRows);
        },
        searchBgWhite: function () {
            return this.visible.searchPage ? 'background: #fff' : '';
        },
        searchPlaceHolder: function () {
            var type = this.searchPeopleState.searchType;
            return type ? searchTypeMap[type] : '手机号/姓名/昵称';
        },
        visible: function () {
            // console.log('calculate');
            let searchPage = this.hash === '#search';
            let search = this.searchPeopleState.search;
            let data = this.searchPeopleResult.data;
            let searchType = this.searchPeopleState.searchType;
            let nullResult = data.length === 0 && searchType && !this.searchBusy;
            return {
                homePage: !this.hash,
                searchPage,
                searchType: !search && searchPage && !searchType,
                searchResult: data.length > 0 && searchPage,
                nullResult
            }
        },
        searchBusyComputed: function () {
            return this.searchBusy || !this.visible.searchPage;
        }
    },
    mounted: function () {
        console.log('mounteded');
        this.hash = window.location.hash;
        this.$nextTick(getPeopleData('1'));
    },
    directives: {
        focus: {
            // bind: function (el) {
            //     console.log('bind', arguments);
            // },
            inserted: function (el) {
                // console.log('inserted', arguments);
                el.focus();
            },
            update: function (el) {
                // console.log('update', arguments);
                el.focus();
            },
            // componentUpdated: function (el) {
            //     console.log('componentUpdated', arguments);
            // },
            // unbind: function (el) {
            //     console.log('unbind', arguments);
            // }
        }
    },
    methods: {
        clearSearch() {
            this.searchPeopleState.search = '';
            this.searchPeopleState.searchType = '';
            this.searchPeopleResult = {
                data: [],
                page: '',
                listRows: 10,
                totalRows: 0
            };
        },
        cancelSearch() {
            this.clearSearch();
            history.back();
        },
        badge(levelName) {
            var ret = {};
            Object.keys(backgroundMap).forEach(function (key, index) {
                if (backgroundMap[key] === levelName) {
                    ret = styleMap[key];
                }
            });
            return ret;
        },
        borderBottom(index) {
            if (index === this.searchPeopleResult.data.length - 1) {
                return 'add-border-bottom';
            }
            return;
        },
        loadMore() {
            this.busy = true;
            console.log('app.busy');
            console.time('app.busy');
            _loadMore();
        },
        enterSearchPage() {
            this.hash = '#search';
            window.history.pushState({ hash: '#search' }, null, '#search');
        },
        onSearch(e) {
            console.log('onSearch');
            if (!this.searchBusy) { // this.searchBusy初始状态是false
                this.searchBusy = true;
                if (this.searchPeopleState.search || true) {
                    console.log('beginSearch', arguments);
                    if (arguments[0]) {
                        this.searchPeopleResult = {
                            data: [],
                            page: 0,
                            listRows: 10,
                            totalRows: 0,
                            status: 0
                        };
                    }
                    _searchMore.call(this);
                } else {
                    this.searchBusy = false;
                }
            } else {
                console.log('这次请求被驳回');
            }

        },
        changeSearchType(type) {
            this.searchPeopleState.searchType = type;
            this.searchPeopleResult = {
                data: [],
                page: 0,
                listRows: 10,
                totalRows: 0,
                status: 0
            };
            this.onSearch();
        }
    },
    watch: {

    }
});

window.onpopstate = function () {
    app.hash = '';
};

function _loadMore() {
    let currentPage = parseInt(app.peopleData.page);
    let totalPage = parseInt(app.totalPage);
    if (currentPage < totalPage) {
        axios.post(dataUrl, { page: encrypt((currentPage + 1) + '')})
            .then(function (res) {
                console.log('res', res);
                if (res.data.status == 1) {
                    mergePeopleData(app.peopleData, res.data);
                } else if (res.data.status == 0) {
                    //
                }
                console.timeEnd('app.busy');
                // setTimeout(function () {
                //     app.busy = false;
                // }, 2000);
                app.busy = false;
            })
            .catch(function (e) {
                // catch 也会捕捉到then中的错误
                if (e) {
                    console.log('test for error', e);
                    // app.busy = false;
                }
            })
    } else {
        app.busy = false;
    }
}

function _searchMore() {
    let currentPage = parseInt(app.searchPeopleResult.page);
    let totalPage = parseInt(app.totalSearchPage);
    if (currentPage < totalPage) {
        axios.post(searchUrl, {
            search: encrypt(this.searchPeopleState.search),
            type: encrypt(this.searchPeopleState.searchType || '0'),
            page: encrypt((currentPage + 1) + '')
        })
            .then(function (res) {
                console.log('res', res);
                if (res.data.status == 1) {
                    let tmp = Object.assign([], res.data.data);
                    delete res.data.data;
                    assignData(this.searchPeopleResult, res.data);
                    this.searchPeopleResult.data = this.searchPeopleResult.data.concat(tmp);
                }
                if (res.data.status == 0) {
                    this.searchPeopleResult = {
                        data: [],
                        page: 0,
                        listRows: 10,
                        totalRows: 0,
                        status: 0
                    };
                }
                this.searchBusy = false;
        }.bind(this))
            .catch(function () {
                this.searchBusy = false;
        }.bind(this))
    } else {
        app.searchBusy = false;
    }
}

function mergePeopleData(obj, data) {
    let objKeyArray = Object.keys(obj.data);
    let dataKeyArray = Object.keys(data.data);
    let finalKey = '';
    let tmp = '';
    let firstTime = true;
    // 拿到finalKey
    objKeyArray.forEach(function (objKey) {
        dataKeyArray.forEach(function (dataKey) {
            if (dataKey === objKey) {
                console.log(dataKey, objKey);
                if (!firstTime) throw new Error('在这个循环中finalKey重复赋值了');
                firstTime = false;
                finalKey = objKey;
            }
        })
    });
    // 拿到finalKey代表的数据
    console.log('finalKey', finalKey);
    if (finalKey) {
        tmp = obj['data'][finalKey].concat(data.data[finalKey]);
        let tmpData = Object.assign({}, data.data);
        tmpData[finalKey] = tmp;
        delete data.data; // 不然会覆盖的
        assignData(obj.data, tmpData);
        assignData(obj, data);
    } else {
        let tmpData = Object.assign({}, data.data);
        delete data.data;
        assignData(obj.data, tmpData);
        assignData(obj, data);
    }
}

function login() {
    axios.post(loginUrl, {
        cellphone: encrypt('15878193546'),
        password: encrypt('000000')
    }).then(function (res) {
        console.log('loginres', res);
        return res.data;
    // });
    }).then(loginError).catch(loginError);
}

function getPeopleData(page) {
    return function () {
        _getPeopleData(page);
    }
}

function _getPeopleData(page) {
    axios.post(dataUrl, {
        page: encrypt(page)
    }).then(function (res) {
        console.log('getPeopleData', res.data);
        if (res.data.status == 1) {
            assignData(app.peopleData, res.data);
        }
        return res.data;
    }).then(function (res) {
        if (res.status == 0) {
            // 没有数据
        }
    }).then(function () {
        app.busy = false;
    }).
    catch(function () {
        //
    })
}

function assignData(obj, data) {
    Object.keys(data).forEach(function (key) {
        obj[key] = deepClone(data[key]);
    });
}