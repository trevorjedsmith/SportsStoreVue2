import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./components/store/index";
Vue.use(VueRouter);

Vue.filter("currency", (value:any) => new Intl.NumberFormat("en-US",
	{ style: "currency", currency: "USD" }).format(value));

const routes = [
	{ path: '/', component: require('./components/sportsstore/Store.vue.html') },
	{ path: '/cart', component: require('./components/cart/ShoppingCart.vue.html') },
	{ path: '/checkout', component: require('./components/checkout/Checkout.vue.html') },
	{ path: '/thanks/:id', component: require('./components/checkout/OrderThanks.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
];

new Vue({
    el: '#app-root',
	router: new VueRouter({ mode: 'history', routes: routes }),
	store:store,
    render: h => h(require('./components/app/app.vue.html'))
});
