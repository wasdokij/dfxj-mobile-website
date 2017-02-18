<template>
    <div class="af-up-before af-up-move" style="opacity: 1;">
        <div class="bg-white">
            <div class="jin-box-center">
                <div class="padding-t-15 padding-b-20 font14" >
                    {{data.typeName}}
                </div>
                <div class="padding-b-5 font24 line-h-nor color-money">+{{data.money}}</div>
                <div class="margin-b-20 font14 ui-txt-muted">{{data.typeName}}</div>
            </div>
            <ul class=" buil-list ui-border-tb">
                <li class="jin-justify-flex">
                    <div class="font14">创建时间</div>
                    <div class="font12 ui-txt-muted">{{data.add_date}}</div>
                </li>
            </ul>
        </div>
        <ul class="ui-list ui-list-text ui-border-tb  margin-t-10">
            <li class="margin-l-0 ui-border-b">
                <h4 class="text-center font14">详细信息</h4>
            </li>
            <li>
                <div class="jin-box-align jin-box-align ui-txt-muted font14">
                    {{data.typeName}}
                </div>
                <div class="font14">+{{data.money}}</div>
            </li>
        </ul>
        <router-link to="/bill">
            <div class="return-btm text-center font14">
                返回
            </div>
        </router-link >
    </div>
</template>
<style >
    .return-btm{
      width: 45%;
       height: 40px;
    line-height: 40px;
    margin: 20px auto;
    background: #FFFFFF;
    border: 1px solid #DADADA;
    border-radius: 100px;
    }
</style>
<script>
    import { XHRGet } from '../../js/ajax.js';
    export default{
        data(){
            return{
                data:"",
            }
        },
        created: function() {
            this.getDetails()
        },
        components:{
        },
        methods: {
            getDetails(){
                	XHRGet('/oriental_treasure/billing/getInfo',{id:this.$route.query.plan},function (response) {
                        console.log(response)
                        this.data=response.data.data;
                    }.bind(this))
            }
        }
    }
</script>
