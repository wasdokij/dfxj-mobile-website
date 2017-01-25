<template>
    <div>
        <ul class="ui-list download-list ui-whitespace ui-border-b">
            <li class="margin-l-0">
                <div class="ui-list-thumb">
                    <span style="background-image:url(/jin2.0/images/app2.png)"></span>
                </div>
                <div class="ui-nowrap download-name line-h-16">
                    <h4 class="fnot14">吉林国际</h4>
                    <p class="font12 color-9b">大小 11.5MB</p>
                </div>
                <div class="download--btn font14" @click="changeLouter('http://106.74.18.13/dd.myapp.com/16891/DF0FD1F3C4F362B44A6D8AFC9F51BF4E.apk?mkey=577cb82786484ace&f=2b01&c=0&fsname=com.jlgjs.core_3.3.11_73.apk&asr=2d3d&p=.apk&n')">
                	下载
                </div>
            </li>
        </ul>
        <ul class="ui-list download-list ui-whitespace ui-border-b">
            <li class="margin-l-0">
                <div class="ui-list-thumb">
                    <span style="background-image:url(/jin2.0/images/app3.png)"></span>
                </div>
                <div class="ui-nowrap download-name line-h-16">
                    <h4 class="fnot14">深文所</h4>
                    <p class="font12 color-9b">大小 8.2MB</p>
                </div>
                <div class="download--btn font14" 
                	@click="changeLouter('http://120.76.157.205:9999/Gdcee.apk?n')">下载</div>
            </li>
        </ul>
    </div>
</template>
<style>
    .margin-b-25 {
  margin-bottom: 25px; }
</style>
<script>
    export default{
        data(){
            return{
                downloadTab:[
                    {
                        name:"苹果端",
                        active:true
                    },
                    {
                        name:"安卓端",
                        active:true
                    }
                ],
            }
        },
        components:{
        },
        methods: {
        	//路由导航
        	changeLouter: function (url) {
        		window.location.href = url;
        	},
            onActive(){
                this.downloadTab.active=!this.downloadTab.active
            }
        },
    }
</script>
