import UserView from '@/views/UserView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UserView,
    },
    {
      path: '/user-edit/:id',
      name: 'edit',
      component: () => import('@/views/EditUserView.vue'),
    },
  ],
});

export default router;
