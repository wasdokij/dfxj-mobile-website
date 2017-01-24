<template>
    <div class="filtrate-tk af-up-before af-up-move" style="opacity: 1;">
        <div class="bg-white">
            <div class="jin-box-center">
                <div class="jin-box-align  jin-box-pack padding-t-15 padding-b-20">
                    <div class="bill-details-avatar">
                        <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                    </div>
                    <div class="margin-l-10 font14">
                        {{data.content}}
                    </div>
                </div>
                <div class="padding-b-5 font24 line-h-nor"  v-bind:class="{'color-money':data.money >0}">{{data.money}}</div>
                <div class="margin-b-20 font14 color-9b">订单已完成</div>
            </div>
            <ul class=" buil-list  ui-border-t">
                <li class="jin-justify-flex ui-border-b">
                    <div class="font14 color-4a">付款方式</div>
                    <div class="font12 color-9b">微股东支付</div>
                </li>
                <li class="jin-justify-flex ui-border-b">
                    <div class="font14 color-4a">文章标题</div>
                    <div class="font12 color-9b like-icon">  有没有可以称得上是真正的英雄的人有没</div>
                </li>
            </ul>
        </div>
        <div class="return-btm text-center font14">  <router-link class="" to="/bill">返回账单列表</router-link ></div>
    </div>
</template>
<style >
    .return-btm{
      width: 45%;
       height: 40px;
    line-height: 40px;
    margin: 20px auto;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 100px;
    }
</style>
<script>
    export default{
        data(){
            return{
                data:this.$route.query.plan
            }
        },
        props:{
            brotherData:{
                default: ''
            }
        },
        created: function() {
            console.log("打印")
        },
        components:{
        },
        methods:{
        }
    }
</script>
