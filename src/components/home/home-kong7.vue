<template>
    <div>
        <!--start Top-->
        <div class="ui-list ui-justify-flex ui-whitespace padding-t-10 padding-b-10 ui-border-b" id="Top">
            <div class="home-top box-align">
                <div class="ui-avatar">
                    <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
                </div>
                <div class="home-top-l line-h-12">
                    <!--time-->
                    <div class="home-top-time box-align ui-border-b">
                        <div class="date">20</div>
                        <div class="month margin-l-10">
                            <div>12月</div>
                            <div>星期二</div>
                        </div>
                    </div>
                    <!--user-->
                    <div class="rlt box-align line-h-nor font14 color-9b">
                        <div>您好，浪哥哥</div>
                        <div class="user-vip text-center font10">Lv2</div>
                    </div>
                </div>
            </div>
            <ul class="box-align home-top-r color-9b">
                <li class="" :class="{'tab-active': key.tabText === currentView}" v-for="key in nav" @click="toggleTabs(key.tabText)">{{key.name}}</li>
            </ul>
        </div>
        <!--end Top-->
         <component :is="currentView" keep-alive ></component>
    </div>
</template>
<script>
    import HomeKong7Content from 'components/home/home-kong7-content.vue';
    import HomeKong7Card from 'components/home/home-kong7-card.vue';
    export default{
        data(){
            return{
                nav:[
                    {
                        name:'首页',
                        tabText: "tab1",
                    },
                    {
                        name:'名片',
                        tabText: "tab2",
                    },
                ],
                 currentView: 'tab1',
            }
        },
        components:{
            tab1: HomeKong7Content,
            tab2: HomeKong7Card,
        },
        methods: {
            //绑定tab的切换事件
            toggleTabs: function(index) {
                this.currentView = index;
            },
        },
    }
</script>
