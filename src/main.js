import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { store } from './store/store.js';
import Accounting from 'accounting-js';

import App from './App.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition)  return savedPosition;
        else    return {x: 0, y: 0};
    }
});

// Add filter for currency
Vue.filter("currency",  (val) => Accounting.formatMoney(val));

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
