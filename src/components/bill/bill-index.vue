<template>
    <div>
        <div  class="discover-message-top padding-t-15 padding-b-15 bg-white">
            <div class="ui-whitespace jin-justify-flex margin-b-15">
                <div class="message-nav-btn return-btn" onclick="location.href='/xiaojin/my/index.html'">
                        <i class="jin-icon jin-icon-fanhui line-h-nor  font18"></i>
                </div>
                <div class="message-nav-btn filtrate-btn font14" @click="onClick">筛选</div>
            </div>
            <div class="jin-box-align ui-whitespace line-h-12 font40">
                账单
                <div class="ui-list-info padding-r-0 text-right font18 color-4a">{{walletType}}</div>
            </div>
        </div>
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
        <div  style="overflow: auto;height:calc(100vh - 128px );-webkit-overflow-scrolling: touch;"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="busy"
              infinite-scroll-distance="100"
        >
            <bill-list
                    :bill-list="billData"
                    @brother-data="brotherData"
                    @month-data="monthData"
                    :keyword="keyword"
            ></bill-list>
            <!--加载更多-->
            <div class="ui-loading-wrap ba-wi" v-if="loadMoreTip">
                <p class="font14 ui-txt-info">加载中</p>
                <i class="ui-loading"></i>
            </div>
            <!--空缺状态 start -->
            <div class="margin-b-15 text-center" v-if="nullData">
                <img src="/jin2.0/images/null-data.png"/>
                <div class="margin-t-10 font14 ui-txt-muted">空旷到可以成为一片森林</div>
            </div>
            <!--空缺状态 end-->
            <div class="ui-loading-wrap ba-wi" v-if="loadend && !nullData">
                <p class="font14 ui-txt-muted"><span class="no-more-data">已经到底了</span></p>
            </div>
        </div>
    </div>
</template>
<script>

    import BillFiltrate from 'components/bill/bill-filtrate.vue';
    import BillList from 'components/bill/bill-list.vue';
    import BillDetails from 'components/bill/bill-details.vue';
    import { XHRGet } from '../../js/ajax.js';
    export default{
        data(){
            return{
                busy:false,
                billDetails:false,
                showModal: false,
                walletType:"全部账单",
                walletTypeKey:"",
                keyword:[
                    {name:'全部账单', keys:""},
                    {name:'VIP返佣', keys:"1"},
                    {name:'微股东分红', keys:"2"},
                    {name:'消费购物', keys:"3"},
                    {name:'钱包提现', keys:"9"},
                    {name:'华茂通佣金', keys:"101"},
                    {name:'发售模式佣金', keys:"811"},
                    {name:'小娱乐佣金', keys:"812"},
                ],
                billData:[],

                total: 0,
                nullData: false,
                loadend: false,
                loadMoreTip: false,
                month:""
            }
        },
        components:{
            BillFiltrate,BillList
        },
        created() {
            this.loadMore();
        },
        methods:{
            onClick(){
                this.showModal=true;
            },
            // 分页
            loadMore: function () {
               	this.loadMoreTip = true;
               	XHRGet('/oriental_treasure/billing/getlist',{limit:this.total, time:this.month, key:this.walletTypeKey},function (response) {
                    const data = response.data;
                    this.total= data.total;
                    this.loadingShow = false;
               	    this.loadMoreTip = false;
                    if (this.billData.length != 0) {
                    	var beforeTitle = this.billData[this.billData.length - 1].title;
                    	var lastone = this.billData[this.billData.length - 1];
                    }
                    for (let i = 0;i < data.data.length;i++) {
                    	if (data.data[i].title === beforeTitle) {
                    		lastone.list = lastone.list.concat(data.data[i].list)
                    	} else {
                    		this.billData.push(data.data[i]);
                    	}
                    }
                    if (data.data.length === 0) {
				    	this.loadend = true;
				    	this.busy = true;
				    }else {
                        this.loadend = false;
				    	this.busy = false;
                    }
                    if (data.total === 0) {
                    	this.nullData = true;
                    }else {
                        this.nullData = false;
                    }
                }.bind(this))
            },
            // 平行组件通讯
            brotherData(msg){
                this.billDetails=msg;
            },
             // 月账单-月份
            monthData(msg){
                this.month=msg;
                 this.total= 0;
                this.walletType=msg;
                this.billData=[];
                this.loadMore()
            },
            // 搜索数据请求
            childData(msg){
                this.walletTypeKey=msg.keys;
                this.walletType=msg.name;
                this.total= 0;
                this.billData=[];
                this.loadMore()
            },
        }
    }
</script>
