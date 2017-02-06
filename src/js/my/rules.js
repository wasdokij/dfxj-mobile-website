import Vue from 'vue';
import axios from 'axios';
//import '../lib/layer.js';
//import '../lib/layer.css';
//import jinFooter from '../../components/common/footer.vue';
//import { XHRGet } from '../ajax.js';
var login = new Vue({
    el: '#container',
    data: {
            user_name:"金智贤",
            xj_score:"110",
            level_name:"金卡vip",
            yq_rs:"60",
            jh_rs:"10",
            inRS:[
                {rsA:"1~500",rsB:"",rsC:""},
                {rsD:"501~2000",rsE:"2000",rsF:"1000"},
                {rsA:"2001~5000",rsB:"1600",rsC:"800"},
                {rsD:"5001~10000",rsE:"1400",rsF:"1200"},
                {rsA:"1万~2万",rsB:"1000",rsC:"800"},
                {rsD:"2万~5万",rsE:"600",rsF:"400"},
                {rsA:"5万~10万",rsB:"200",rsC:"100"},
                {rsD:"10万~20万",rsE:"80",rsF:"40"},
                {rsA:"20万~50万",rsB:"40",rsC:"20"},
                {rsD:"50万~100万",rsE:"20",rsF:"10"}
            ]

            }


});