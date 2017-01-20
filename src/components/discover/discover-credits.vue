<template>
    <div class="jin-wrap ui-border-b">
        <ul class="credits-top jin-justify-flex margin-b-10 bg-white">
            <li>
                <i>88</i>
                <div><i>0</i>积分</div>
            </li>
            <li>
                <i>88</i>
                <div>兑换记录</div>
            </li>
            <li>
                <i>88</i>
                <div>积分规则</div>
            </li>
        </ul>
        <ul class="ui-list jin-list-link ui-border-b">
            <li>
                <div class="item-quan"></div>
                <div class="ui-list-info font14">技术文章</div>
                <span class="font12">更多文章</span>
            </li>
        </ul>
        <ul class="credits-exchange-list">
            <li class="ui-border-b">
                <i class="jin-icon jin-icon-construction font50 ui-txt-muted line-h-nor"></i>
                <div class="margin-t-5 font14 color-9b">功能正在开发中</div>
            </li>
           <li class="ui-border-b">
                <i class="jin-icon jin-icon-construction font50 ui-txt-muted line-h-nor"></i>
                <div class="margin-t-5 font14 color-9b">功能正在开发中</div>
            </li>
            <li>
                <i class="jin-icon jin-icon-construction font50 ui-txt-muted line-h-nor"></i>
                <div class="margin-t-5 font14 color-9b">功能正在开发中</div>
            </li>
            <li>
                <i class="jin-icon jin-icon-construction font50 ui-txt-muted line-h-nor"></i>
                <div class="margin-t-5 font14 color-9b">功能正在开发中</div>
            </li>
            <li>
                <i class="jin-icon jin-icon-construction font50 ui-txt-muted line-h-nor"></i>
                <div class="margin-t-5 font14 color-9b">功能正在开发中</div>
            </li>
            <li>
                <i class="jin-icon jin-icon-construction font50 ui-txt-muted line-h-nor"></i>
                <div class="margin-t-5 font14 color-9b">功能正在开发中</div>
            </li>
        </ul>
        <developing></developing>
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
            }
        },
        components:{
            Developing
        },
        methods: {
        },
    }
</script>
