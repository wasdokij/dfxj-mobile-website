import BillIndex from 'components/bill/bill-index.vue';
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
    { path: '/bill/billDetails', component: BillDetails},
    {path: '*', component: BillIndex},
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
            console.log(to)
            if (to.path=="/bill"){
                document.title = "账单";
            } else if(to.path=="/bill/billDetails"){
                document.title = "账单详情";
            }
        }
    },
}).$mount('#container')