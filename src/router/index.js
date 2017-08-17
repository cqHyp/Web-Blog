import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import MainPage from '@/components/mainPage';
import Article from '@/components/Content/article';
import Manage from '@/components/Admin/managePage';
import sendArticle from '@/components/Admin/Article/sendArticle';

Vue.use(Router);
Vue.use(VueResource);
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
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/sendArticle',
      name: 'sendArticle',
      component: sendArticle
    }
  ]
});
