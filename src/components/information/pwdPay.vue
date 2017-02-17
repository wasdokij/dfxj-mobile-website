<template>
<div>
<div class="ui-whitespace padding-t-10 padding-b-10">
    <span class="font16">你正在为15878193546重置支付密码</span>
</div>
<ul class="ui-list jin-list-link ui-list-active ui-border-tb">
    <li class="ui-border-t padding-t-5 padding-b-5"  onclick="location.href='/xiaojin/information/pwdPay1.html'">
        <div class="ui-list-info">
            <h4>我记得原支付密码</h4>
        </div>
    </li>
</ul>
<ul class="ui-list jin-list-link ui-list-active ui-border-tb margin-t-10">
    <li class="ui-border-t padding-t-5 padding-b-5"  v-on:click="goAuthentication">
        <div class="ui-list-info">
            <h4>我忘记支付密码了</h4>
        </div>
    </li>
</ul>
</div>
</template>
<script>
    import '../../js/lib/layer.js';
    import '../../js/lib/layer.css';
    import { countdown } from '../../js/tools.js';
    import { XHRPost} from '../../js/ajax.js';
    import { XHRGet} from '../../js/ajax.js';

    export default{
        data(){
        return{
            disabled:true,
            info: {
                isA: true,
                isB: false,
                id_cart_phone:"",
                bank_cart_phone:""
            }
        }
    },

    methods: {
        //没有身份证验证时间
        goAuthentication:function(){
            XHRGet('/oriental_treasure/UserRealInfo/showInfo', {}, function (response) {
                if (response.data.status === 0) {
                    window.location.href = '/xiaojin/information/authentication.html'
                }else{
                    window.location.href = '/xiaojin/information/pwdPay2.html'
                }

            })
        }
    }
    }
</script>