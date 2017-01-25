//import Vue from 'vue';
import axios from 'axios';
import Loading from '../../components/common/loading.vue';
import successing from '../../components/common/success.vue';
import '../mock/test.js';
import '../lib/layer.js';
//import '../../css/information/index.css'

var login = new Vue({
    el: '#container',
    data: {
        phone:'',
        loadingShow: false,
        successingShow:false
    },
    components: {
        Loading,
        successing
    },
    methods: {
        goToLogin: function() {
            let data = {
                input: this.phone
            };
            const _this = this;
            _this.loadingShow = true;
            axios.post('/api_information01',data).then(function(response){
                console.log(response);
                if (response.data.status == 0||1) {
                    _this.loadingShow = false;
                    _this.successingShow=true;
                    //setInterval("layer.closeAll()",2000);
                  //layer.open({content: response.data.info});
                  //  setInterval("layer.closeAll()",2000);
                }
                console.log(response.data.status == 0);
                console.log(response.data.status == 1);
            });
          //............
        }
    }
});