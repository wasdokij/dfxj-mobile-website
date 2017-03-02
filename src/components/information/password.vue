<template>
<div class="jin-wrap margin-t-10" >
    <!--01-->
    <ul class="ui-list ul-all ui-list-active border-b-1 border-t-1  jin-list-link">
        <li class="ui-border-b" onclick="location.href='/xiaojin/information/name.html'">
            <div class="ui-list-info">
                <h4 class="ui-nowrap">常用名</h4>
            </div>
            <span class="font14 ui-txt-info">{{info.name}}</span>
        </li>
        <li class="ui-border-b" onclick="location.href='/xiaojin/information/inviter.html'">
            <div class="ui-list-info">
                <h4 class="ui-nowrap">邀请人</h4>
            </div>
            <span class="font14 ui-txt-info">{{info.yqr}}</span>
        </li>
        <li onclick="location.href='/xiaojin/information/phone.html'">
            <div class="ui-list-info">
                <h4 class="ui-nowrap">手机号码</h4>
            </div>
            <span class="font14 ui-txt-info" >{{info.phone}}</span>
        </li>
    </ul>
    <!--02-->
    <div class="possword border-b-1 border-t-1">
        <ul class="ui-list ul-all ui-list-active  jin-list-link">
            <li onclick="location.href='/xiaojin/information/mima.html'">
                <div class="ui-list-info">
                    <h4 class="ui-nowrap ">密码管理</h4>
                </div>
            </li>
        </ul>
    </div>
    <!--03-->
    <div class="exit border-b-1 border-t-1" v-on:click="getGoexit">
        <span class="exit-span">退出登录</span>
    </div>

    <!---->
</div>
</template>
<script type="text/jsx">
    import { XHRGet} from '../../js/ajax.js';
    export default{
        data(){
        return{
            info : {
                name: '',
                yqr: '',
                phone: ''
            }
        }
    },

    mounted: function () {
        const _this = this;
        XHRGet('/oriental_treasure/MySeting/index', {}, function (response) {
            _this.info.name = response.data.data.user_name;
            _this.info.yqr = response.data.data.inviting_people;
            _this.info.phone = response.data.data.cellphone;
        })
    },
    methods: {
        getGoexit:function (){
            XHRGet('/oriental_treasure/MySeting/logOut', {}, function () {
                window.location.href = '/xiaojin/login_register/login.html'
            })

        }
    }
    }
</script>