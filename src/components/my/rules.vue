<template>
<div class="jin-wrap">
    <!--01-->
    <div class="bg-dbbe83">
        <ul class="padding-b-10 padding-t-10 box">
            <li class="padding-l-10 box width-50">
                <div class="ui-avatar-s">
                        <span>
                            <img :src="user_avatar" alt=""/>
                        </span>
                </div>
                <div class="line-40-s margin-l-10 txt-color-fff font14">{{user_name}}</div>
            </li>
            <li class="width-50 txt-align-r padding-r-20">
                <div class="line-40 txt-color-fff font12">小金积分<span>{{xj_score}}</span></div>
            </li>
        </ul>
        <div class="padding-b-20 padding-t-20 box">
            <div class="padding-l-10 width-50">
                <div class="font24 txt-color-fff">{{level_name}}</div>
            </div>
            <div class="width-50 txt-align-r">
                <ul class="txt-center box txt-color-fff"  >
                    <li class="margin-r-20 width-50" >
                        <h4 class="font18">{{yq_rs}}</h4>
                        <div class="font12 txt-color-bbb">已邀请</div>
                    </li>
                    <li class="width-50 padding-r-20">
                        <h4 class="font18">{{jh_rs}}</h4>
                        <div class="font12 txt-color-bbb">已激活</div>
                    </li>

                </ul>
            </div>

        </div>
    </div>
    <!--02-->
    <div class="margin-t-10 bg-white">
        <div>
            <ul class="ui-list">
                <li>
                    <div class="yellow-s margin-t-15"> </div>
                    <div class="ui-list-info"><h4>东方小金VIP规则</h4></div>
                </li>
            </ul>
        </div>
        <ul>
            <li class="padding-l-20">
                <span class="txt-color-yellow">Q:</span>
                <span class="margin-l-10">什么是注册用户？</span>
            </li>
            <li class="padding-l-20 box padding-r-10" >
                <span class="txt-color-yellow">A:</span>
                <span class="margin-l-10 txt-color-9b font12 line-16">通过好友的邀请链接，完成注册即成为空店的注册用户</span>
            </li>
            <li class="padding-l-20 margin-t-10">
                <span class="txt-color-yellow">Q:</span>
                <span class="margin-l-10">什么是合格微股东？</span>
            </li>
            <li class="padding-l-20 box padding-r-10">
                <span class="txt-color-yellow margin-r-10">A:</span>
                <span class="txt-color-9b font12 line-16">体验完空店得一个项目，如果购买保险、购买空店商城的产品等，即可以成为合格的微股东，成为合格的微股东就有资格积累信息资产</span>
            </li>
            <li  class="padding-l-20 margin-t-10">
                <span class="txt-color-yellow">Q:</span>
                <span class="margin-l-10">如何提升自己的vip等级？</span>
            </li>
            <li  class="padding-l-20 box padding-r-10">
                <span class="txt-color-yellow">A:</span>
                <span class="margin-l-10 txt-color-9b font12 line-16">一度人脉中，合格微股东越多，意味着vip等级越高。</span>
            </li>
            <li  class="padding-l-20 margin-t-10">
                <span class="txt-color-yellow">Q:</span>
                <span class="margin-l-10">vip分为几个等级？</span>
            </li>
            <li  class="padding-l-20 box padding-r-10">
                <span class="txt-color-yellow">A:</span>
                <span class="margin-l-10 txt-color-9b font12 line-16">注册用户——>合格微股东——>银卡vip——>金卡vip</span>
            </li>
        </ul>


    </div>
    <!--03-->
    <div class="bg-white padding-b-20">
        <div>
            <ul class="ui-list">
                <li>
                    <div class="yellow-s margin-t-15"> </div>
                    <div class="ui-list-info"><h4>信息资产规则</h4></div>
                </li>
            </ul>
        </div>
        <div class="margin-b-10 box">
            <span class="padding-l-20 padding-r-10 txt-color-9b font12">成为正式微股东就有资格积累信息资产，根据信息资产分配级别获取信息资产</span>
        </div>
        <div class="margin-l-10 margin-r-10">
            <div class="box ui-row width-100 height-100">
                <div class="ui-col ui-col-33 bg-df4400 line-100 txt-center font16 txt-color-yellow">微股东人数</div>
                <div class="ui-col ui-col-33 bg-f49c22">
                    <div class="width-100 bg-e38600 height-30 txt-center line-30 txt-color-fff">一度人脉</div>
                    <div class="width-100 bg-f49c22 height-70 txt-center line-70 txt-color-fff font18">信息资产</div>
                </div>
                <div class="ui-col ui-col-33 bg-fabe00">
                    <div class="width-100 bg-eaaa00 height-30 txt-center line-30 txt-color-fff">二度人脉</div>
                    <div class="width-100 bg-fabe00 height-70 txt-center line-70 txt-color-fff font18">信息资产</div>
                </div>
            </div>
            <ul class="width-100" v-for="key in inRS">
                <li class="box ui-row line-30" >
                    <div class="ui-col ui-col-33 txt-center bg-e3e3e3">{{key.rsA}}</div>
                    <div class="ui-col ui-col-33 txt-center bg-e9ebea">{{key.rsB}}</div>
                    <div class="ui-col ui-col-33 txt-center bg-e3e3e3">{{key.rsC}}</div>
                </li>
                <li class="box ui-row line-30">
                    <div class="ui-col ui-col-33 txt-center bg-f7">{{key.rsD}}</div>
                    <div class="ui-col ui-col-33 txt-center bg-fe">{{key.rsE}}</div>
                    <div class="ui-col ui-col-33 txt-center bg-f7">{{key.rsF}}</div>
                </li>
                <!--<li class="box ui-row line-30">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">2001~5000</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e9ebea">1600</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">800</div>-->
                <!--</li>-->
                <!--<li class="box ui-row line-30">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">5001~10000</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-fe">1200</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">600</div>-->
                <!--</li>-->
                <!--<li class="box ui-row line-30">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">1万~2万</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e9ebea">800</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">400</div>-->
                <!--</li>-->
                <!--<li class="box ui-row line-30">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">2万~5万</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-fe">400</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">200</div>-->
                <!--</li>-->
                <!--<li class="box ui-row line-30">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">5万~10万</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e9ebea">200</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">100</div>-->
                <!--</li>-->
                <!--<li class="box ui-row">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">10万~20万</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-fe">80</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">40</div>-->
                <!--</li>-->
                <!--<li class="box ui-row line-30">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">20万~50万</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e9ebea">40</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-e3e3e3">20</div>-->
                <!--</li>-->
                <!--<li class="box ui-row line-30">-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">50万~100万</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-fe">20</div>-->
                <!--<div class="ui-col ui-col-33 txt-center bg-f7">10</div>-->
                <!--</li>-->
            </ul>

        </div>

    </div>

    <!--04-->
    <!--05-->
