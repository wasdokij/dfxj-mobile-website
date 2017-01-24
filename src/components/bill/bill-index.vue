<template>
    <div
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="100"
            class="app"
    >
        <div  class="discover-message-top">
            <div class="ui-whitespace jin-justify-flex margin-b-15">
                <div class="message-nav-btn return-btn">
                    <router-link class="display-b color-9b" to="/">
                        <i class="jin-icon jin-icon-fanhui line-h-nor  font18"></i>
                    </router-link>
                </div>
                <div class="message-nav-btn filtrate-btn font14" @click="onClick">筛选</div>
            </div>
            <div class="jin-box-align ui-whitespace line-h-12 font40">
                账单
                <div class="ui-list-info padding-r-0 text-right font18 color-4a">{{walletType}}</div>
            </div>
        </div>
        <bill-list
                :bil-list="data"
                @brother-data="brotherData"
        ></bill-list>
        <bill-filtrate
                v-if="showModal"
                @close="showModal = false"
                :keyword="keyword"
                :show-modal="showModal"
                @child-data="childData"
        >
        </bill-filtrate>
        <bill-details
                v-if="billDetails"
                :brother-data="billDetails"
                @close="billDetails = false"
        ></bill-details>
        <div class="nsr-card-loading">
            <nsr-loading :hide-loading="data.limit>0"></nsr-loading>
        </div>
    </div>
</template>
<style>
</style>
<script>
    var initialData = {data:[
        {
            "title":"本月",
            "list":[
                {"date":"今天13:50","type":1,"type_name":"佣金发放","money":"+877.13","content":"保险佣金"},
                {"date":"今天13:50","type":2,"type_name":"空店专卖","money":"-100","content":"罗汉果"},
                {"date":"2016-12-29","type":3,"type_name":"小卖部","money":"-150","content":"空店文化衫"},
            ]
        },
        {
            "title":"11月",
            "list":[
                {"date":"2016-11-23","type":1,"type_name":"佣金发放","money":"+877.13","content":"保险佣金"},
                {"date":"2016-11-20","type":2,"type_name":"空店专卖","money":"-100","content":"罗汉果"},
                {"date":"2016-11-5","type":3,"type_name":"小卖部","money":"-150","content":"空店文化衫"},
                {"date":"2016-11-20","type":4,"type_name":"空店专卖","money":"-100","content":"罗汉果"},
                {"date":"2016-11-5","type":5,"type_name":"小卖部","money":"-150","content":"空店文化衫"}
            ]
        }],
        limit:0};
    import BillFiltrate from 'components/bill/bill-filtrate.vue';
    import BillList from 'components/bill/bill-list.vue';
    import BillDetails from 'components/bill/bill-details.vue';
    import Loading from 'components/bill/loading.vue';
    export default{
        data(){
            return{
                busy: false,
                billDetails:false,
                showModal: false,
                isloadingComplete: false,
                walletType:"全部账单",
                keyword:[
                    {name:'佣金发放'},
                    {name:'微股东分红'},
                    {name:'空店专卖'},
                    {name:'小卖部'},
                    {name:'钱包充值'},
                    {name:'钱包提现'},
                    {name:'打赏'},
                    {name:'代理商佣金'}
                ],
                data:""
            }
        },
        components:{
            BillFiltrate,BillList,'nsr-loading':Loading,BillDetails
        },
        created() {
            this.data=initialData.data;
        },
        methods:{
            onClick(){
                this.showModal=true;
            },
            // 搜索数据请求
            childData(msg){
                this.walletType=msg;
                /*this.data.length=0;
                var keyBillArray= this.data;
                const loopTitleArray = function (billArray) {
                    for(var i= 0; i<billArray.length; i++){
                        const keyArray= billArray[i];
                        if (keyArray   instanceof Array){
                            loopTitleArray(keyArray)
                        }else {
                            keyBillArray.push(keyArray)
                        }
                    };
                };
                loopTitleArray(msg.info);*/
            },
            loadMore: function () {
        /*        var app = document.querySelector('.app')
                var clientHeight = app.clientHeight;
                var windowHeight= window.screen.height*/
                var _self = this;
                var scrollTop = document.body.scrollTop;
                if (scrollTop + window.innerHeight >= document.body.clientHeight){
                    if(initialData.limit==0) return false;
                    _self.isloadingComplete =true;
                    _self.busy = true;
                    setTimeout(function () {
                        _self.data.push()
                        console.log(1)
                        _self.busy = false
                    }, 1000)
                }else {
                      this.isloadingComplete =true;
                }
            },
            // 平行组件通讯
            brotherData(msg){
                this.billDetails=msg;
            }
        }
    }
</script>
