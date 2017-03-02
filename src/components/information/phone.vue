<template>
<div class="jin-wrap margin-t-10">
    <!--01-->
    <div class="border-b-1 border-t-1">
        <ul class="ui-list ul-all ui-list-active" >
            <li data-href="#">
                <div class="rlt width-100">
                    <label class="ui-nowrap abs top-10">手机号</label>
                    <input type="text"  class="ui-form-item input width-100 txt-color-d6" :placeholder="info.input" style="text-align:right;" readonly="readonly" id="name"/>
                </div>

            </li>
        </ul>
    </div>
    <!--02-->
    <router-link to="/xiugai">
    <div class="ui-btn-wrap">
        <button  class="ui-btn-kd ui-btn-yellow" >更改手机号</button>
    </div>
    </router-link>
    <!--03-->
    <div class="font12">
        <span class="margin-l-10 txt-color-ddd">一个手机号码只能作为一个账号的登录名，请谨慎更换</span>
    </div>
</div>

<!--下一个页面-->

</template>
<script type="text/jsx">
    import Vue from 'vue';
    import axios from 'axios';
    import '../../js/lib/layer.js';
    import '../../js/lib/layer.css';
    import Loading from '../common/loading.vue';
    import { countdown } from '../../js/tools.js';
    import { XHRPost} from '../../js/ajax.js';
    import { XHRGet} from '../../js/ajax.js';
    export default{
        data(){
        return{
            info: {
                input:""
            }
        }
    },

    mounted: function () {
        const _this = this;
        XHRGet('/oriental_treasure/MySeting/index', {}, function (response) {
            _this.info.input = response.data.data.cellphone;
        })
    }

    }
</script>