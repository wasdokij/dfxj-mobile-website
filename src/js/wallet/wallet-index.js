import WalletBill from 'components/wallet/wallet-bill.vue';
import WalletWithdraw from 'components/wallet/wallet-withdraw.vue';
import WalletBillDetails from 'components/wallet/wallet-bill-details.vue';

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
    { path: '/bill', component: WalletBill},
    { path: '/withdraw', component: WalletWithdraw},
    { path: '/bill/billDetails', component: WalletBillDetails},
    {path: '*', component: WalletBill}
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