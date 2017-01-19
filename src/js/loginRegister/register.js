//import Vue from 'vue';
import axios from 'axios';
import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';

var login = new Vue({
	el: '#register',
	data: {
		name: '',
		phone: '',
		pwd: '',
	},

	methods: {
		goToRegister: function () {
			let data = {
				name: this.name,
				phone: this.phone,
				pws: this.pwd
			}
			console.log(data)
			var load = layer.open({ type: 2,shadeClose: false})
			axios.post('/api_login',data).then(function(response){
				console.log(response)
				layer.close(load);
				if (response.data.status == 0) {
					layer.open({
						content: response.data.info,
						btn: ['确定'],
						yes: function () {
							layer.closeAll();
						}
					});
				}
			});
		}
	}
});