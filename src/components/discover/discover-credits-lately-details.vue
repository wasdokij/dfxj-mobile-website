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
                    <i class="font35 ">{{totalScore< 1 ? '0' : totalScore}}</i>分
                </div>
            </div>
        </div>
        <div class="padding-20 bg-white" @click="creditsHref">
            <div class="credit-lately-btn">积分兑换商品</div>
        </div>
        <div class="ui-whitespace credit-lately-details-title font12">最近兑换记录</div>
        <ul class="ui-list jin-list" v-if="!developing">
            <li class="ui-border-b" v-for="key in score">
                <div class="ui-list-info line-h-14">
                    <div class="font14" v-if="key.pals>0">盈利获得积分</div>
                    <div class="font14" v-else="">亏损获得积分</div>
                    <div class="font12 color-9b">{{key.transaction_years}}-{{key.transaction_month}}</div>
                </div>
                <div class="color-4ca">+{{key.integral}}</div>
            </li>
        </ul>
        <!--空缺状态 start -->
        <div class="frame-nul padding-tb-15b  bg-white" v-if="developing">
            <div class="discover-credit-panel-null">
            </div>
            <div class="margin-t-10 text-center font14 color-9b">暂无积分记录</div>
        </div>
        <!--空缺状态 end-->
    </div>
</template>
<style>
    .padding-tb-15b{
    padding:15% 0;
    }
  .padding-20{padding:20px}
    .discover-credit-panel-null {
    width: 30%;
    padding-top: 20%;
}
</style>
<script>
    import { XHRGet } from '../../js/ajax.js';
    export default{
        data(){
            return{
                developing:false,
                score:"",
                totalScore:""
            }
        },
        created(){
            this.myScore();
        },
        components:{
        },
        methods: {
             myScore() {
                XHRGet('/oriental_treasure/MyCenter/myScoreDetail',{page:this.page},function (response) {
                    this.score=response.data.data.detail_list;
                    this.totalScore=response.data.data.total_score;
                    if (this.score.length<1){
                        this.developing = true;
                    }
                }.bind(this))
            },
            ruleHref(){
                window.location.href="/xiaojin/discover/rule.html"
            },
            creditsHref(){
                window.location.href="/xiaojin/discover/credits.html"
            }
        },
    }
</script>
