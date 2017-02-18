<template>
    <div>
        <div class="bill-border-t" v-for="key2 in billList">
            <ul class="ui-list bill-list-one jin-list-link" @click="onMonth(key2.title)">
                <li class="">
                    <div class="bill-list-info padding-r-0 ">
                        <h4 class="font14">{{key2.title}}</h4>
                        <div class="font12 color-9b" >查看月账单</div>
                    </div>
                </li>
            </ul>
            <ul class="ui-list bill-list-nor" v-for="key in key2.list">
                <li class="bill-border-b" >
                    <div class="bill-list-time padding-r-10">
                          <div class="color-9b line-h-nor" v-if="key.add_date.length < 8">
                            <div class="margin-b-5 font14">{{key.add_date.substring(0,2)}}</div>
                            <div class="font12">{{key.add_date.substring(2)}}</div>
                        </div>
                        <div class="color-9b line-h-nor" v-else="">
                            <div class="margin-b-5 font14">{{key.add_date.substring(0,4)}}</div>
                            <div class="font12">{{key.add_date.substring(5)}}</div>
                        </div>
                    </div>
                    <div class="bill-list-type">
                        <ul class="ui-list" @click="billDetails(key.id)">
                            <li class="">
                                <div class="ui-avatar-s">
                                    <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                                </div>
                                <div class="ui-list-info padding-r-0">
                                    <ul class="jin-justify-flex">
                                        <li  v-if="key.type==9">-{{key.money}}</li>
                                        <li  v-else="">+{{key.money}}</li>
                                        <li class="font12 color-money-type">{{key.typeName}}</li>
                                    </ul>
                                    <div class="font12 color-9b">{{key.typeName}} <span
                                            v-if="key.type==205 || key.type==101 || key.type==206 || key.type==209 || key.type==210"
                                    >交易时间{{key.transaction_time}}</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .bill-border-t  .bill-list-nor:last-child >li{
        border-bottom: 0;
    }
    .ui-avatar-s{
  margin: 16px 10px 16px 0 !important;
}
</style>
<script>
    export default{
        data(){
            return{
                infoData:"",
                billstart:"",
            }
        },
        props:["bill-list","keyword"],
        created(){
        },
        components:{
        },
        methods:{
            onClick() {
                this.showModal=true;
            },
            //            查看月账单
            onMonth(time){
                this.$emit('month-data',time);
            },
            // 查看详情
            billDetails(key){
                this.$router.push({path:'/bill/billDetails',query: { plan:key }})
                this.$emit('brother-data',key);
            }
        }
    }
</script>
