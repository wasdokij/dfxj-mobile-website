<template>
    <div>
        <div class="home-top home-log-bg"></div>
		<div class="ui-whitespace margin-b-10 ui-justify-flex box-align bg-white">
            <div class="box-align home-data"  v-if="isLogin">
                <div class="xj-avatar-tiled margin-r-10">
                    <span style="background-image:url(http://placeholder.qiniudn.com/60x60)"></span>
                </div>
                <div class="box-align">
                    <div class="margin-r-5 font14 color-9b">这是标题，加ui-no</div>
                    <div class="user-vip text-center font10">Lv2</div>
                </div>
            </div>
            <div class="box-align color-9b" v-else="">
                 <div class="xj-avatar-tiled isLog margin-r-10">
                     <i class="jin-icon jin-icon-user1"></i>
                </div>
                <div class="font14 color-9b">未登录</div>
            </div>
			<div class="asset-btn">邀请好友</div>
		</div>
        <!--小娱乐-->
        <div class="bg-white margin-b-25">
            <ul class="ui-list jin-list-link ">
                <li class="margin-l-0">
                    <div class="item-card-lable"></div>
                    <div class="ui-list-info font14">小娱乐</div>
                    <span class="font12 color-9b">注意事项</span>
                </li>
            </ul>
            <div>
                <ul class="ui-list ui-list-one jin-list-link ui-border-t">
                    <li>
                        <div class="xj-avatar-tiled">
                            <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                        </div>
                        <div class="jin-list-info">
                            <div class="ui-nowrap exchange-name">
                                <div class="font14">广东深文所</div>
                                <div class="font12 color-9b">止盈止损人性化</div>
                            </div>
                            <div class="font12 color-f75c">立即体验</div>
                        </div>
                    </li>
                </ul>
                <ul class="ui-list ui-list-one jin-list-link ui-border-t">
                    <li>
                        <div class="xj-avatar-tiled">
                            <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                        </div>
                        <div class="jin-list-info">
                            <div class="ui-nowrap exchange-name">
                                <div class="font14">广东深文所</div>
                                <div class="font12 color-9b">止盈止损人性化</div>
                            </div>
                            <div class="font12 color-f75c">立即体验</div>
                        </div>
                    </li>
                </ul>
            </div>
            <h5 class="padding-t-15 padding-b-15 font10 text-center color-9b ui-border-t">投资有风险，入市须谨慎</h5>
        </div>
        <!--发售模式-->
        <div class="bg-white margin-b-25">
            <ul class="ui-list ui-list-text">
                <li class="margin-l-0">
                    <div class="item-card-lable"></div>
                    <div class="ui-list-info font14">发售模式</div>
                </li>
            </ul>
            <div>
                <ul class="ui-list jin-sell-list ui-whitespace ui-border-t">
                    <li class="margin-l-0 ui-border-t">
                        <div class="ui-avatar">
                            <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                        </div>
                        <div class="ui-nowrap exchange-name line-h-16">
                            <h4 class="fnot14">吉商发售</h4>
                            <p class="font12 color-9b">开户审核中</p>
                        </div>
                        <div class="dredge-btn">立即开户</div>
                    </li>
                </ul>
            </div>
            <h5 class="padding-t-15 padding-b-15 font10 text-center color-9b ui-border-t">投资有风险，入市须谨慎</h5>
        </div>
    </div>
</template>
<style>
.isLog{
  display: -webkit-box;
  -webkit-box-sizing: border-box;
  -webkit-box-orient: vertical;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background: #F4F3F3;
}
    .margin-b-25 {
  margin-bottom: 25px;
   }
</style>
<script>
import "../../js/ajax";
    export default{
        data(){
            return{
                isLogin:false
            }
        },
        created(){
            this.onIsLogin()
        },
        components:{
        },
        methods: {
            onIsLogin(){
                var load = layer.open({ type: 2,shadeClose: false})
                XHRPost('/oriental_treasure/Index/isLogin', function (response) {
                    console.log(response)
                    layer.close(load);
                });
            }
        },
    }
</script>
