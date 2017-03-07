//import Vue from 'vue';
//import axios from 'axios';
////import '../lib/layer.js';
////import '../lib/layer.css';
////import jinFooter from '../../components/common/footer.vue';
//import { XHRGet } from '../ajax.js';
//var login = new Vue({
//    el: '#container',
//    data: {
//            user_avatar:"",
//            user_name:"",
//            xj_score:"",
//            level_name:"",
//            yq_rs:"",
//            jh_rs:"",
//            inRS:[
//                {rsA:"1~500",rsB:"",rsC:""},
//                {rsD:"501~2000",rsE:"2000",rsF:"1000"},
//                {rsA:"2001~5000",rsB:"1600",rsC:"800"},
//                {rsD:"5001~10000",rsE:"1400",rsF:"1200"},
//                {rsA:"1万~2万",rsB:"1000",rsC:"800"},
//                {rsD:"2万~5万",rsE:"600",rsF:"400"},
//                {rsA:"5万~10万",rsB:"200",rsC:"100"},
//                {rsD:"10万~20万",rsE:"80",rsF:"40"},
//                {rsA:"20万~50万",rsB:"40",rsC:"20"},
//                {rsD:"50万~100万",rsE:"20",rsF:"10"}
//            ]
//
//            },
//        mounted: function () {
//         const _this = this;
//            XHRGet('/oriental_treasure/MyCenter/infoAssetRule', {}, function (response) {
//                    _this.user_avatar =  response.data.data.wechat_avatar;
//                    _this.user_name = response.data.data.user_name;
//                    _this.xj_score = response.data.data.score;
//                    _this.level_name = response.data.data.level_name;
//                    _this.yq_rs = response.data.data.invinting_count;
//                    _this.jh_rs = response.data.data.qualified_count;
//
//            })
//    }
//
//
//});
import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import rules from 'components/my/rules.vue';

const routes = [
    { path: '/', component: rules}
    //{path: '/bank', component:BackCart }
];
const router = new VueRouter({
    // ES6缩写语法，相当于routes:routes
    routes
});
// 最后创建vue实例并挂载
const app = new Vue({
    router
}).$mount('#container');
