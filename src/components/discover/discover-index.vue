<template>
    <div>
        <div class="bg-white margin-b-10 ui-border-b">
            <ul class="discover-course-avatar jin-justify-flex ui-whitespace">
                <li class="ui-border-b" @click="changeLouter('/xiaojin/discover/download.html')">
                    <div  class="discover-icon" style="background-position: 0 -321px;"></div>
                    <div>
                        <h4 class="font14">软件下载</h4>
                        <div class="font12 color-9b">移动端交易软件</div>
                    </div>
                </li>
                <li class="ui-border-b" 
                	@click="changeLouter('http://www.jinyinbbs.com/forum-69-1.html')">
                    <div  class="discover-icon" style="background-position: 4px -268px;"></div>
                    <div>
                        <h4 class="font14">金银百家</h4>
                        <div class="font12 color-9b">金融交流服务平台</div>
                    </div>
                </li>
            </ul>
            <ul class="discover-course-avatar jin-justify-flex ui-whitespace">
                <li @click="gotofouc">
                    <div  class="discover-icon" style="background-position: 0 -371px;"></div>
                    <div>
                        <h4 class="font14">关注公众号</h4>
                        <div class="font12 color-9b">东方小金公众号</div>
                    </div>
                </li>
                <li @click="changeLouter(invit_url)">
                    <div  class="discover-icon" style="background-position: 3px -418px;"></div>
                    <div>
                        <h4 class="font14">邀请好友</h4>
                        <div class="font12 color-9b">好友一起赚钱</div>
                    </div>
                </li>
            </ul>
        </div>
        <ul>
            <li>
                <ul class="ui-list jin-list-link " @click="changeLouter('/xiaojin/discover/credits.html')">
                    <li class="padding-t-5 padding-b-5">
                        <div class="item-quan"></div>
                        <div class="ui-list-info font14">积分商城</div>
                        <span class="font12">更多产品</span>
                    </li>
                </ul>
                <div class="swiper-container swiper-shop-recoment padding-b-15 bg-white">
                    <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                        <div class="swiper-slide jin-product  line-h-nor" style="width: 40%;">
                            <div class="unfinished">
                                <i class="jin-icon jin-icon-construction font50 color-2e"></i>
                                <div class="margin-t-10 font14 color-9b">功能正在开发中</div>
                            </div>
                        </div>
                        <div class="swiper-slide jin-product  line-h-nor" style="width: 40%;">
                            <div class="unfinished">
                                <i class="jin-icon jin-icon-construction font50 color-2e"></i>
                                <div class="margin-t-10 font14 color-9b">功能正在开发中</div>
                            </div>
                        </div>
                        <div class="swiper-slide jin-product line-h-nor" style="width: 40%;">
                            <div class="unfinished">
                                <i class="jin-icon jin-icon-construction font50 color-2e"></i>
                                <div class="margin-t-10 font14 color-9b">功能正在开发中</div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>   
    </div>
</template>
<style>
    .margin-b-25 {
  		margin-bottom: 25px; 
  	}
  	.layui-m-layercont {
  		padding: 10px !important;
  	}

</style>
<script>
	import { XHRGet } from '../../js/ajax.js';
    export default{
        data(){
            return{
				invit_url: '',
            }
        },
        created: function () {
        	this.getUserInfo();
        },
        
        methods: {
        	//路由导航
        	changeLouter: function (url) {
        		window.location.href = url;
        	},
        	
        	getUserInfo () {
        		XHRGet('/oriental_treasure/Index/loginUserBaseInfo',{},function (responese) {
        			console.log(responese.data.data.user_sn)
        			if (responese.data.status === 1) {
        				this.invit_url = '/xiaojin/index/invite.html?user_sn=' + responese.data.data.user_sn;
        			}
        		}.bind(this));
        	},
        	
        	//关注公众号
        	gotofouc: function () {
        		layer.open({
        			title: '长按识别二维码关注',
        			content: '<img class="ver-middle" src="/jin2.0/images/qc-kd.jpg" width="100%">',
        			btn: ['关闭'],
        			yes: function () {
        				layer.closeAll();
        			}
        		});
        	},
        },

    }
</script>
