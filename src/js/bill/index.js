import BillIndex from 'components/bill/bill-index.vue';
import BillWithdraw from 'components/bill/bill-withdraw.vue';
import BillDetails from 'components/bill/bill-details.vue';

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}

    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const routes = [
     {path: '/', component: BillIndex},
    { path: '/withdraw', component: BillWithdraw},
    { path: '/bill/billDetails', component: BillDetails},
    {path: '*', component: BillIndex}
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior,
    routes,
})

const app = new Vue({
    router,
    watch: {
        '$route' (to, from) {

        }
    },
}).$mount('#container')