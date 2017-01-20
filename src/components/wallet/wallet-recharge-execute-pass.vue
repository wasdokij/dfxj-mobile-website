<template>
    <div>
        <div class="k-box-center">
            <i class="ui-icon ui-icon-success execute-pass"></i>
            <div class="text-center font20 color-4a">充值成功</div>
        </div>
        <ul class="execute-details ui-whitespace">
            <li class="k-justify-flex padding-t-10 padding-b-5 font14">
                <div class="color-9b">来自</div>
                <div class="color-4a">微信支付</div>
            </li>
            <li class="k-justify-flex padding-b-10 padding-b-5 font14">
                <div class="color-9b">充值金额</div>
                <div>￥100</div>
            </li>
        </ul>
        <div class="ui-whitespace padding-t-30">
            <div class="recharge-btn btn-green text-center">充值成功</div>
        </div>
    </div>
</template>
<style>
.padding-t-30{padding-top:30px}
.execute-pass{
      margin-top: 20px;
      line-height: 120px;
      font-size: 140px;
      color:#13BF7B;
}
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
