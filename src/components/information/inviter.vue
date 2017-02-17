<template>
<div class="jin-wrap margin-t-10">
    <!--01-->
    <div class="font14 margin-b-10">
        <label class="margin-l-10">当前邀请人：</label>
        <span class="">{{user.dqyqr_name}}</span>
    </div>
    <!--02-->
    <div class="possword border-b-1 border-t-1" >
        <ul class="ui-list ul-all ui-list-active">
            <li>
                <div class= "ui-list-info rle" id="s2" >
                    <label class="ui-nowrap">手机号</label>
                    <input type="text" placeholder="输入邀请人手机号" style="border:0;" id="phone"  v-on:blur="test" v-model="user.yqr_phone"/>
                    <span class="abs txt-color-d6" style="right:10px;" id="app-3">{{user.yqr}}</span>
                </div>
            </li>
        </ul>
    </div>
    <!--03-->
    <div class="ui-btn-wrap">
        <button  class="ui-btn-kd ui-btn-yellow" v-on:click="getGenggai" :disabled=disabled>更改</button>
    </div>

    <!--04-->
    <div class="font12">
        <label class="margin-l-10 txt-color-ddd">温馨提示：</label>
        <span class="txt-color-d6">在成为微股东之前，你有一次修改的机会</span>
    </div>
    <!--05-->
    <div class="ui-dialog" v-bind:class='{"hide":isB,"show":isA}'>
        <div class="ui-dialog-cnt padding-t-10" style="">
            <div class="ui-dialog-bd">
                <div class="text-center padding-l-20 padding-r-20" >确定要将改邀请人更改为 <span class="font16 txt-color-blue">全智贤</span>吗？</div>
            </div>
            <div class="ui-dialog-ft" style="border:0;">
                <button type="button" data-role="button" class="border-t-1 border-r-1" v-on:click="goQuxiao">取消</button>
                <button type="button" data-role="button" class="border-t-1"  v-on:click="goToLogin">确定</button>
            </div>
        </div>
    </div>

    <!--06-->
    <loading v-if="loadingShow"></loading>
    <successing v-if="successingShow"></successing>
    <!--07-->
    <!--<div class="ui-loading-block hide" >-->
    <!--<div class="ui-loading-cnt">-->
    <!--<i style="display:block;width:100%;height:80px;line-height:80px;font-size:60px;" class="k-icon-dagouxuanzhong"></i>-->
    <!--<p>成功</p>-->
    <!--</div>-->
    <!--</div>-->

    <!--08-->
</div>
</template>
<script>
    import '../../js/lib/layer.js';
    import '../../js/lib/layer.css';
    import Loading from '../common/loading.vue';
    import successing from '../common/success.vue';
    import { countdown } from '../../js/tools.js';
    import { XHRPost} from '../../js/ajax.js';
    import { XHRGet} from '../../js/ajax.js';

    export default{
        data(){
        return{
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
        getGenggai: function () {
            this.isB = false;
            this.isA = true;
        },
        goQuxiao: function () {
            this.isA = false;
            this.isB = true;
        },
        //
        goToLogin: function () {
            const data = {
                cellphone: encrypt(this.user.yqr_phone)
            }
            this.isB = true;
            this.isA = false;
            const _this = this;
            _this.loadingShow = true;
            _this.successingShow = false;
            XHRPost('/oriental_treasure/MySeting/editInvitingPeople', data, function (response) {
                console.log(response);
                if (response.data.status == 0) {
                    _this.loadingShow = false;
                    _this.errorTip(response.data.info);
                }else{
                    _this.loadingShow = false;
                    _this.successingShow = true;
                    _this.dqyqr_name=_this.user.yqr;
                    window.location.href = '/xiaojin/information/password.html'

                }
            })
            //
            //
        }


    }
    }
</script>