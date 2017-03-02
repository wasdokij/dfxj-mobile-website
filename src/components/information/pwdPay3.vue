<template>
    <div>
<div class="ui-border-t margin-t-15">
    <form action="#" id="form">
        <div class="ui-form-item ui-border-b bg-white">
            <label>手机号</label>
            <input type="tel" id="phone" name="phone" :placeholder="info.phone" readonly="readonly">
        </div>
        <div class="ui-form-item ui-form-item-r  bg-white">
            <label>验证码</label>
            <input type="text" id="code" name="code" placeholder="输入验证码" style="padding-left: 95px;padding-right: 120px;" v-model="info.code" >
             <span class="abs yzm cursor-pir a-r bg-yellow"  @click.prevent="getCode" v-if="getCodeBtnDisable">
                  {{ conut_time === "0s" ? '重获' : '获取' }}
             </span>
            <span  class="abs yzm cursor-pir a-r bg-ddd" disabled v-if="getCodeBtnDisable == false">{{ conut_time }}</span>
        </div>
        <div class="ui-form-item ui-border-tb bg-white margin-t-15">
            <label>新密码</label>
            <input type="password" id="password" name="password" placeholder="输入新密码"  v-model="info.xpwd" />
        </div>
        <div class="ui-form-item ui-border-b bg-white">
            <label>确认新密码</label>
            <input type="password" id="password1" name="password1" placeholder="再次输入新密码"  v-model="info.qpwd"/>
        </div>
    </form>
</div>

<div class="ui-btn-wrap">
    <button class="ui-btn-lg ui-btn-primary" id="submit" :disabled="!buttonEnable" v-on:click="goToNext">保存</button>
</div>
    </div>
</template>
<script type="text/jsx">
    import Vue from 'vue';
    import axios from 'axios';
    import '../../js/lib/layer.js';
    import '../../js/lib/layer.css';
    import Loading from '../common/loading.vue';
    import { countdown } from '../../js/tools.js';
    import { XHRPost} from '../../js/ajax.js';
    import { XHRGet} from '../../js/ajax.js';
    export default{
        data(){
        return{
            disabled : true,
            info: {
                input: "",
                code: '',
                phone: "",
                yzm: "",
                xpwd: "",
                qpwd: ""
            },
            conut_time: 60,
            getCodeBtnDisable: true
        }
    },
    computed: {
        buttonEnable() {
            return (this.info.xpwd!= "" && this.info.qpwd!="" && this.info.phone!= "");
        }
    },
    mounted: function () {
        const _this = this;
        XHRGet('/oriental_treasure/MySeting/index', {}, function (response) {
            _this.info.phone=response.data.data.cellphone;
        })

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
        //成功提示
        successTip: function (msg) {
            layer.open({
                content: msg,
                btn: ['确定'],
                yes: function () {
                    window.location.href = '/xiaojin/information/password.html'
                }
            });
        },
        getCode: function () {
            const tel = this.checkPhone(this.info.phone)
            if (!tel) {
                this.errorTip('手机号码有误！');
                return false;
            }
            this.getCodeBtnDisable = false;
            this.conut_time = '...';

            const data = {
                cellphone:encrypt(this.info.phone),
                //cellphone: this.info.phone,
                exist: encrypt('1')
            }
            XHRPost('/oriental_treasure/register_and_login/sendPhoneCode', data, function (response) {

                if (response.data.status === 1) {
                    const _this = this;
                    countdown(60,function (time) {
                        _this.conut_time = time + 's';
                        if (time === 0) {
                            _this.getCodeBtnDisable = true;
                        }
                    });
                    this.errorTip(response.data.info);
                } else {
                    this.errorTip(response.data.info);
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
                verify_code: '',
                new_pay_password:encrypt(this.info.xpwd),
                re_password:encrypt(this.info.qpwd)
            };
            const telResault = this.checkPhone(this.info.phone);
            if (telResault) {
                data.cellphone = encrypt(this.info.phone)
                //data.cellphone = this.phone;
            } else {
                this.errorTip('手机号码有误！');
                return false;
            }
            if (this.code !== '') {
                data.verify_code = encrypt(this.info.code);
                //data.verify_code = this.code;
            } else {
                console.log(this.code);//可以注释
                this.errorTip('请输入验证码！');
                return false;
            }
    if(this.info.xpwd === this.info.qpwd) {
        XHRPost('/oriental_treasure/MySeting/forgetAndEditPayWord', data, function (response) {
            console.log(response);
            if (response.data.status == 1) {
                this.successTip(response.data.info);
            } else(
                    this.errorTip(response.data.info)
            )

        }.bind(this))
    }else{
        this.errorTip("两次密码不一致");
    }
        },

    }

    }
</script>