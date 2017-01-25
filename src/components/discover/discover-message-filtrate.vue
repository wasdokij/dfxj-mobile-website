<template>
    <div class="filtrate-tk">
        <div class="ui-searchbar-wrap ui-border-b bg-white focus">
            <div class="ui-searchbar filtrate-input">
                    <i class="ui-icon-search"></i>
                <div class="ui-searchbar-input">
                    <input value="" type="tel" class="font14" placeholder="输入消息相关信息" autocapitalize="off"  v-auto-focus="">
                </div>
            </div>
            <button class="ui-searchbar-cancel font14"
                    @click="$emit('close')"
            >取消</button>
        </div>
        <div class="margin-t-20 font14 color-4a">
            <ul class="filtrate-list k-box-pack margin-b-10">
                <li>佣金发放</li>
                <li>微股东分红</li>
                <li>物流信息</li>
            </ul>
            <ul class="filtrate-list k-box-pack">
                <li>信息资产</li>
                <li>文章</li>
                <li>一度人脉</li>
            </ul>
        </div>
    </div>
</template>
<style>
</style>
<script type="es6">
    export default{
        data(){
            return {

            }
        },
        directives: {
            'auto-focus': function (el) {
                Vue.nextTick(function () {
                    el.focus();
                });
            }
        },
    }
</script>
