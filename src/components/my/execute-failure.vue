<template>
    <div>
        <div class="jin-box-center padding-t-30">
            <i class="jin-icon jin-icon-shibai execute-failure line-h-nor" ></i>
            <div class="padding-t-10 text-center font20 color-4a">操作失败</div>
        </div>
        <div class="ui-whitespace padding-t-30">
            <div class="recharge-btn btn-red text-center" @click="$emit('failure')">重试</div>
        </div>
    </div>
</template>
<style>
.execute-failure{
  font-size: 100px;
  color: #FF3E2A
}
</style>
<script>
    export default{
        data(){
            return{
            }
        },
        components:{

        }
    }
</script>
