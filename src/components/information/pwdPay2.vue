<template>
<div>
   <div v-bind:class='{"dis_n" :info.isB,"dsp_p" :info.isA}'>
    <div class="ui-border-t margin-t-15">
        <form action="#" id="form">
            <div class="ui-form-item ui-border-b bg-white">
                <label>姓名</label>
                <input class="text-right" type="text" name="name" v-model="info.user_name">
            </div>
            <div class="ui-form-item ui-border-b bg-white">
                <label>身份证号</label>
                <input type="text" id="idCard" name="idCard" placeholder="身份证号码" v-model="info.id_cart_phone">
            </div>
            <div class="ui-form-item ui-form-item-link ui-border-tb bg-white margin-t-10" id="select-bank"  v-on:click="getGoto" >
                <label> {{info.bank_lx}}</label>
                <input type="text" id="bank" name="bank" value="" readonly="readonly"/>
            </div>
            <div class="ui-form-item ui-border-b bg-white">
                <label>银行卡号</label>
                <input type="tel" id="bank_number" name="bank_number" placeholder="输入银行卡号码"  v-model="info.bank_cart_phone">
            </div>
        </form>
    </div>
    <div class="ui-whitespace font14 ui-txt-muted padding-t-5">
        以上内容仅作为信息对比，空店将严格保密。
    </div>
    <div class="ui-btn-wrap">
        <button class="ui-btn-lg ui-btn-primary" id="submit"  v-on:click="getNextgo" :disabled="!buttonEnable">下一步</button>
    </div>
   </div>
    <!--选择银行弹框-->
    <div  v-bind:class='{"dis_n" :info.isA,"dsp_p" :info.isB}'>
        <div class="king-dialog c-up-before padding-b-15">
            <div class="ui-whitespace padding-t-5 padding-b-5 bg-whitesmoke" >
                <p class="font14 ui-txt-info line-h-nor">选择银行进行验证</p>
            </div>
            <ul class="ui-list k-list ui-list-active" >
                <li class="ui-border-b" v-for="key in items" v-on:click="getGobank(key)" >
                    <div class="ui-avatar k-avatar-s">
                        <img :src="key.logo" alt=""/>
                    </div>
                    <div class="ui-list-info">
                        <h4>{{key.bank_name}}({{key.bank_card_no}})</h4>
                    </div>
                </li>
                <!--<li class="ui-border-b">-->
                <!--<div class="ui-avatar k-avatar-s" style="background-image: url(../../images/app2.png);"></div>-->
                <!--<div class="ui-list-info">-->
                <!--<h4>建设银行(1546)</h4>-->
                <!--</div>-->
                <!--</li>-->
            </ul>
        </div>
    </div>
</div>

</template>
<style>
    a{
        color:#000;
    }
    img{
        width:100%;
        height:100%;
        -webkit-border-radius: 200px;
        background-size: 100% 100%;
    }
</style>
<script type="text/jsx">
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
            info: {
                isA: true,
                isB: false,
                user_name: "",
                id_cart_phone: "",
                bank_cart_phone: "",
                bank_id: "",
                bank_lx: ""
            },
            items: {

            },
            vle:{
                bk_name: "",
                bk_id: ""
            }
        }
    },
    computed: {
        buttonEnable() {
            return (this.info.id_cart_phone!= "" && this.info.bank_cart_phone!= "");
        }
    },
    mounted: function () {
        const _this = this;
        XHRGet('/oriental_treasure/MySeting/forgetPayPassword', {}, function (response) {
        _this.info.user_name=response.data.data.real_name;
            if(response.data.data.bank_list.length === 0){
                _this.bank_name=" ";
                layer.open({
                    content: "您还没绑定银行卡,请先去绑定银行卡",
                    btn: ['确定'],
                    yes: function () {
                        layer.closeAll();
                    }
                });
            }
            else {
                _this.items=response.data.data.bank_list;

            }
        })
        if(this.info.bank_lx === ""){
            _this.info.bank_lx = "选择银行";
        }else{
            _this.info.bank_lx = _this.vle.bk_name;
        }
    },

    methods: {
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
        //去选择银行类型
        getGoto: function () {
            this.info.isA = false;
            this.info.isB = true;
        },
        //确定银行类型
        getGobank: function (name) {
            this.vle.bk_id = name.id;
            this.vle.bk_name = name.bank_name;
            this.info.bank_lx = name.bank_name;
            this.info.isA =true;
            this.info.isB = false;
            //console.log(name);
            //console.log(this.vle.bk_id);
        },
        //失去焦点事件
        //最后一步提交
        getNextgo: function () {
            const _this = this;
            const data = {
                id_card_no:encrypt(this.info.id_cart_phone),
                bank_card_no:encrypt(this.info.bank_cart_phone),
                bank_id: encrypt(this.vle.bk_id)
            }
                XHRPost('/oriental_treasure/MySeting/forgetPayPasswordVerify', data, function (response) {
                    if (response.data.status == 1) {
                        //window.location.href = '/xiaojin/information/pwdPay3.html'
                        _this.$router.push({path:'/padPay'})
                    } else {
                        _this.errorTip(response.data.info);
                    }
                })
        }
        }
    }
</script>

