<template>
    <div class="developing-panel">
        <div class="frame">
             <div class="top-log rlt"></div>
            <h4 class="font18">功能正在开发中</h4>
            <p class="text font14 color-4a">程序猿正在加班加点开发，请您耐心等待上线时间。</p>
            <div class="padding-t-10 padding-b-10 text-center ui-border-t" style="width: 100%;" @click="$emit('close')">
                <a>我知道了</a>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
