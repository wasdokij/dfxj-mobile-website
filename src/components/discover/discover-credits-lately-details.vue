<template>
    <div>
        <div  class="discover-credit-top bg-credits">
            <div class="ui-whitespace jin-justify-flex margin-b-15">
                <div class="credit-lately-nav-btn return-btn" @click="creditsHref">
                    <i class="jin-icon jin-icon-fanhui line-h-nor  font18"></i>
                </div>
                <div class="credit-lately-nav-btn filtrate-btn font14" @click="ruleHref">规则</div>
            </div>
            <div class="ui-whitespace ui-txt-white">
                <div class="font40 line-h-12 ">小金积分</div>
                <div class="font18">
                    <i class="font35 ">0</i>分
                </div>
            </div>
        </div>
        <div class="padding-20 bg-white" @click="creditsHref">
            <div class="credit-lately-btn">积分兑换商品</div>
        </div>
        <div class="ui-whitespace credit-lately-details-title font12">最近兑换记录</div>
      <!--  <ul class="ui-list jin-list">
            <li class="ui-border-b">
                <div class="ui-list-info line-h-14">
                    <div class="font14">盈利积分</div>
                    <div class="font12 color-9b">2016-11-22</div>
                </div>
                <div class="color-4ca">+123</div>
            </li>
        </ul>-->
        <!--空缺状态 start -->
        <div class="padding-tb-15b  bg-white">
            <div class="discover-credit-panel-null">
            </div>
            <div class="margin-t-10 text-center font14 color-9b">空旷到可以成为一片森林</div>
        </div>
        <!--空缺状态 end-->
    </div>
</template>
<style>
    .padding-tb-15b{
    padding:15% 0;
    }
  .padding-20{padding:20px}
</style>
<script>
    import Developing from 'components/discover/developing.vue';
    export default{
        data(){
            return{
                developing:false,
            }
        },
        components:{
            Developing
        },
        methods: {
            ruleHref(){
                window.location.href="/xiaojin/discover/rule.html"
            },
            creditsHref(){
                window.location.href="/xiaojin/discover/credits.html"
            }
        },
    }
</script>
