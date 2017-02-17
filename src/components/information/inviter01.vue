<template>
<div class="k-wrap" style="margin-top:10px;">
    <!--01-->
    <div class="font14 margin-b-10 margin-l-10">
        <span class="txt-color-555">请输入你要绑定的手机号</span>
    </div>

    <!--02-->
    <div class="possword border-b-1 border-t-1">
        <ul class="ui-list ul-all ui-list-active" >
            <li data-href="#" class="border-b-1">
                <div class="rlt width-100">
                    <label class="ui-nowrap abs top-10">手机号</label>
                    <input type="tel" name="phone"  placeholder="输入手机号" class="ui-form-item input width-100 padding-l-60"  v-model="info.phone"/>

                </div>

            </li>
            <li data-href="#">
                <div class="rle width-100">
                    <label class="ui-nowrap">验证码</label>
                    <input type="text" placeholder="输入验证码" class="ui-form-item input" style="border:0;padding-left:9px;"  v-model="info.code"/>
                        <span class="abs yzm cursor-pir a-r bg-yellow"  @click.prevent="getCode" v-if="getCodeBtnDisable">
                            {{ conut_time === "0s" ? '重获' : '获取' }}
                        </span>
                    <span  class="abs yzm cursor-pir a-r bg-ddd" disabled v-if="getCodeBtnDisable == false">{{ conut_time }}</span>
                    <!--<span  class="abs yzm cursor-pir a-r bg-yellow" v-bind:class='{"dis_n" :info.isB,"dsp_b" :info.isA}' v-on:click="getData">获取</span>-->
                    <!--<span  class="abs yzm cursor-pir a-r bg-ddd" v-bind:class='{"dis_n":info.isA, "dsp_b":info.isB}'  id="time_show" disabled="disabled"></span>-->
                </div>
            </li>
        </ul>
    </div>
    <!--03-->
    <div class="ui-btn-wrap">
        <button  class="ui-btn-kd ui-btn-yellow" v-on:click="goToNext">提交</button>
    </div>
    <!---->
    <!--04-->
    <loading v-if="loadingShow"></loading>
</div>
</template>
<script>
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
            info: {
                input:"",
                yzm: "",
                isA: "",
                isB: "",
                phone:'',
                code: ''
            },
            conut_time: 60,
            getCodeBtnDisable: true,
            loadingShow: false
        }
    },

    mounted: function () {
        this.info.isA = true;
        this.info.isB = false;
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
            const tel = this.checkPhone(this.info.phone)
            if (!tel) {
                this.errorTip('手机号码有误！');
                return false;
            }
            this.getCodeBtnDisable = false;
            this.conut_time = '...';

            const data = {
                cellphone: encrypt(this.info.phone),
                //cellphone: this.info.phone,
                exist: encrypt(0)
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

            const _this = this;
            _this.loadingShow = true;
            axios.post('/oriental_treasure/MySeting/editCellphone', data).then(function (response) {
                console.log(response);
                if (response.data.status ==  1) {
                    _this.loadingShow = false;
                    layer.open({
                        content: response.data.info,
                        btn: ['确定'],
                        yes: function () {
                            layer.closeAll();
                            _this.info.input=_this.info.phone ;
                            window.location.href = '/xiaojin/information/password.html'
                        }
                    });
                }else{
                    _this.loadingShow = false;
                    this.errorTip(response.data.info);
                }

            }.bind(this));
        },



    }

    }
</script>