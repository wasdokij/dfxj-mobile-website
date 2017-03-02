 <template>
<div>
    <div class="ui-list ui-justify-flex ui-whitespace k-box-align">
        <div class="header_pic width-20">
            <div class="ui-avatar">
                <img :src="wechat_avatar" alt=""/>
            </div>
        </div>
        <ul class="txt-center index-nav-ul width-80" >
            <li class=" width-33 box-left" onclick="location.href='/xiaojin/assets.html'">
                <h4 class="font16">{{info_asset}}</h4>
                <div class="font12 txt-color-bbb">信息资产</div>
            </li>
            <li class="width-33  box-left" onclick="location.href='/xiaojin/discover/credits_lately_details.html'">
                <h4 class="font16">{{score}}</h4>
                <div class="font12 txt-color-bbb">小金积分</div>
            </li>
            <li class="width-33  box-left"  onclick="location.href='/xiaojin/my/rules.html'">
                <h4 class="font16">{{level_name}}</h4>
                <div class="font12 txt-color-bbb">会员中心</div>
            </li>
        </ul>
    </div>
    <!--02-->
    <div class="bg-fe8 ui-whitespace">
        <div class="nav-title txt-color-9b pos-ret">
            <div class="font26 txt-color-f75c">{{nowDate}}</div>
            <div class="font10 margin-l-10 txt-color-f75c">
                <div>{{nowMonth+1}}月</div>
                <div>星期{{nowStr}}</div>
            </div>
            <div class="margin-l-10" style="width:70%;">
                <ul class="jin-list-link txt-color-f75c">
                    <li class="border-l line-h-16 padding-l-016 margin-l-10" @click="changeLouter(invite_url)">
                        <h4 class="ui-nowrap font14" style="font-weight: bold;" >邀请好友一起赚钱</h4>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!--03-->
    <div class="box pos-ret padding-b-20 padding-t-20">
        <div class="padding-l-10">
            <h4 class="font36 txt-color-f75c">{{can_user_money}}</h4>
            <div class="font12 txt-color-9b">可提现金额（元）</div>
        </div>
        <div class="pos-abs right-10">
            <span class="dis-b zd margin-t-15 txt-center txt-color-4A font14 cur-p"  onclick="location.href='/xiaojin/bill/index.html'">账单</span>
        </div>
    </div>
    <!--04-->
    <div class="padding-b-20 padding-t-20">
        <ul class="box">
            <li class="width-50">
                <div class="padding-l-20">
                    <h4 class="font20 ">{{last_month_divident}}</h4>
                    <div class="font12 txt-color-9b">上月分红（元）</div>
                </div>
            </li>
            <li class="border-l-ddd width-50">
                <div class="padding-l-20">
                    <h4 class="font20 ">{{last_month_commission}}</h4>
                    <div class="font12 txt-color-9b">上月佣金（元）</div>
                </div>
            </li>
        </ul>
    </div>
    <!--05-->
    <div class="box padding-b-20 padding-t-20">
        <div class="width-50">
            <span class="dis-b span-button bg-tx txt-center txt-color-fff margin-l-05 cur-p" v-on:click="getWithdrawal">提现</span>
        </div>
        <div class="width-50">
            <span class="dis-b span-button bg-jf txt-center txt-color-fff margin-l-05 cur-p"  onclick="location.href='/xiaojin/discover/credits.html'">积分商城</span>
        </div>
    </div>
    <!--06-->
    <div>
        <ul class="box ui-border-b ui-border-t">
            <li class="width-50 yz ui-border-r">
                <span class="font16 padding-t-20 padding-l-20" onclick="location.href='/xiaojin/mine/identity'">身份认证</span>
                <span class="txt-color-9b padding-b-20 padding-l-20 font14">{{real_name}}</span>
            </li>
            <li class="width-50 yz">
                <span class="font16 padding-t-20 padding-l-20" v-on:click="getBank">银行卡</span>
                <span class="txt-color-9b padding-b-20  padding-l-20 font14">{{user_bank_count}}张</span>
            </li>
        </ul>
        <ul class="box ui-border-b">
            <li class="width-50 yz ui-border-r">
                <router-link to="/password" class="click_ax">
                    <span class="font16 padding-t-20 padding-l-20" >个人设置</span>
                    <span class="txt-color-9b padding-b-20 padding-l-20 font14">修改个人信息</span>
                </router-link>
            </li>
            <li class="width-50 yz">
            </li>
        </ul>
    </div>
    <!--07-->
    <div class="ui-dialog" v-bind:class='{"show" :info.isA,"hide" :info.isB}'>
        <div class="ui-dialog-cnt padding-t-80 pos-ret">
            <div class="ui-dialog-bd">
                <span class="font18 dis-blk">请先开通实名验证</span>
                <span class="font14 txt-color-4a">你的账户未实名验证，无法操作此步骤，请先前往实名验证</span>
            </div>
            <div class="ui-dialog-ft" >
                <button type="button" data-role="button" onclick="location.href='/xiaojin/mine/identity'">去开通</button>
            </div>
            <div class="ui-dialog-ft">
                <button type="button" data-role="button" class="txt-color-red" v-on:click="getShutDown">关闭</button>
            </div>
            <span class="dis-blk id-alert"></span>
        </div>
    </div>
    <!--<Banking v-if="BankingShow"></Banking>-->
    <!--08-->
    <div class="ui-dialog" v-bind:class='{"show" :info.isC,"hide" :info.isD}'>
        <div class="ui-dialog-cnt padding-t-80 pos-ret">
            <div class="ui-dialog-bd">
                <span class="font18 dis-blk">您还未添加银行卡</span>
                <span class="font14 txt-color-4a">您还未添加银行卡，无法操作此步骤，请先前往添加银行卡</span>
            </div>
            <div class="ui-dialog-ft" >
                <button type="button"  onclick="location.href='/xiaojin/mine/bank_cards'">去添加</button>
            </div>
            <div class="ui-dialog-ft">
                <button type="button" data-role="button" class="txt-color-red" v-on:click="getClone">关闭</button>
            </div>
            <span class="dis-blk bank-alert"></span>
        </div>
    </div>

    <!--9-->
    <!--<development v-if="developmentShow"></development>-->
    <!--09-->
    <div class="ui-dialog" v-bind:class='{"show" :info.isE,"hide" :info.isF}'>
        <div class="ui-dialog-cnt padding-t-80 pos-ret">
            <div class="ui-dialog-bd">
                <span class="font18 dis-blk">功能正在开发中</span>
                <span class="font14 txt-color-4a">程序员正在加班加点开发，请耐心等待上线</span>
            </div>
            <div class="ui-dialog-ft" >
                <button type="button" v-on:click="getKnow">我知道了</button>
            </div>
            <span class="dis-blk know-alert"></span>
    </div>
