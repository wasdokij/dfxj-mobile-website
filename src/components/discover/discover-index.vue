<template>
    <div>
        <div class="bg-white margin-b-10 ui-border-b">
            <ul class="discover-course-avatar jin-justify-flex ui-whitespace">
                <li class="ui-border-b" @click="creditsHref">
                    <div  class="discover-icon" style="background-position: 0 -321px;"></div>
                    <div>
                        <h4 class="font14">软件下载</h4>
                        <div class="font12 color-9b">移动端交易软件</div>
                    </div>
                </li>
                <li class="ui-border-b">
                    <div  class="discover-icon" style="background-position: 4px -268px;"></div>
                    <div>
                        <h4 class="font14">金银百家</h4>
                        <div class="font12 color-9b">金融交流服务平台</div>
                    </div>
                </li>
            </ul>
            <ul class="discover-course-avatar jin-justify-flex ui-whitespace">
                <li>
                    <div  class="discover-icon" style="background-position: 0 -371px;"></div>
                    <div>
                        <h4 class="font14">关注公众号</h4>
                        <div class="font12 color-9b">东方小金公众号</div>
                    </div>
                </li>
                <li @click="inviteHref">
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
                <ul class="ui-list jin-list-link " @click="creditsHref">
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
            <li>
                <ul class="ui-list jin-list-link ">
                    <li class="padding-t-5 padding-b-5">
                        <div class="item-quan"></div>
                        <div class="ui-list-info font14">技术文章</div>
                        <span class="font12">更多文章</span>
                    </li>
                </ul>
        <ul class="ui-list k-list-link margin-t-15 margin-b-20 ui-border-tb">
            <li class="ui-border-b">
                <div class="item-card-lable"></div>
                <div class="ui-list-info"><h4>提醒</h4></div>
                <span class="font12 color-9b">1</span>
            </li>
            <li>
                <div class="item-card-lable"></div>
                <div class="ui-list-info"><h4>小卖部</h4></div>
            </li>
        </ul>
        <div class="margin-b-20">
            <ul class="ui-list k-list-link margin-t-10 ui-border-tb">
                <li >
                    <div class="item-card-lable"></div>
                    <div class="ui-list-info"><h4>文章</h4></div>
                </li>
            </ul>
            <div class="swiper-container swiper-shop-recoment padding-t-10 padding-b-10 bg-white ui-border-b">
                <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    <div class="swiper-slide discover-article-list">
                        <div class="discover-article-cover"></div>
                    </div>
                    <div class="swiper-slide discover-article-list">
                        <div class="discover-article-cover"></div>
                    </div>
                    <div class="swiper-slide discover-article-list">
                        <div class="discover-article-cover"></div>
                    </div>
                    <div class="swiper-slide discover-article-list">
                        <div class="discover-article-cover"></div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="ui-list k-list-link margin-b-20 ui-border-tb">
            <li>
                <div class="ui-list-info"><h4>加盟空店</h4></div>
            </li>
        </ul>
        <ul class="ui-list k-list-link  ui-border-tb">
            <li class="ui-border-b">
                <div class="ui-list-info"><h4>空店官网</h4></div>
                <span class="font12 color-9b">www.kongdian.me</span>
            </li>
            <li class="ui-border-b" >
                <div class="ui-list-info"><h4>注册数据</h4></div>
                <span class="font12 color-9b">500,000</span>
            </li>
            <li class="" >
                <div class="ui-list-info"><h4>联系方式</h4></div>
                <span class="font12 color-9b">400-888-666</span>
            </li>
        </ul>
    </div>
</template>
<style>
    .margin-b-25 {
  margin-bottom: 25px; }

</style>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{
        },
        methods: {
            creditsHref(){
                window.location.href="/xiaojin/discover/credits.html"
            },
            inviteHref(){
                window.location.href="/xiaojin/index/invite.html"
            },
            downloadHref(){
                window.location.href="/xiaojin/discover/download.html"
            }
        },


            }
        },
        components:{

        }

    }
</script>
