<template>
    <div>
        <div  class="padding-t-15 padding-b-10 bg-white ui-border-b">
            <div class="ui-whitespace jin-justify-flex margin-b-15">
            	<router-link to="/" class="back-btn  ui-txt-white">
            		<span class="jin-icon jin-icon-fanhui"></span>
            	</router-link>
            </div>
            <div class="ui-whitespace font35">信息资产记录</div>
        </div>
        <div
        	v-infinite-scroll="loadMore"
	        infinite-scroll-disabled="busy"
	        infinite-scroll-distance="0"  style="overflow: auto;height:calc(100vh - 128px );-webkit-overflow-scrolling: touch;">
	        <div class="bill-border-t ui-border-b" v-for="items in info">
	            <h4 class="time-tile ui-whitespace font14 ui-border-b">{{items.title}}</h4>
	            <ul class="ui-list bill-list-nor" v-for="item in items.list">
	                <li class="ui-border-b" >
	                    <div class="bill-list-time padding-r-10" >
	                        <div class="line-h-nor ui-txt-muted" v-if="item.add_time.length < 8">
	                            <div class="margin-b-5 font14">{{item.add_time.substring(0,2)}}</div>
	                            <div class="font12">{{item.add_time.substring(2)}}</div>
	                        </div>
	                        <div class="line-h-nor ui-txt-muted" v-else>
	                            <div class="margin-b-5 font14">{{item.add_time.substring(0,4)}}</div>
	                            <div class="font12">{{item.add_time.substring(5)}}</div>
	                        </div>
	                    </div>
	                    <div class="bill-list-type">
	                        <ul class="ui-list" @click="recordDetail(item.details_id)">
	                            <li class="">
	                                <div class="ui-avatar-s">
	                                    <span :style="{backgroundImage: 'url('+ item.fromAvatar +')'}"></span>
	                                </div>
	                                <div class="ui-list-info padding-r-0">
	                                    <ul class="jin-justify-flex">
	                                        <li class="font16">+{{item.money}}</li>
	                                        <li class="font12 color-money-type">信息资产</li>
	                                    </ul>
	                                    <div class="font14 ui-txt-muted line-h-nor">
	                                    	来自<span class="ui-txt-warning">{{item.fromName}}</span>
	                                    </div>
	                                </div>
	                            </li>
	                        </ul>
	                    </div>
	                </li>
	            </ul>
	        </div>
	        
	        <!--加载更多-->
	        <div class="ui-loading-wrap ba-wi" v-if="loadMoreTip">
		        <p class="font14 ui-txt-info">加载中</p>
		        <i class="ui-loading"></i>
		    </div>
		    <div class="ui-loading-wrap ba-wi" v-if="loadend">
		        <p class="font14 ui-txt-muted"><span class="no-more-data">已经到底了</span></p>
		    </div>
	        
	    </div>
        <!--空缺状态 start -->
        <div class="margin-b-15 text-center" v-if="nullData">
            <img src="/jin2.0/images/null-data.png"/>
            <div class="margin-t-10 font14 ui-txt-muted">空旷到可以成为一片森林</div>
        </div>
        <!--空缺状态 end-->
    </div>
</template>

<script>
import { XHRGet } from '../../js/ajax.js';
    export default{
        data(){
            return{
                info: [],
                busy: false,
                isloadingComplete: false,
                page: 0,
                loadMoreTip: false,
                loadend: false,
                nullData: false,
                title: '获得记录',
            }
        },
        created () {
        	document.title = this.title;
            this.loadMore();
        },
        activated: function () {
        	document.title = this.title;
        },
        methods:{
            loadMore: function () {
            	this.page++;
               	this.loadMoreTip = true;
               	XHRGet('/oriental_treasure/MyCenter/my_asset_list',{page:this.page},function (response) {
               	    this.loadingShow = false;
               	    this.loadMoreTip = false;
                    const data = response.data.data;
                    if (this.info.length != 0) {
                    	var beforeTitle = this.info[this.info.length - 1].title;
                    	var lastone = this.info[this.info.length - 1];
                    }
                   
                    for (let i = 0;i < data.data.length;i++) {
                    	if (data.data[i].title === beforeTitle) {
                    		lastone.list = lastone.list.concat(data.data[i].list)
                    	} else {
                    		this.info.push(data.data[i]);
                    	}
                    }
                    console.log(this.info)
                   
                    if (data.data.length === 0) {
				    	this.loadend = true;
				    	this.busy = true;
				    }
                    if (data.total_count === 0) {
                    	this.nullData = true;
                    }
               	}.bind(this))
            },
            // 查看详情
            recordDetail(id) {
                this.$router.push({path:'/recordDetail',query: { id: id  }})
            }
        }
    }
</script>
<style scoped>
	
	.time-tile {
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #f7f7f7;
	}
	.back-btn {
		color: #9B9B9B;
		background: #F7F7F7;
		border: 1px solid #DFDFDF;
	}
    .bill-border-t  .bill-list-nor:last-child >li{
        border-bottom: 0;
    }
    .bill-border-t:last-child {
    	border-bottom: none;
    }
    .ui-avatar-s{
	    margin: 16px 10px 16px 0 !important;
	}
	.bill-list-one{
	    border-top: #e0e0e0 1px solid;
	    border-bottom: #e0e0e0 1px solid;
	    background-color: #f7f7f7!important;
	}
	.bill-list-one > li {
	    padding-top: 0;
	    padding-bottom: 0;
	    line-height: 30px!important;
	}
	.bill-list-one .bill-list-info {
		-webkit-box-orient: horizontal
	}
	.bill-list-one h4{
	    -webkit-box-flex: 1;
	}
	.bill-list-info{
	    -webkit-box-flex: 1;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-box-pack: center;
	    padding-right: 15px;
	}
	.bill-list-time{
	    display: -webkit-box;
	    -webkit-box-align: center;
	    text-align: center;
	}
	.bill-border-b {
	    border-bottom: 1px solid #e0e0e0;
	}
	.bill-list-type{
	    -webkit-box-flex: 1;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-box-pack: center;
	    padding-right: 15px;
	}
	.color-money-type{color: #4990E2; }
</style>