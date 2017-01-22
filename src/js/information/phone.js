//import Vue from 'vue';
import axios from 'axios';
import Loading from '../../components/common/loading.vue';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
var login = new Vue({
    el: "#container",
    data : {
        info: {
            phone: '18587596820',
            input:'',
            yzm: '',
            isA: true,
            isB: false,
            isC: false,
            isD: true
        },
        loadingShow: false
    },
    components: {
        Loading
    },
    methods: {
        getData: function () {
            this.result = this.info.input;
            if ((/^1[34578]\d{9}$/.test(this.info.input))) {
                console.log("手机号码正确");//可以注释，只是用来显示输出
               this.info.huoqu = "";
                //console.log(this.info.huoqu);
                this.info.isA =false;
                this.info.isB = true;
                document.querySelector('#time_show').innerHTML = "60"+"s";
                const _this = this;
                //60秒时间
                function timer(){
                    var intDiff = parseInt(59);
                    var second=0;
                    window.setInterval(function(){
                        if(intDiff > 0) {
                            second = Math.floor(intDiff / 1);
                        document.querySelector('#time_show').innerHTML = second+""+"s";
                            if(second<=1){
                                _this.info.isA = true;
                                _this.info.isB = false;
                            }
                       console.log(second);//可以注释，只是用来显示输出
                        intDiff--;
                        }
                    },1000);
                };
                timer();
                //........
            } else {
                console.log("手机号码错误");//可以注释，只是用来显示输出
            }
            //console.log((/^1[34578]\d{9}$/.test(this.input)));
        },
        goGenggai:function(){
            this.info.isC = true,
            this.info.isD = false
        },
        goToLogin: function () {
            let data = {
                        input: this.info.input,
                        yzm: this.info.yzm
            };
            console.log(data);
            const _this = this;
            _this.loadingShow = true;
            axios.post('/api_information',data).then(function(response){
                console.log(response);
                if (response.data.status == 0||1) {
                    _this.loadingShow = false;
                    layer.open({
                        content: response.data.info,
                        btn: ['确定'],
                        yes: function () {
                            layer.closeAll();
                            _this.info.phone=_this.info.input;
                            location.href = 'phone.html';
                           // _this.info.isC = false;
                            //_this.info.isD = true;

                        }
                    });
                }
                console.log(response.data.status == 0);//可以注释，只是用来显示输出
                console.log(response.data.status == 1);//可以注释，只是用来显示输出

            });
            //...
        }

    }
});



