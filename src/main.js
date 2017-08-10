// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import $ from 'jquery';
import Vuex from 'vuex';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user_name: ''
  },
  mutations: {
    showUserName(state){
      alert(state.user_name);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  $,
  template: '<App/>',
  components: { App },
  mounted: function () {
    console.log($(window).width());
  }
});
