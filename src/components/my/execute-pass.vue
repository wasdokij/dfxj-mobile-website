<template>
    <div>
        <div class="jin-box-center padding-t-30">
            <i class="jin-icon jin-icon-chenggong execute-pass line-h-nor"></i>
            <div class="padding-t-10">
                <div class="text-center font20 color-4a">提现申请成功</div>
                <div class="text-center font14 color-9b">预计24小时内到账</div>
            </div>
        </div>
        <ul class="execute-details ui-whitespace">
            <li class="padding-t-10 padding-b-5 font14">
                <div class="margin-r-15">银行</div>
                 <div class=" color-9b">{{passBank.bank_name}}({{passBank.shorter_bank_no}})</div>
            </li>
            <li class="padding-b-10 padding-b-5 font14">
                <div class="margin-r-15">金额</div>
                <div class="color-9b">{{passMoney}}元</div>
            </li>
        </ul>
        <div class="ui-whitespace padding-t-30">
            <div class="recharge-btn btn-green text-center">完成</div>
        </div>
    </div>
</template>
<style>
.execute-pass{
  font-size: 100px;
  color: #13BE7B
}
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        props:['pass-bank','pass-money'],
        components:{

        }
    }
</script>
