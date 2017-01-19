<template>
    <div class="invite-modal">
        <div class="light">

        </div>
        <div class="packet rlt">
             <div class="packet-btn abs font18">壹仟元红包</div>
            <div class="ui-txt-white abs font18" style="  right: 10px;
    top: 10px;">X</div>
            <div class="packet-user text-center">
                <ul>
                    <li class="packet-user-qr jin-box-center" style="margin: auto;" v-if="!user">
                        <img  src="http://placeholder.qiniudn.com/100x100"/>
                    </li>
                    <li class="jin-box-center" v-if="user">
                        <div class="packet-user-avatar margin-b-15">
                            <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                        </div>
                        <h4 class="text-center">
                            全智贤邀请你领取东方小金1000元红包
                        </h4>
                    </li>
                </ul>
                <div class="packet-user-like margin-b-15"></div>
                <h4 class="font14">点击右上角立即分享</h4>
                <div class="padding-tb-25 font12 color-f8" @click="userQr">
                    <h5 v-if="user" >生成分享二维码</h5>
                    <h5 v-else="">返回</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.padding-tb-25 {
  padding-top: 25px;
  padding-bottom: 25px;
  }
</style>
<script>
    export default{
        data(){
            return{
                user:true,
            }
        },
        components:{
        },
        methods: {
            userQr(){
                this.user=!this.user;
            }
        },
    }
</script>
