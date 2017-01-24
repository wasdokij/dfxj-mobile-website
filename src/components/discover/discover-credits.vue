<template>
    <div class="jin-wrap ui-border-b">
        <ul class="credits-top jin-justify-flex margin-b-10 bg-white">
            <li @click="latelyHref">
                <i class="credits-icon" style=""></i>
                <div><i class="color-f75c">0</i>积分</div>
            </li>
            <li @click="creditsDetailsHref">
                <i class="credits-icon" style="background-position: 4px -49px;"></i>
                <div>兑换记录</div>
            </li>
            <li @click="ruleHref">
                <i class="credits-icon" style="background-position: 0 -99px;"></i>
                <div>积分规则</div>
            </li>
        </ul>
        <ul class="ui-list jin-list-link ui-border-b" @click="onDeveloping">
            <li>
                <div class="item-quan"></div>
                <div class="ui-list-info">积分好礼</div>
                <span class="font12">更多产品</span>
            </li>
        </ul>
        <ul class="credits-exchange-list">
            <li class="ui-border-b" v-for="key in exchangeList" @click="onDeveloping">
                <i class="jin-icon jin-icon-construction font50 color-2e line-h-nor"></i>
                <div class="margin-t-5 font14 color-9b">功能正在开发中</div>
            </li>
        </ul>
        <developing v-if="developing" @close="developing = false"></developing>
    </div>
</template>
<style>
    .margin-b-25 {
  margin-bottom: 25px; }
</style>
<script>
    import Developing from 'components/discover/developing.vue';
    export default{
        data(){
            return{
                developing:false,
                exchangeList:[
                    "","","", "","","",
                ]
            }
        },
        components:{
            Developing
        },
        methods: {
            onDeveloping(){
                this.developing = true
            },
            latelyHref(){
                window.location.href="/xiaojin/discover/credits_lately_details.html"
            },
            ruleHref(){
                window.location.href="/xiaojin/discover/rule.html"
            },
            creditsDetailsHref(){
                window.location.href="/xiaojin/discover/credits_details.html"
            }
        },
    }
</script>
