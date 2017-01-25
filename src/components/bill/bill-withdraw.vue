<template>
    <div>
        <template v-if="!executePass && !executeFailure">
            <ul class="ui-list ui-list-link margin-t-15 margin-b-15 ui-border-tb">
                <li class="" @click="onBank">
                    <div class="ui-list-icon">
                        <span style="background-image:url(http://placeholder.qiniudn.com/80x80)"></span>
                    </div>
                    <div class="ui-list-info line-h-14">
                        <div class="font14">{{defaultInfo.bank_name}}</div>
                        <div class="font14 color-9b">尾号{{defaultInfo.number}}</div>
                    </div>
                </li>
            </ul>
            <div class="ui-whitespace margin-b-20 bg-white">
                <div class="padding-t-15 font12 color-4a">提现金额</div>
                <div class="jin-box-align  padding-t-15 padding-b-20 line-h-nor ">
                    <div class="margin-r-10 font30 color-4a">￥</div>
                    <div class="recharge-input  font28 color-4a">
                        <input type="tel"  placeholder="请输入金额" v-model="withdrawAll"  @focus="">
                    </div>
                </div>
                <div class="jin-justify-flex padding-t-10  padding-b-10 ui-border-t">
                    <div class="font12 color-9b">可用金额 {{data.money}}元</div>
                    <div class="font12" @click="onAll"><a>全部提现</a></div>
                </div>
            </div>
            <div class="ui-whitespace padding-t-10">
                <div class="recharge-btn btn-yellow  text-center">确认提现</div>
                <div class="padding-t-20">
                    <p class="margin-b-5 font14 color-4a">温馨提示：</p>
                    <p class=" font12 color-9b line-h-14">
                        申请提现后三个工作日内到账，提现金额将打到您选择的银行卡账户中，如果提现金额含有空店收益，空店收益部分将收取 1%的手续费。
                    </p>
                </div>
            </div>
        </template>
        <wallet-bank-card
                v-if="bank"
                @close="onSelectBank"
                v-bind:bank="bank"
                v-bind:info="data.info"
        ></wallet-bank-card>
        <wallet-execute-failure  v-if="executeFailure"></wallet-execute-failure>
    </div>
</template>
<style>

</style>
<script>
    import BankCard from 'components/bill/bank-card.vue';
    import ExecuteFailure from 'components/bill/execute-failure.vue';
    export default{
        data(){
            return{
                bank:false,
                executeFailure:false,
                data:{
                    info:[
                        {
                            bank_name:'中国建设银行',
                            number:'5621'
                        },
                        {
                            bank_name:'中国银行',
                            number:'5888'
                        }
                    ],
                    money:"2500"
                },
                defaultInfo: {
                            bank_name:'中国建设银行',
                            number:'5621'
                        },
                withdrawAll:'',
            }
        },
        components:{
            BankCard,ExecuteFailure
        },
        watch: {
        withdrawAll: function (val, oldVal) {
            var der = parseInt(this.data.money);
            var der2 = parseInt(val);
            if (der2 > der){
                this.withdrawAll=this.data.money
            }
        }
      },
        directives: {
            focus: {
                inserted: function (el, {value}) {
                    if (value) {
                        el.focus();
                    }
                }
            }
        },
        methods:{
            onBank(){
                this.bank=true
            },
            onSelectBank(e){
                this.bank=false;
                this.defaultInfo=e;
            },
            onAll(){
                this.withdrawAll=this.data.money;
            },
        }
    }
</script>
