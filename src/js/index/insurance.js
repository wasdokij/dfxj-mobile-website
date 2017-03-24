import Insurance from '../../components/index/insurance.vue';
import '../lib/layer.js';
import '../lib/layer.css';
import { getQueryString } from '../tools.js';

var V = new Vue({
    el: '#container',
    data: {
    		getCodeBtnDisable: true,
    		userSn: '',
    },
    components: {
        Insurance
    },
    
    created: function () {
    		const userSn = getQueryString('user_sn');
    		this.userSn = userSn;
    },
});
