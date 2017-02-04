<template>
    <div>
        <div class="home-top home-invite-bg"></div>
        <div class="bg-white margin-b-10 ui-border-b">
            <div class="padding-tb-25" @click="onInvite">
                <div class="invite-btn font14">
                    立即邀请
                </div>
            </div>
            <ul class="invite-course-avatar jin-justify-flex padding-b-20 color-9b">
                <li>
                    <i class="course-avatar" style="background-position: 0 -55px;"></i>
                    <div class="margin-t-10 font12">邀请好友</div>
                </li>
                <li>
                    <i class="course-avatar margin-b-30" style="background-position: 20px 10px;"></i>
                </li>
                <li>
                    <i class="course-avatar" style="background-position: 0 -130px;"></i>
                    <div class="margin-t-10 font12">好友注册并交易</div>
                </li>
                <li>
                    <i class="course-avatar margin-b-30" style="background-position: 20px 10px;"></i>
                </li>
                <li>
                    <i class="course-avatar" style="background-position: 0 -205px;"></i>
                    <div class="margin-t-10 font12">一起赚钱</div>
                </li>
            </ul>
        </div>
        <div class="bg-white">
            <ul class="invite-info-list padding-t-20 font14 color-7d">
                <li>
                    <div>已邀请好友</div>
                    <div class="color-a8">{{userData.yiduCount}}人</div>
                </li>
                <li>
                    <div>已激活好友</div>
                    <div class="color-a8">{{userData.qulifiedCount}}人</div>
                </li>
                <li>
                    <div>信息资产</div>
                    <div class="color-a8">{{userData.infoAsset}}</div>
                </li>
                <li>
                    <div>小金积分</div>
                    <div class="color-a8">{{userData.xiaojin_score}}</div>
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
                        信息资产分可参与平台的每月分红，具体请阅读 <a class="color-a8">详细规则</a>
                    </li>
                </ul>
            </div>
        </div>
        <index-invite-modal v-if="modal" v-bind:user-data="userData" @close="modal = false"></index-invite-modal>
    </div>
</template>
<style>
   .padding-tb-25 {
  padding-top: 25px;
  padding-bottom: 25px;
  }
  .margin-b-30{
  margin-bottom:30px !important;
  }
</style>
<script>
    import { XHRGet } from '../../js/ajax.js'
    import IndexInviteModal from 'components/index/index-invite-modal.vue';
    export default{
        data(){
            return{
                modal:false,
                userData:"",
            }
        },
        components:{
            IndexInviteModal
        },
        created(){
            this.invitingData()
        },
        methods: {
            onInvite(){
                this.modal = true;
            },
              invitingData(){
                  var _this =this;
                var load = layer.open({ type: 2,shadeClose: false})
                XHRGet('/oriental_treasure/Index/invitingData',{}, function (response) {
                     if (response.data.status==0){
                         layer.open({
                             content: '您还未登录！'
                             ,btn: '确定',
                             yes: function () {
                                 window.location.href="/xiaojin/index/"
                             }
                         });
                    }else {
                         _this.userData=response.data.data;
                    }
                    layer.close(load);
                });
            }
        },
    }
</script>
