import DiscoverIndex from 'components/discover/discover-index.vue';
import "../lib/swiper-3.3.0.min.js";
import "../lib/swiper-3.3.0.min.css";
import jinFooter from 'components/common/footer.vue';
import '../../js/lib/layer.js';
import '../../js/lib/layer.css';

var V = new Vue({
    el: '#container',
    components: {
        DiscoverIndex, jinFooter
    },
    mounted: function() {
        var mySwiper = new Swiper ('.swiper-shop-recoment', {
            slidesPerView: 'auto',
            loop: false,

        });
    },
});
