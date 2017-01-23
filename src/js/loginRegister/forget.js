//import '../mock/test.js';
import '../lib/layer.js';
import '../lib/layer.css';
import forgetCheck from '../../components/loginRegister/forget-check.vue';
import forgetNewPassword from '../../components/loginRegister/forget-new-password.vue';

var login = new Vue({
	el: '#forget',
	data: {
		nextStep: false,
	},
	components: {
		forgetCheck, forgetNewPassword
	},
	created: function () {
		
	},
	methods: {
		nextFn: function () {
			this.nextStep = true;
		}
	},
});