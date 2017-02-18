<template>
    <div class="invite-modal">
        <div class="light">

        </div>
        <div class="packet rlt">
             <div class="packet-btn abs font18">邀请好友</div>
            <div class="ui-txt-white abs font18" style="  right: 10px;
    top: 10px;" @click="$emit('close')">X</div>
            <div class="packet-user text-center">
                <ul>
                    <li class="packet-user-qr jin-box-center" v-if="!user">
                        <img  v-bind:src="qrImg" class="ver-middle" v-if="qrImg.length>2"/>
                        <i v-else="">加载中...</i>
                    </li>
                    <li class="jin-box-center" v-if="user">
                        <div class="packet-user-avatar margin-b-15">
                            <span :style="{backgroundImage: 'url('+ modalData.wechat_avatar+')'}"></span>
                        </div>
                        <h4 class="text-center">
                            {{modalData.user_name}}邀请你注册东方小金一起赚钱
                        </h4>
                    </li>
                </ul>
                <div class="packet-user-like margin-b-15"></div>
                <h4 class="margin-t-10 font14">点击右上角立即分享</h4>
                <div class="padding-t-20 padding-b-20 font12 color-f8">
                    <div v-if="user" @click="userQr">生成分享二维码</div>
                    <div v-else="" @click="userTab">返回</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import { XHRGet } from '../../js/ajax.js'
    export default{
        data(){
            return{
                user:true,
                qrImg:"",
                modalData:this.userData
            }
        },
        props:["user-data"],
        components:{
        },
        methods: {
            userQr(){
                let _this =this;
                this.userTab();
                if (this.qrImg.length<5){
                    XHRGet('/oriental_treasure/Index/createInvitingQrcode', {},function (response) {
                        _this.qrImg = response.data.data;
                    });
                }
            },
            userTab(){
                this.user=!this.user;
            }
        },
    }
</script>
