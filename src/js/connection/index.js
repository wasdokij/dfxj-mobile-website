// import Vue from 'vue';

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