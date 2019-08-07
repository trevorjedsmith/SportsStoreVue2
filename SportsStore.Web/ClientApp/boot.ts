import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./components/store/index";
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/sportsstore/Store.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
];

new Vue({
    el: '#app-root',
	router: new VueRouter({ mode: 'history', routes: routes }),
	store:store,
    render: h => h(require('./components/app/app.vue.html'))
});