</div>
</template>
<style>
    img{
        width:100%;
        height:100%;
        background-size: 100% 100%;
        -webkit-border-radius: 200px;
    }
</style>
<script>
    import '../../js/lib/layer.js';
    import '../../js/lib/layer.css';
    import { countdown } from '../../js/tools.js';
    import { XHRGet} from '../../js/ajax.js';

    export default{
        data(){
        return{
            user_avatar:"",
            user_name:"",
            xj_score:"",
            level_name:"",
            yq_rs:"",
            jh_rs:"",
            inRS:[
                {rsA:"1~500",rsB:"",rsC:""},
                {rsD:"501~2000",rsE:"2000",rsF:"1000"},
                {rsA:"2001~5000",rsB:"1600",rsC:"800"},
                {rsD:"5001~10000",rsE:"1400",rsF:"1200"},
                {rsA:"1万~2万",rsB:"1000",rsC:"800"},
                {rsD:"2万~5万",rsE:"600",rsF:"400"},
                {rsA:"5万~10万",rsB:"200",rsC:"100"},
                {rsD:"10万~20万",rsE:"80",rsF:"40"},
                {rsA:"20万~50万",rsB:"40",rsC:"20"},
                {rsD:"50万~100万",rsE:"20",rsF:"10"}
            ]
        }
    },
    mounted: function () {
        const _this = this;
        XHRGet('/oriental_treasure/MyCenter/infoAssetRule', {}, function (response) {
            _this.user_avatar =  response.data.data.wechat_avatar;
            _this.user_name = response.data.data.user_name;
            _this.xj_score = response.data.data.score;
            _this.level_name = response.data.data.level_name;
            _this.yq_rs = response.data.data.invinting_count;
            _this.jh_rs = response.data.data.qualified_count;

        })
    }


    }
</script>