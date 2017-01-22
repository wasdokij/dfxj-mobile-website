var dataUrl = '/oriental_treasure/Friend/mySubUser'; // page 大于0的整数
var filterDataUrl = '/oriental_treasure/Friend/filterSubUsers'; // page, search: 昵称、手机号或姓名, type: 0[全部] 1[注册用户] 2[微股东] 3[银卡vip] 4[金卡vip]
import Vue from 'vue';
import Axios from 'axios';

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
        isFocus: false
    },
    computed: {

    },
    mounted: function () {
        this.$nextTick(function () {
            Axios.post(dataUrl, {
                page: 1
            }).then(function (res) {
                console.log('res', res);
            }.bind(this))
        });
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
        }
    }
});