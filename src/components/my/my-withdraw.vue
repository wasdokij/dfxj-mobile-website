<template>
    <div>
        <template v-if="!executePass && !executeFailure">
            <ul class="ui-list jin-list-link margin-t-15 margin-b-15 ui-border-tb">
                <li class="" @click="onBank">
                    <div class="ui-list-icon">
                        <span  :style="{backgroundImage: 'url('+ defaultBank.logo +')'}"></span>
                    </div>
                    <div class="ui-list-info line-h-14">
                        <div class="font14">{{defaultBank.bank_name}}</div>
                        <div class="font14 color-9b">尾号{{defaultBank.shorter_bank_no}}</div>
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
                    <div class="font12 color-9b">可用金额 {{withdrawData.money}}元</div>
                    <div class="font12" @click="onAll"><a>全部提现</a></div>
                </div>
            </div>
            <div class="ui-whitespace padding-t-10">
                <div class="recharge-btn btn-yellow  text-center" @click="txFn">确认提现</div>
                <div class="padding-t-20">
                    <p class="margin-b-5 font14 color-4a">温馨提示：</p>
                    <p class=" font12 color-9b line-h-14">
                        申请提现后三个工作日内到账，提现金额将打到您选择的银行卡账户中，如果提现金额含有空店收益，空店收益部分将收取 1%的手续费。
                    </p>
                </div>
            </div>
            <input type="hidden" name="psw" id="psw" value="" />
        </template>
         <bank-card
                v-if="bank"
                @close="onSelectBank"
                v-bind:bank="bank"
                v-bind:bank-info="defaultInfo"
        ></bank-card>
        <execute-failure  v-if="executeFailure" @failure="executeFailure=false"></execute-failure>
        <execute-pass v-if="executePass"
                      :pass-bank="defaultBank"
                      :pass-money="withdrawAll"
        ></execute-pass>
    </div>
</template>
<style>
.padding-t-30{padding-top:30px}
</style>
<script>
    import BankCard from 'components/my/bank-card.vue';
    import ExecuteFailure from 'components/my/execute-failure.vue';
    import ExecutePass from 'components/my/execute-pass.vue';
    import { XHRGet, XHRPost } from '../../js/ajax.js';
    export default{
        data(){
            return{
                bank:false,
                executeFailure:false,
                executePass:false,
                withdrawData:{},
                defaultInfo: {},
                defaultBank:{},
                withdrawAll:'',
                psw:"",
                switch:false
            }
        },
        components:{
            BankCard,ExecutePass,ExecuteFailure
        },
        created(){
            this.onWithdraw()
        },
        watch: {
            withdrawAll: function (val, oldVal) {
                var num = this.withdrawData.money;
                var der = parseFloat(num.replace(/,/g, ''), 10);
                console.log(der)
                var der2 = parseFloat(val);
                if (der2 > der){
                    this.withdrawAll=der;
                }
            },
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
                this.defaultBank=e;
            },
            onAll(){
                var num = this.withdrawData.money;
                this.withdrawAll=parseFloat(num.replace(/,/g, ''), 10);
            },
            onWithdraw() {
                var load = layer.open({ type: 2,shadeClose: false})
                XHRGet('/oriental_treasure/Wallet/withdraw', {},function (response) {
                    const getData= response.data;
                    if (getData.status==1){
                        this.withdrawData=getData.data;
                        this.defaultInfo=getData.data.bank_cards;
                        this.defaultBank=getData.data.bank_cards[0];
                    }else {
                        this.isLogin=true;
                    }
                    layer.close(load);
                }.bind(this));
            },
            txFn() {
                var _this=this;
                layer.open({
                    title: '请输入交易密码',
                    content: '<input type="password" id="password" style="width:100%;height:40px; border:0;border-bottom:1px solid #ddd;">',
                    shadeClose: false,
                    btn: ['确认支付', '取消'],
                    no: function () {
                        layer.closeAll()
                    },
                    yes: function () {
                        if(this.switch) return false;
                        this.switch=true;
                        const postData= {
                            account:encrypt(_this.defaultBank.bank_card_no),
                            money:encrypt(_this.withdrawAll),
                            psw:encrypt(String(eval(document.getElementById('password').value)))
                        };
                        XHRPost('/oriental_treasure/Wallet/withdraw_apply',postData,function (msg) {
                            if (msg.data.status == 0) {
                                layer.open({
                                    content: msg.data.info,
                                    time: 2,
                                    style: 'background-color:rgba(0,0,0,.8);color:#fff'
                                });
                            } else {
                                 layer.closeAll()
                                _this.executePass=true;
                            }
                            this.switch=false;
                        }.bind(this));
                    }
                })
            }
        }
    }
</script>
