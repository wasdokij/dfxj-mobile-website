<template>
    <div class="jin-wrap">
        <div class="home-top home-invite-bg"></div>
        <div class="bg-white margin-b-10 ui-border-b">
            <div class="padding-tb-25">
                <div class="invite-btn font14">
                    立即邀请
                </div>
            </div>
            <ul class="invite-course-avatar jin-justify-flex padding-b-20">
                <li style="background-position: 0 -55px;"></li>
                <li style="background-position: 20px 10px;"></li>
                <li style="background-position: 0 -130px;"></li>
                <li style="background-position: 20px 10px;"></li>
                <li style="background-position: 0 -205px;"></li>
            </ul>
        </div>
        <div class="bg-white">
            <ul class="invite-info-list padding-t-20 font14 color-7d">
                <li>
                    <div>已邀请好友</div>
                    <div>89人</div>
                </li>
                <li>
                    <div>已激活好友</div>
                    <div>32人</div>
                </li>
                <li>
                    <div>信息资产</div>
                    <div>30000</div>
                </li>
                <li>
                    <div>小金积分</div>
                    <div>4000</div>
                </li>
            </ul>
            <div class="invite-rule-list  padding-tb-25">
                <div class="box-align">
                    <div class="item-card-lable"></div>
                    <div>邀请规则</div>
                </div>
                <ul class="font12 color-7d line-h-12">
                    <li>
                        <i class="invite-rule-dian font22">&bull;</i>
                        朋友成为合格微股东后，您会获得信息资产分以及每月业绩佣金
                    </li>
                    <li>
                        <i class="invite-rule-dian font22">&bull;</i>
                        信息资产分可参与平台的每月分红，具体请阅读<i>详细规则</i>
                    </li>
                </ul>
            </div>
        </div>
        <home-invite-modal></home-invite-modal>
    </div>
</template>
<style>
   .padding-tb-25 {
  padding-top: 25px;
  padding-bottom: 25px;
  }
</style>
<script>
    import HomeInviteModal from 'components/index/home-invite-modal.vue';
    export default{
        data(){
            return{
            }
        },
        components:{
            HomeInviteModal
        },
        methods: {
        },
    }
</script>
