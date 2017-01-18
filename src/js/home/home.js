import HomeKong7 from 'components/home/home-kong7.vue';
import HomeKong7Content from 'components/home/home-kong7-content.vue';
import HomeKong7Card from 'components/home/home-kong7-card.vue';
import "../lib/swiper-3.3.0.min.js";
import "../lib/swiper-3.3.0.min.css";
import Vuerify from 'vuerify'
import VuerifyDirective from 'v-vuerify-next' // Vue2.0
Vue.use(Vuerify)
Vue.use(VuerifyDirective)

var V = new Vue({
    el: '#container',
    components: {
        HomeKong7,
        HomeKong7Content,
        HomeKong7Card
    },
    mounted: function() {
		var mySwiper = new Swiper ('.swiper-shop-recoment', {
            slidesPerView: 'auto',
            loop: false,

		});
	},
});
