import HomeIndex from 'components/index/index-home.vue';
import jinFooter from 'components/common/footer.vue';
import '../../js/lib/layer.js';
import '../../js/lib/layer.css';

var V = new Vue({
    el: '#container',
    components: {
        HomeIndex, jinFooter
    },
});
