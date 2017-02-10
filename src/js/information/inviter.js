import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import Loading from '../../components/common/loading.vue';
import successing from '../../components/common/success.vue';
import { countdown } from '../tools.js';
import { XHRGet} from '../ajax.js';
import { XHRPost} from '../ajax.js';

var vm = new Vue({
    el: "#container",
    data: {
        isA:false,
        isB:true,
        disabled:true,
        loadingShow:false,
        successingShow:false,
        user:{
          dqyqr_name:"",
          yqr:"",
          yqr_phone:""
        }
    },
    components: {
        Loading,
        successing
    },
    mounted: function () {
        const _this = this;
        XHRGet('/oriental_treasure/MySeting/index', {}, function (response) {
            _this.user.dqyqr_name = response.data.data.inviting_people;
        })
    },
    //components: {
    //    Loading,
    //    successing
    //},
   methods: {
       //test: function () {
       //    //this.result = this.input;
       //    const data = {
       //        cellphone: encrypt(this.user.yqr_phone)
       //    }
       //    const _this = this;
       //    XHRPost('/oriental_treasure/MySeting/findInvitingPeople', data, function (response) {
       //        if ((/^1[34578]\d{9}$/.test(_this.user.yqr_phone))) {
       //             _this.user.yqr=response.data.data.user_name;
       //        } else {
       //            console.log("手机号码错误，重新输入");
       //
       //        }
       //
       //
       //    })
       //
       //}
       checkPhone: function (phone) {
           const tel = /^1(3|4|5|7|8|9)\d{9}$/.test(phone);
           return tel;
       },
       //错误提示方法
       errorTip: function (msg) {
           layer.open({
               content: msg,
               btn: ['确定'],
               yes: function () {
                   layer.closeAll();
               }
           });
       },

       test: function () {
           const _this = this;
           const tel = this.checkPhone(this.user.yqr_phone)
               if (!tel) {
                   this.errorTip('手机号码有误！');
                   return false;
               }
               const data = {
                   cellphone: encrypt(this.user.yqr_phone)
               }
               XHRPost('/oriental_treasure/MySeting/findInvitingPeople', data, function (response) {
                   if (response.data.status === 1) {
                       //_this.errorTip(response.data.info);
                       _this.user.yqr = response.data.data.user_name;
                       _this.disabled = false;
                   } else {
                       _this.errorTip(response.data.info);
                       _this.user.yqr = "";
                   }

               })
           },
       //确认更改
       getGenggai:function(){
           this.isB = false;
           this.isA = true;
       },
       goQuxiao:function(){
           this.isA = false;
           this.isB = true;
       },
       //
       //
       goToLogin: function () {
           let data = {
               input: this.input,
               yzm: this.seen
           };
           this.isB = true;
           this.isA = false;
           console.log(data);
           const _this = this;
           _this.loadingShow = true;
           axios.post('/api_information01',data).then(function(response){
               console.log(response);
               if (response.data.status == 0||1) {
                   _this.loadingShow = false;
                   _this.successingShow = true;
               }
               console.log(response.data.status == 0);//可以注释，只是用来显示输出
               console.log(response.data.status == 1);//可以注释，只是用来显示输出
           });
       }
       //
       //
   }




})

