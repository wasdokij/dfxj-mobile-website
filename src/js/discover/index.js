import DiscoverIndex from 'components/discover/discover-index.vue';
import "../lib/swiper-3.3.0.min.js";
import "../lib/swiper-3.3.0.min.css";

var V = new Vue({
    el: '#container',
    components: {
        DiscoverIndex,
    },
    mounted: function() {
        var mySwiper = new Swiper ('.swiper-shop-recoment', {
            slidesPerView: 'auto',
            loop: false,

        });
    },
});