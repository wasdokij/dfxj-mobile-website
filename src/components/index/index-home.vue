<template>
    <div>
        <div class="home-top home-log-bg"></div>
		<div class="ui-whitespace margin-b-10 ui-justify-flex box-align bg-white">
            <div class="box-align home-data"  v-if="isLogin">
                <div class="xj-avatar-tiled margin-r-10">
                    <span :style="{backgroundImage: 'url('+ userData.wechat_avatar+')'}"></span>
                </div>
                <div class="box-align">
                    <div class="margin-r-5 font14 color-9b">{{userData.user_name}}</div>
                    <div class="user-vip text-center font10">{{userData.level_name}}</div>
                </div>
            </div>
            <div class="box-align color-9b" v-else="" @click="onLogin">
                 <div class="xj-avatar-tiled isLog margin-r-10">
                     <i class="jin-icon jin-icon-user1"></i>
                </div>
                <div class="font14 color-9b">未登录</div>
            </div>
			<div class="asset-btn" @click="onLogin">
                <i v-if="isLogin">邀请好友</i>
                <i v-else="">立即登录</i>
            </div>
		</div>
        <!--小娱乐-->
        <div class="bg-white margin-b-15">
            <ul class="ui-list jin-list">
                <li class="margin-l-0">
                    <div class="item-card-lable"></div>
                    <div class="ui-list-info font14">小娱乐</div>
                    <!--<span class="font12 color-9b">注意事项</span>-->
                </li>
            </ul>
            <div>
                <ul class="ui-list ui-list-one jin-list-link ui-border-t">
                    <li @click="changeLouter('http://weixin008.gdcee.cc/')">
                        <div class="xj-avatar-tiled">
                            <span class="gw-bg"></span>
                        </div>
                        <div class="jin-list-info">
                            <div class="ui-nowrap exchange-name">
                                <div class="font14">广文投教</div>
                                <div class="font12 color-9b">止盈止损人性化</div>
                            </div>
                            <div class="font12 color-f75c">立即体验</div>
                        </div>
                    </li>
                </ul>
                <ul class="ui-list ui-list-one jin-list-link ui-border-t">
                    <li @click="changeLouter('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdcbafc192f16db2d&redirect_uri=http%3A%2F%2Fwp88.jilinpme.com%2Ftradewx%2fapp%2faccess%2fweixin%3fpaycode%3dwxdcbafc192f16db2d%26peerid%3d16284%26orgid%3d17271%26brokerid%3d-1&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect                     ')">
                        <div class="xj-avatar-tiled">
                            <span class="jl-bg"></span>
                        </div>
                        <div class="jin-list-info">
                            <div class="ui-nowrap exchange-name">
                                <div class="font14">吉商在线</div>
                                <div class="font12 color-9b">5元起步，低门槛</div>
                            </div>
                            <div class="font12 color-f75c">立即体验</div>
                        </div>
                    </li>
                </ul>
            </div>
            <h5 class="padding-t-15 padding-b-15 font10 text-center color-9b ui-border-t">投资有风险，入市须谨慎</h5>
        </div>
        <!--发售模式-->
        <div class="bg-white margin-b-15">
            <ul class="ui-list ui-list-text">
                <li class="margin-l-0">
                    <div class="item-card-lable"></div>
                    <div class="ui-list-info font14">发售模式</div>
                </li>
            </ul>
            <div>
                <ul class="ui-list jin-sell-list ui-whitespace ui-border-t">
                    <li class="margin-l-0 ui-border-t" 
                    	@click="changeLouter('http://jin.weigudong.cn/index.php/Jishang/info.html')">
                        <div class="ui-avatar">
                            <span class="jsfs-bg" :style="{backgroundImage: 'url(/jin2.0/images/jscp-logo.png)'}"></span>
                        </div>
                        <div class="ui-nowrap exchange-name line-h-16">
                            <h4 class="fnot14">吉商发售</h4>
                            <!--<p class="font12 color-9b">开户审核中</p>-->
                        </div>
                        <div class="dredge-btn" @click.stop="changeLouter('http://spfskh.jilinpme.com:2088/index.php/online/default/register?code=105010001')">
                        	立即开户
                        </div>
                    </li>
                </ul>
            </div>
            <h5 class="padding-t-15 padding-b-15 font10 text-center color-9b ui-border-t">投资有风险，入市须谨慎</h5>
        </div>
        
        <!--大娱乐-->
        <div class="bg-white margin-b-15">
            <ul class="ui-list ui-list-text">
                <li class="margin-l-0">
                    <div class="item-card-lable"></div>
                    <div class="ui-list-info font14">大娱乐</div>
                </li>
            </ul>
            <div>
                <ul class="ui-list jin-sell-list ui-whitespace ui-border-t">
                    <li class="margin-l-0 ui-border-t"
                    	@click="changeLouter('http://jin.weigudong.cn/index.php/Gdcee/detail.html')">
                        <div class="ui-avatar">
                            <span class="jsfs-bg" :style="{backgroundImage: 'url(/jin2.0/images/app3.png)'}"></span>
                        </div>
                        <div class="ui-nowrap exchange-name line-h-16">
                            <h4 class="fnot14">广东深文所</h4>
                            <!--<p class="font12 color-9b">开户审核中</p>-->
                        </div>
                        <div class="dredge-btn" 
                        	@click.stop="changeLouter('http://jin.weigudong.cn/index.php/Gdcee/index.html')">
                        	立即开户
                        </div>
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
	import { XHRGet } from '../../js/ajax.js';
    export default{
        data(){
            return{
                isLogin:false,
                userData:"",
            }
        },
        created(){
            this.onIsLogin();
        },
        components:{
        },
        methods: {
        	//路由导航
        	changeLouter: function (url) {
        		if (this.isLogin === true) {
        			window.location.href = url;
        		} else {
        			 window.location.href="/xiaojin/login_register/login.html"
        		}
        		
        	},
            onIsLogin(){
                var _this = this;
                var load = layer.open({ type: 2,shadeClose: false})
                XHRGet('/oriental_treasure/Index/isLogin', {},function (response) {
                    if (response.data.status==0){
                        _this.isLogin=false;
                    }else {
                        _this.isLogin=true;
                        _this.loginUserBaseInfo()
                    }
                    layer.close(load);
                });
            },
            loginUserBaseInfo(){
                var _this = this;
                XHRGet('/oriental_treasure/Index/loginUserBaseInfo', {},function (response) {
                	console.info(response)
                    _this.userData = response.data.data;
                });
            },
            onLogin(){
                if (this.isLogin){
                    window.location.href="/xiaojin/index/invite.html?user_sn="+ this.userData.user_sn;
                }else {
                    window.location.href="/xiaojin/login_register/login.html"
                }
            }
        },
    }
</script>
