import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: () => import('pages/home'),
      children: [
        {
          name: 'product',
          path: 'product/:id',
          component: () => import('pages/product')
        }
      ]
    },
    {
      name: 'category',
      path: '/category',
      component: () => import('pages/category')
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('pages/cart')
    },
    {
      name: 'person',
      path: '/person',
      component: () => import('pages/person')
    },
    {
      name: 'search',
      path: '/search',
      component: () => import('pages/search')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
