//import Vue from 'vue';
import axios from 'axios';
import Loading from '../../components/common/loading.vue';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import { countdown } from '../tools.js';
var login = new Vue({
    el: "#container",
    data : {
        info: {
            input:'18587596820',
            yzm: '',
            isA: true,
            isB: false,
            isC: false,
            isD: true
        },
        phone:'',
        code: '',
        conut_time: 60,
        getCodeBtnDisable: true,
        loadingShow: false
    },
    components: {
        Loading
    },
    methods: {

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
        getCode: function () {
            const tel = this.checkPhone(this.phone);
            if (!tel) {
                this.errorTip('手机号码有误！');
                return false;
            }
            this.getCodeBtnDisable = false;
            this.conut_time = '...';

            const data = {
                    //cellphone: encrypt(this.phone),
                    //exist: encrypt('1')
                    cellphone:this.phone,
                    exist:"1"
                }

        axios.post('/api_information01',data).then(function(response){
            if (response.data.status === 0||1) {
                const _this = this;
                countdown(60,function (time) {
                    _this.conut_time = time + 's';
                    if (time === 0) {
                        _this.getCodeBtnDisable = true;
                    }
                });
            } else {
                this.getCodeBtnDisable = true;
            }


        }.bind(this), function (error) {
        this.errorTip(error);
        this.getCodeBtnDisable = true;
    }.bind(this));

},
        goToNext: function () {
            const data = {
                cellphone: '',
                verify_code: ''
            };
            const telResault = this.checkPhone(this.phone);
            if (telResault) {
                //data.cellphone = encrypt(this.phone)
                data.cellphone = this.phone;
            } else {
                this.errorTip('手机号码有误！');
                return false;
            }
            if (this.code === '') {
                // data.verify_code = encrypt(this.code);
                data.verify_code = this.code;
            } else {
                this.errorTip('请输入验证码！');
                return false;


            }
            const _this = this;
            _this.loadingShow = true;
            axios.post('/api_information', data).then(function (response) {
                console.log(response);
                if (response.data.status == 0 || 1) {
                    _this.loadingShow = false;
                    layer.open({
                        content: response.data.info,
                        btn: ['确定'],
                        yes: function () {
                            layer.closeAll();
                            _this.info.isC = false;
                            _this.info.isD = true;
                            _this.info.input = _this.phone;//返回的时候手机号码是改过了那个
                            console.log(_this.info.input);
                            console.log(_this.phone);
                            //location.href = 'phone.html';
                        }
                    });
                }
                console.log(response.data.status == 0);//可以注释，只是用来显示输出
                console.log(response.data.status == 1);//可以注释，只是用来显示输出

            });
        },
            //
            //
            //
        goGenggai:function(){
            this.info.isC = true,
            this.info.isD = false
        }

        }

});