</div>
<jin-footer :current="4"></jin-footer>
</div>
</template>
<script type="text/jsx">
import '../../js/lib/layer.js';
import '../../js/lib/layer.css';
import jinFooter from '../common/footer.vue';
import { countdown } from '../../js/tools.js';
import { XHRGet} from '../../js/ajax.js';

export default{
    data(){
    return{
        invite_url: '',
        can_user_money: "",
        info_asset: "",
        last_month_commission: "",
        last_month_divident: "",
        level_name: "",
        real_name: "",
        score: "",
        user_bank_count: "",
        wechat_avatar: "",
        status:"",
        //日期有关
        nowMonth: "",
        nowDate: "",
        nowStr: "",
        info: {
            isA: false,
            isB: true,
            isC: false,
            isD: true,
            isE:false,
            isF:true
        }
    }
},
components: {
    jinFooter
},
mounted: function () {
    //原生获取日期
    var date = new Date();
    var a = new Array("日", "一", "二", "三", "四", "五", "六");
    var week = new Date().getDay();
    var str = a[week];
    this.nowMonth = date.getMonth();
    this.nowDate = date.getDate();
    this.nowStr = str;
    const _this = this;
    //请求数据
    XHRGet('/oriental_treasure/my_center/index', {}, function (response) {
        console.info(response.data.data.user_sn);
        _this.invite_url = '/xiaojin/index/invite.html?user_sn=' + response.data.data.user_sn;
        _this.status=response.data.status;
        _this.can_user_money = response.data.data.can_user_money;
        _this.info_asset = response.data.data.info_asset;
        _this.last_month_commission = response.data.data.last_month_commission;
        _this.last_month_divident = response.data.data.last_month_divident;
        _this.level_name = response.data.data.level_name;
        _this.score = response.data.data.score;
        _this.wechat_avatar = response.data.data.wechat_avatar;
        //
        if(response.data.data.real_name === ''){
            _this.real_name = "未验证";
        }else{
            _this.real_name = response.data.data.real_name;
        }
        //
        if(response.data.data.user_bank_count === ''){
            _this.user_bank_count = "未提交";
        }else{
            _this.user_bank_count = response.data.data.user_bank_count;
        }
    });

},

methods: {
    //路由导航
    changeLouter: function (url) {
        window.location.href = url;
    },
    //提现要修改
    getWithdrawal: function () {
        const _this = this;
       if (_this.user_bank_count == 0) {
           _this.info.isC = true;
           _this.info.isD = false;
       }
        else if (this.real_name === "未验证") {
                _this.info.isA = true;
                _this.info.isB = false;
                //console.log(5555);
            } else {
                window.location.href = 'http://jin.weigudong.cn/index.php/Withdraw/widthdrawal.html'
            }

    },
    //银行卡
    getBank: function () {
        const _this = this;
        if (_this.user_bank_count == 0) {
            _this.info.isC = true;
            _this.info.isD = false;
        }else{
            window.location.href = '/xiaojin/mine/bank_cards'
        }
    },

    //未实名关闭
    getShutDown: function () {
        this.info.isA = false;
        this.info.isB = true;
    },
    //绑定银行卡关闭
    getClone: function () {
        this.info.isC = false;
        this.info.isD = true;
    },
    //功能正在开发中
    getBill:function(){
        this.info.isE = true;
        this.info.isF = false;
    },
    //我知道了
    getKnow:function(){
        this.info.isE = false;
        this.info.isF = true;
    }

}
}


</script>