<template>
    <div>
        <div class="bill-border-t" v-for="key2 in info">
            <ul class="ui-list bill-list-one ui-list-link ">
                <li class="">
                    <div class="bill-list-info">
                        <h4 class="font14">{{key2.title}}</h4>
                        <div class="padding-r-15 font12 color-9b" >查看月账单</div>
                    </div>
                </li>
            </ul>
            <ul class="ui-list bill-list-nor" v-for="key in key2.list">
                <li class="bill-border-b" >
                    <div class="bill-list-time padding-r-10">
                          <div class="color-9b line-h-nor" v-if="key.date.length < 8">
                            <div class="margin-b-5 font14">{{key.date.substring(0,2)}}</div>
                            <div class="font12">{{key.date.substring(2)}}</div>
                        </div>
                        <div class="color-9b line-h-nor" v-else="">
                            <div class="margin-b-5 font14">{{key.date.substring(0,4)}}</div>
                            <div class="font12">{{key.date.substring(5)}}</div>
                        </div>
                    </div>
                    <div class="bill-list-type">
                        <ul class="ui-list" @click="billDetails(key)">
                            <li class="">
                                <div class="ui-avatar">
                                    <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                                </div>
                                <div class="ui-list-info padding-r-0">
                                    <ul class="jin-justify-flex">
                                        <li  v-bind:class="{'color-money':key.money >0}">{{key.money}}</li>
                                        <li class="font14 color-money-type">{{key.content}}</li>
                                    </ul>
                                    <div class="font14 color-9b">空店专卖[罗汉果]收益发放</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!--空缺状态 start -->
        <div class="margin-b-10" v-if="info.length == ' ' ">
            <div class="discover-message--panel-null">
            </div>
            <div class="margin-t-10 text-center font14 color-9b">空旷到可以成为一片森林</div>
        </div>
        <!--空缺状态 end-->
    </div>
</template>
<style>
    .bill-border-t  .bill-list-nor:last-child >li{
        border-bottom: 0;
    }
</style>
<script>
    var data={"date":"今天13:50","type_name":"佣金发放","money":"+877.13","content":"保险佣金",type:true};
    export default{
        data(){
            return{
                info:this.bilList,
                billstart:data,
            }
        },
        props:["bil-list"],
        created(){
        },
        components:{
        },
        methods:{
            onClick() {
                this.showModal=true;
            },
            // 查看详情
            billDetails(key){
                this.$router.push({path:'/bill/billDetails',query: { plan:key  }})
                this.$emit('brother-data',key);
            }
        }
    }
</script>
