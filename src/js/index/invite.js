import indexInvite from 'components/index/index-invite.vue';
import '../../js/lib/layer.js';
import '../../js/lib/layer.css';
import jinFooter from 'components/common/footer.vue';

var V = new Vue({
    el: '#container',
    components: {
        indexInvite, jinFooter
    },
});
