<template>
    <div class="filtrate-tk af-up-before " v-bind:class="{ 'af-up-move': isActive}">
        <div class="ui-searchbar-wrap ui-border-b bg-white focus">
            <div class="ui-searchbar filtrate-input ">
                    <i class="jin-icon jin-icon-search font24" @click="onSeek"></i>
                <div class="ui-searchbar-input">
                    <input v-model="inputValue" type="text" class="jin-box-align font14"  placeholder="输入消息相关信息" />
                </div>
            </div>
            <button class="ui-searchbar-cancel font14"
                    @click="emitEvent"
            >取消</button>
        </div>
        <div class="margin-t-20 font14 color-4a">
            <ul class="filtrate-list  margin-b-10">
                <li v-for="key in keywordList" @click="onKeyword(key)">{{key.name}}</li>
            </ul>
        </div>
    </div>
</template>
<style>
.bg-white {
  background-color: #fff !important}
    .af-up-before {
	-webkit-transition-property: -webkit-transform;
    transition-property: transform;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
}
.af-up-move {
	-webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
</style>
<script>
    export default{
        data(){
            return {
                inputValue:'',
                inputName:'',
                keywordList:"",
                isActive:false,
                focusStatus:true,
            }
        },
        props:["show-modal","keyword"],
        created: function() {
            this.keywordList=this.keyword;
            let _this = this;
            setTimeout(function(){
            _this.isActive =_this.showModal;
            }, 10);
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus();
                },
                update: function (el) {
                    el.focus();
                },
            }
        },
        methods:{
            onKeyword(index) {
                this.inputValue= index.name;
                this.inputName= index;
                this.onSeek();
            },
            emitEvent () {
                this.isActive =false;
                let _this = this;
                setTimeout(function(){
                    _this.$emit('close')
                }, 400)
            },
            onSeek(){
                this.emitEvent();
                this.$emit('child-data',this.inputName);
            }
        },
    }
</script>
