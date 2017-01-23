import HomeInviteAccept from 'components/index/index-invite-accept.vue';
import '../lib/layer.js';
import '../lib/layer.css';

var V = new Vue({
    el: '#container',
    data: {
    	getCodeBtnDisable: true,
    },
    components: {
        HomeInviteAccept
    },
    
});
