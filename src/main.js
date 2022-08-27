import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './components/App.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'
import store from './store.js'
import Cart from './components/Cart.vue'

const routes = [
    { path: '/', component: ProductsList },
    { path: '/product/:id', component: ProductInfo },
    { path: '/cart', component: Cart}
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store,
})
