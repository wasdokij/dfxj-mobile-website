//import Vue from 'vue';
import axios from 'axios';
import Loading from '../../components/common/loading.vue';
import successing from '../../components/common/success.vue';
import '../mock/test.js';
 import '../lib/layer.js';
//import '../../css/information/index.css'
var login = new Vue({
        el: "#container",
        data: {
            input:"",
            seen:'',
            loadingShow:false,
            successingShow:false,
            isA:false,
            isB:true,
            disabled:true,
            open: [
                {result: null,name:""},
                {result:18778543910,name:"全智贤"}
            ]
        },
    components: {
        Loading,
        successing
    },
    methods: {
        test:function () {
            this.result = this.input;
            if((/^1[34578]\d{9}$/.test(this.open[1].input))){
              //console.log((/^1[34578]\d{9}$/.test(this.open[1].input)));
                this.disabled = false;
            }else{
                console.log("手机号码错误，重新输入");
            }
            //console.log((/^1[34578]\d{9}$/.test(this.open[1].input)));
            this.seen = (/^1[34578]\d{9}$/.test(this.open[1].input));
            //console.log(this.seen);
        },
        getData:function(){
            this.isB = false;
            this.isA = true;
        },
        goQuxiao:function(){
            this.isA = false;
            this.isB = true;
        },
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
                    _this.successingShow=true;
                    //layer.open({
                    //    content: response.data.info
                    //});
                    //setInterval("layer.closeAll()",2000);
                }
                console.log(response.data.status == 0);//可以注释，只是用来显示输出
                console.log(response.data.status == 1);//可以注释，只是用来显示输出
            });
            //...
        }

    }

});