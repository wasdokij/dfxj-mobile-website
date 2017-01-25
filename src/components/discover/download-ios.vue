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
                <div class="download--btn font14" 
  		  @click="changeLouter('https://itunes.apple.com/cn/app/ji-lin-guo-ji-shang-pin-jiao/id1003663106?mt=8')">
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
                	@click="changeLouter('https://active.clewm.net/FaH257?qrurl=qr23.cn%2FFaH257&gtype=1&uname=it%2A%2A%2A%2A%40gdcee.cn&uuid=5799652b69e1576f1130f1c1&token=61a5aec05957259d1b9d7aa1635ee96e')">
                	下载
                </div>
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
