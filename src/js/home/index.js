import HomeIndex from 'components/home/home-index.vue';
import '../lib/layer.js';
import '../lib/layer.css';
import { XHRPost } from '../ajax.js'

var V = new Vue({
    el: '#container',
    components: {
        HomeIndex,
    },
});
