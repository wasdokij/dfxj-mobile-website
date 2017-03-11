<template>
    <div class="js_dialog my-dialog" v-show="visible">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__bd">
                <p>
                    {{ message }}
                </p>
            </div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="closeDialog">知道了</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: '',
                visible: false
            }
        },
        methods: {
            closeDialog() {
                this.visible = false;
            }
        }
    }
</script>

<style lang="sass">
    .my-dialog {
      .weui-dialog {
        width: 250px;
        border-radius: 5px;
        .weui-dialog__bd {
          padding: 25px 32px 9px 32px;
          p {
            font-size: 18px;
            color: #000;
            padding-bottom:5px;
          }
          span {
            display: inline-block;
            width:151px;
            font-size: 14px;
            color: #888;
            line-height: 18px;
          }
        }
      }
      a {
        color: #4990e2;
        font-size: 18px;
      }
    }
</style>