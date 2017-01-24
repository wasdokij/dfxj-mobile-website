<template>
  <div class="nsr-loading-center" >
      <div v-if="hideLoading">
          加载中...
      </div>
  </div>
</template>

<script>
  module.exports = {
    props:{
      hideLoading:{
        default: false
      },
    },
  }
</script>
<style type="text/css">
  .nsr-loading-center{
    text-align:center;
    margin: 10px auto 10px auto;
    color: #929292;
  }
  .nsr-loading-hiden{
    display: none;
  }
</style>
