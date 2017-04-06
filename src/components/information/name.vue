  <template>
<div class="jin-wrap margin-t-10">
    <!--01-->
    <div class="border-b-1 border-t-1">
        <ul class="ui-list ul-all ui-list-active">
            <li data-href="#">
                <div class="rlt width-100">
                    <label class="ui-nowrap abs top-10">常用名</label>
                    <input type="text" placeholder="输入新常用名" class="ui-form-item input width-100 padding-l-60" id="name" v-model="info.name"/>
                </div>
            </li>
        </ul>
    </div>
    <!--02-->
    <div class="ui-btn-wrap">
        <button  class="ui-btn-kd ui-btn-yellow" style="border:0;" v-on:click="goToLogin">更改</button>
    </div>
    <!--04-->
    <loading v-if="loadingShow"></loading>
    <!--<successing v-if="successingShow"></successing>-->
    <!--底部-->
</div>
</template>
<script type="text/jsx">
    import '../../js/lib/layer.js';
    import '../../js/lib/layer.css';
    import Loading from '../common/loading.vue';
    import { countdown } from '../../js/tools.js';
    import { XHRPost} from '../../js/ajax.js';

    export default{
        data(){
        return{
            info:{
                name: ""
            },
            loadingShow: false
        }
    },

    components: {
        Loading
    },
    methods: {
        errorTip: function (msg) {
            layer.open({
                content: msg,
                btn: ['确定'],
                yes: function () {
                    layer.closeAll();
                }
            });
        },
        goTomy: function() {
            this.$router.push({path:'/password'})
        },
        goTonext: function(){
            //this.$router.push({path:'/password'});
            const _this = this;
            setInterval(function () {
                _this.goTomy()
            },2000);
            console.log(6);

        },
        goToLogin: function() {
            const data = {
                user_name:encrypt(this.info.name)
            };
            //const _this = this;
            //console.log(this.info.name);
            this.loadingShow = true;
            XHRPost('/oriental_treasure/MySeting/editUserName', data, function (response) {
                //console.log(response);
                //console.log(data.input);
                this.loadingShow = false;
                const _this = this;
                if (response.data.status === 1) {
                    //window.location.href = '/xiaojin/information/password.html'
                    //_this.$router.push({path:'/password'});
                    this.goTonext();
                    console.log(55555);
                }else{
                    _this.errorTip(response.data.info);
                }
            }.bind(this));

        }

    }
    }
</script>