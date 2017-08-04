import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/mainPage';
import Article from '@/components/Content/article';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
});
