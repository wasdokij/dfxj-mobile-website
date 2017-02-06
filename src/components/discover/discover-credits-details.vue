<template>
    <div>
        <div  class="discover-credit-top bg-white">
            <div class="ui-whitespace jin-justify-flex margin-b-15">
                <div class="credit-nav-btn return-btn" @click="creditsHref">
                    <i class="jin-icon jin-icon-fanhui line-h-nor  font18"></i>
                </div>
                <div class="credit-nav-btn filtrate-btn font14" >筛选</div>
            </div>
            <div class="jin-box-align ui-whitespace line-h-12 font40">
                兑换记录
            </div>
        </div>
        <!--空缺状态 start -->
        <div class="padding-tb-30 margin-t-10 bg-white">
            <div class="discover-credit-panel-null">
            </div>
            <div class="margin-t-10 text-center font14 color-9b">空旷到可以成为一片森林</div>
        </div>
        <!--空缺状态 end-->
    </div>
</template>
<style scoped>
.padding-tb-30 {
  padding-top: 30%;
   padding-bottom: 30%;
   }
</style>
<script>
    export default{
        data(){
            return{
            }
        },
        components:{
        },
        methods:{
             creditsHref(){
                window.location.href="/xiaojin/discover/credits.html"
            }
        }
    }
</script>
