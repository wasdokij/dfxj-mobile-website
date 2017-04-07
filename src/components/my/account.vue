
<template>
    <div class="k-wrap">
        <div class="swiper-container swiper-detail-hook">
            <div class="swiper-wrapper">
                <!--01-->
                <div class="swiper-slide" v-for="key in exc">
                    <header class="exchange-info-wrap">
                        <div class="exchange-info">
                            <!--天津矿产资源交易所-->
                            <ul class="ui-list">
                                <li class="ui-border-t">
                                    <div class="ui-list-thumb-s" style="border:4px solid #F6FF52;border-radius:50px;">

                                    </div>
                                    <div class="ui-list-info">
                                        <h4 class="ui-nowrap">{{key.type}}</h4>
                                    </div>
                                </li>
                            </ul>
                            <div class="exchange-info-account ui-whitespace font14 ui-txt-info text-right">
                                交易账号：{{key.account}}
                            </div>
                        </div>

                    </header>

                    <section class="personal-info bg-white">
                        <div class="k-box-center padding-t-20 padding-b-20 font16 ui-txt-info">个人开户信息</div>
                        <ul class=" ui-border-t">
                            <li class="clearfix ui-whitespace padding-t-15 padding-b-15 ui-border-b">
                                <h4 class="pull-left">开户姓名</h4>

                                <div class="pull-right font12 ui-txt-info">{{key.real_name}}</div>
                            </li>
                            <li class="clearfix ui-whitespace padding-t-15 padding-b-15 ui-border-b">
                                <h4 class="pull-left">开户身份证</h4>

                                <div class="pull-right font12 ui-txt-info">{{key.id_card_no}}</div>
                            </li>
                            <li class="clearfix ui-whitespace padding-t-15 padding-b-15 ui-border-b">
                                <h4 class="pull-left">开户银行</h4>

                                <div class="pull-right font12 ui-txt-info">{{key.bank_card_no}}</div>
                            </li>
                            <li class="clearfix ui-whitespace padding-t-15 padding-b-15">
                                <h4 class="pull-left">银行卡号</h4>

                                <div class="pull-right font12 ui-txt-info">{{key.bank_name}}</div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
                <!--切换-->
                <div class="swiper-pagination">
                    <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                    <span class="swiper-pagination-bullet"></span>
                </div>
            </div>

     </div>
</template>
<style>
    /*账号管理*/
    .exchange-info-wrap {
        position: relative;
        padding: 25px 10px;
        background-color: #4AA23E;
    }
    .exchange-info {
        padding: 5px 0;
        height: 150px;
        background-color: #fff;
        border-radius: 5px;
    }
    .exchange-info-account {
        margin-top: 65px;
    }
    /*账号交易切换*/
    .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        top: 36%!important;
        width: 100%;
    }

    .swiper-container {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        /* Fix of Webkit flickering */
        z-index: 1;
    }
    .swiper-wrapper {
        position: relative;
        width: 100%;height: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-transition-property: -webkit-transform;
        -moz-transition-property: -moz-transform;
        -o-transition-property: -o-transform;
        -ms-transition-property: -ms-transform;
        transition-property: transform;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
    }
    .swiper-slide {
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
    }
    /* Pagination Styles */
    .swiper-pagination {
        position: absolute;
        text-align: center;
        z-index: 10;
    }

    /* Bullets */
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 100%;
        background: #000;
        opacity: 0.2;
        margin: 0 5px;
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
        background: #fff;
    }
    .k-box-center {
        position: relative;
        display: -webkit-box;
        width: 100%;
        height: 100%;
        -webkit-box-flex: 1;
        -webkit-box-sizing: border-box;
        -webkit-box-orient: vertical;
        -webkit-box-pack: center;
        -webkit-box-align: center;
    }
</style>
<script type="text/jsx">
    import { XHRGet} from '../../js/ajax.js';

    export default{
       data(){
       return {
           exc:[]
       }
   },
   created(){
        this. getAccount();
   },
    methods : {
        getAccount(){
            const _this = this;
            XHRGet(' /oriental_treasure/MyCenter/myDealAccounts', {}, function (response) {
                _this.exc = response.data.data;
                _this.$nextTick(function(){
                    var swiper = new Swiper('.swiper-detail-hook', {
                        loop:true,
                        slidesPerView: 1,
                        paginationClickable: true,
                        spaceBetween: 30,
                        keyboardControl: true,
                        // 分页器
                        pagination: '.swiper-pagination'
                    });
                })

            })

        }
    }


   }


</script>