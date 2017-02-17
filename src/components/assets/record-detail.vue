<template>
    <div class="filtrate-tk af-up-before af-up-move" style="opacity: 1;">
        <div class="bg-white">
            <div class="jin-box-center">
                <div class="padding-t-15 padding-b-20 font14">
                       微股东信息资产
                </div>
                <div class="padding-b-5 font24 line-h-nor color-money">+{{info.money}}</div>
                <div class="margin-b-20 font14 ui-txt-muted">{{info.type === 5 ? '二度人脉合格' : '一度人脉合格'}}</div>
            </div>
            <ul class=" buil-list  ui-border-t margin-b-10">
                <li class="jin-justify-flex">
                    <div class="font14">创建时间</div>
                    <div class="font12 ui-txt-muted">{{info.add_time}}</div>
                </li>
            </ul>
        </div>
        <ul class="ui-list ui-list-text">
            <li class="margin-l-0 ui-border-b">
                <h4 class="text-center font14">详细信息</h4>
            </li>
            <li>
                <div class="jin-box-align jin-box-align">
                    <div class="ui-avatar-s margin-r-10" style="display: block">
                        <span :style="{backgroundImage:'url('+info.fromAvatar+')'}"></span>
                    </div>
                    <h4 class="font14">{{info.fromName}}</h4>
                </div>
                <div class="font14 ui-txt-muted">合格奖励</div>
            </li>
        </ul>
        
        <div class="return-btm text-center font14">
        	<router-link to="/record">返回</router-link >
        </div>
        <loading v-if="loadingShow"></loading>
    </div>
</template>

<script>
import Loading from '../common/loading.vue';
import { XHRGet } from '../../js/ajax.js';
    export default{
        data(){
            return{
            	info: {},
                id: this.$route.query.id,
                loadingShow: true,
                title: '获得记录详情',
            }
        },
        created: function() {
        	document.title = this.title;
        	this.getData();
        	
        },
        activated: function () {
        	document.title = this.title;
        },
        components:{
        	Loading
        },
        methods:{
        	getData: function() {
				XHRGet('/oriental_treasure/MyCenter/my_asset_details', {id: this.id} , function (response) {
					this.loadingShow = false;
					console.log(response.data)
					const data = response.data.data;
					this.info = data;
				}.bind(this));
			},
        }
    }
</script>
<style scoped="scoped">
    .return-btm {
        width: 45%;
        height: 40px;
	    line-height: 40px;
	    margin: 20px auto;
	    background: #FFFFFF;
	    border: 1px solid #DADADA;
	    border-radius: 100px;
    }
    .return-btm a {
    	display: block;
    }

	.buil-list >li{
	    display: -webkit-box;
	    position: relative;
	    padding: 10px 15px;
	    -webkit-box-align: center;
	}

</style>
