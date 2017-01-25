<template>
    <div>
        <div class="padding-t-20 padding-b-20 bg-white">
            <ul class="download-tab" >
                <li :class="{'active': key.tabText === currentView}" v-for="key in nav" @click="toggleTabs(key.tabText)">{{key.name}}</li>
            </ul>
        </div>
        <div class="download-hint-panel ui-whitespace" v-if="close">
            <i class="jin-icon jin-icon-roundclosefill close abs font35 line-h-nor" @click="onClose"></i>
            <p class="download-hint-txt margin-l-5">
                温馨提示：如果点击下载没有反应，请点击右上角，选择在浏览器中打开，然后再下载即可
            </p>
        </div>
        <component :is="currentView" keep-alive ></component>
    </div>
</template>
<style>
    .margin-b-25 {
  margin-bottom: 25px; }
</style>
<script>
    import DownloadIos from 'components/discover/download-ios.vue';
    import DownloadAndroid from 'components/discover/download-android.vue';
    export default{
        data(){
            return{
                nav:[
                    {
                        name:'苹果端',
                        tabText: "tab1",
                    },
                    {
                        name:'安卓端',
                        tabText: "tab2",
                    },
                ],
                 currentView: 'tab1',
                close:true,
            }
        },
        components:{
             tab1:DownloadIos,
             tab2:DownloadAndroid
        },
        methods: {
            onClose(){
                this.close=false
            },
            //绑定tab的切换事件
            toggleTabs: function(index) {
                this.currentView = index;
            },
        },
    }
</script>
