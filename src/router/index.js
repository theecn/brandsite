import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: () => import('@/views/index/index'),
    },
    {
      path: '/index',
      name: 'index',
      components: () => import('@/views/index/index'),
    },
    {
      path: '/products',
      name: 'products',
      components: () => import('@/views/products/products'),
    },
    {
      path: '/content',
      name: 'content',
      components: () => import('@/views/content/content'),
    },
    {
      path: '/about',
      name: 'about',
      components: () => import('@/views/about/about'),
    },
  ],
});
