
import assets from '../../components/assets/assets.vue';
import assetsList from '../../components/assets/assets-list.vue';
import assetsRules from '../../components/assets/rules.vue';
import search from '../../components/assets/search.vue';
import record from '../../components/assets/record.vue';
import recordDetail from '../../components/assets/record-detail.vue';
import '../../js/lib/layer.js';
import '../../js/lib/layer.css';
//import '../mock/test.js';

var routes = [
	{ path: '/', component: assets, meta: {keepAlive: true} },
	{ path: '/assets-list', component: assetsList, meta: {keepAlive: true} },
	{ path: '/assets-rules', component: assetsRules, meta: {keepAlive: true} },
	{ path: '/search', component: search, meta: {keepAlive: false}},
	{ path: '/record', component: record, meta: {keepAlive: true} },
	{ path: '/recordDetail', component: recordDetail, meta: {keepAlive: false}},
//	{ path: '*', component: assets },
];
const router = new VueRouter({
//	mode: 'history',
  	routes
});

const app = new Vue({
  	router,
  	watch: {
        '$route' (to, from) {
            console.log(to,from)
        }
    },

}).$mount('#assets-app')

 