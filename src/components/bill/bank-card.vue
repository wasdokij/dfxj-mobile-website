<template>
    <div>
        <div class="ui-actionsheet"  v-bind:class="{show:bankShow}">
            <div class="ui-actionsheet-cnt">
                <div class="ui-whitespace bank-text text-left  color-4a ui-border-b">
                    选择银行卡
                </div>
                <ul class="ui-list ui-list-active padding-b-20">
                    <li class="ui-border-b" v-for="key in data" @click="onSelect(key)">
                        <div class="jin-avatar-s ui-list-thumb">
                            <span style="background-image:url(http://placeholder.qiniudn.com/80x80)"></span>
                        </div>
                        <div class="ui-list-info line-h-14 text-left" >
                            <div class="font14">{{key.bank_name}}</div>
                            <div class="font14 color-9b">尾号{{key.number}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                bankShow:'',
                data:''
            }
        },
        props:['bank','info'],
        components:{
        },
         created: function() {
             this.data=this.info;
             let _this = this;
             setTimeout(function(){
                 _this.bankShow =_this.bank;
             }, 100)
        },
        methods:{
            onSelect(e){
                let _this = this;
                setTimeout(function(){
                    _this.$emit('close',e)
                }, 300);
            }
        }
    }
</script>
