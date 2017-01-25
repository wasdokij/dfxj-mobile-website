import { loginUrl, connectionDataUrl as dataUrl, connectionSearchUrl as searchUrl } from '../api-config';
import { debounce, deepClone, loginError } from '../tools';
import { backgroundMap, styleMap, searchTypeMap, bindFastClick} from './constants';
import Vue from 'vue';
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);
login();
bindFastClick();

window.app = new Vue({
    el: '#container',
    data: {
        // search: '',
        // isFocus: false,
        // isSearch: false,
        // searchResult: {
        //     data: [],
        //     page: '',
        //     listRows: 10,
        //     totalRows: 0
        // },
        // beginSearching: false, // 只有开始搜索并且没有搜索结果时，才会返回nullResult
        // searchType: '0',
        // showSearchType: false,
        // searching: false, // 配合debounce
        // visible: {
        //     homePage: true,
        //     searchPage: false
        // },
        peopleData: {
            data: {},
            page: '1',
            listRows: 10,
            totalRows: 0,
            other_count: {},
            my_inviting: {}
        },
        searchPeopleData: {

        },
        busy: false
    },
    computed: {
        totalPage: function () {
            return Math.ceil(this.totalRows / this.listRows);
        },
        searchBgWhite: function () {
            return this.isSearch ? 'background: #fff' : '';
        },
        searchPlaceHolder: function () {
            return searchTypeMap[this.searchType];
        },
    },
    mounted: function () {
        console.log('mounteded');
        this.$nextTick(getPeopleData('1'));
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
            this.search = '';
            this.isFocus = false;
            this.showSearchType = true;
            this.searchType = '0';
            app.searchResult = {
                data: [],
                page: '',
                listRows: 10,
                totalRows: 0
            };
            this.beginSearching = false;
        },
        focusSearch() {
            this.isFocus = true;
            this.showSearchType = false;
        },
        clearSearch() {
            this.search = '';
            this.showSearchType = true;
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
            if (index === this.searchResult.data.length - 1) {
                return 'add-border-bottom';
            }
            return;
        },
        loadMore() {
            this.busy = true;


            // console.log('hehe', arguments);
        },
        beginSearch() {
            this.isSearch = true;
            window.history.pushState({state: 'frontPage'}, null, window.location.href);
            this.showSearchType = true;
        },
        onSearch() {
            if (this.searching) {
                return;
            }
            this.searching = true;
            this.beginSearching = true;
            (debounce(searchMore, 300)).call(this);
        },
        changeSearchType(type) {
            this.searchType = type;
            this.showSearchType = false;
            this.focusSearch();
        }
    }
});

window.onpopstate = function (event) {
    console.log('event', event);
    if (event.state.state === 'frontPage') {
        app.isSearch = false;
    }
};

function _loadMore() {

}

// function trueLoadMore() {
//     this.busy = true;
//     console.log('begin');
//     if (parseInt(this.page) < this.totalPage) {
//         var page = (parseInt(this.page) + 1) + '';
//         console.log('page', page);
//         var _self = this;
//         var tmp = [];
//         var plainObj = {};
//
//         axios.post(dataUrl, {
//             page: encrypt(page)
//         }).then(function (res) {
//             console.log('res', res);
//             var finalKey = '';
//             Object.keys(res.data.data).forEach(function (key) {
//                 Object.keys(app.data).forEach(function (keyOwn) {
//                     if (keyOwn === key) {
//                         finalKey = keyOwn;
//                         console.log('finalKey', finalKey);
//                     }
//                 })
//             });
//             if (finalKey) {
//                 tmp = app.data[finalKey].concat(res.data.data[finalKey]);
//             }
//             _self.assignData(plainObj, res.data);
//             Object.keys(plainObj.data).forEach(function (key) {
//                 app.data[key] = plainObj.data[key];
//             });
//             if (tmp.length > 0) {
//                 app.data[finalKey] = tmp;
//             }
//             delete plainObj.data;
//             _self.assignData(app, plainObj);
//             _self.busy = false;
//         }.bind(_self))
//     }
// }

// function searchMore() {
//     console.log('tap');
//     console.log('true', this === app);
//     if (firstTime) {
//
//     } else if (this.searching) {
//         // return;
//     }
//     if(!app.search) {
//         this.searching = false;
//         return;
//     }
//     firstTime = false;
//     var _self = this;
//     if (parseInt(this.searchResult.page || '0') < (this.searchTotalPage) || 1) {
//         console.log('beginSearch');
//         oldSearch = app.search;
//         axios.post(searchUrl, {
//             search: encrypt(_self.search),
//             type: encrypt(_self.searchType),
//             page: encrypt(_self.searchResult.page || '1')
//         }).then(function (res) {
//             console.log('searchRes', res);
//             app.searching = false;
//             if (res.data.status == 0) {
//                 app.searchResult = {
//                     data: [],
//                     page: '',
//                     listRows: 10,
//                     totalRows: 0
//                 }
//             } else if (res.data.status == 1) {
//                 assignSearchResult(app.searchResult, res.data);
//             }
//         }.bind(_self))
//     }
//
// }
//


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
            //
        }
    }).catch(function () {
        //
    })
}

function assignData(obj, data) {
    Object.keys(data).forEach(function (key) {
        obj[key] = deepClone(data[key]);
    });
}