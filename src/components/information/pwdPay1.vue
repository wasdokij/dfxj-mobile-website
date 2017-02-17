<template>
<div class="ui-form ui-border-t margin-t-15">
    <form id="from">
        <div class="ui-form-item ui-border-b">
            <label>原密码</label>
            <input type="password" id="password" name="password" placeholder="请输入原支付密码"  v-model="info.ypwd" v-on:blur="test">
        </div>
        <div class="ui-form-item ui-border-b">
            <label>新密码</label>
            <input type="password" id="password1" name="password1" placeholder="请输入新支付密码"  v-model="info.xpwd" v-on:blur="test">
        </div>
        <div class="ui-form-item ui-border-b">
            <label>确认新密码</label>
            <input type="password" id="password2" name="password2" placeholder="再次确认新支付密码" v-model="info.xpwd1" v-on:blur="test">
        </div>
    </form>
    <div class="ui-btn-wrap">
        <button class="ui-btn-lg ui-btn-primary" id="submit" :disabled=disabled v-on:click="goBaocun">保存</button>
    </div>
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
            disabled:true,
            info: {
                ypwd:"",
                xpwd:"",
                xpwd1:""
            }
        }
    },

    methods: {
        //失去焦点事件
        test:function(){
            const _this = this;
            if(this.info.ypwd!=""&&this.info.xpwd!=""&&this.info.xpwd1!=""){
                _this.disabled = false;
            }
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
        successTip: function (msg) {
            layer.open({
                content: msg,
                btn: ['确定'],
                yes: function () {
                    window.location.href = '/xiaojin/information/password.html'
                }
            });
        },
        //保存事件
        goBaocun: function () {
            const data = {
                pay_password: encrypt(this.info.ypwd),
                new_pay_password:encrypt(this.info.xpwd),
                re_password:encrypt(this.info.xpwd1)
            }
            //const _this = this;
            XHRPost('/oriental_treasure/MySeting/editPayPassword', data, function (response) {
                if (response.data.status === 1) {
                    this.successTip(response.data.info);
                    //this.successTip(1111);
                }else{
                    this.errorTip(response.data.info);
                }
                console.log(this.errorTip);
            }.bind(this))
        }

    }
    }
</script>