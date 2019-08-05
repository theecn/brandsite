import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/products/products'),
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('@/views/content/content'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/about'),
    },
  ],
});
