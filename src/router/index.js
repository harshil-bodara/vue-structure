import { createRouter, createWebHistory } from 'vue-router'
import Inbox from '../views/Inbox.vue';
import Archive from '../views/Archive.vue';

const routes = [
   {
      path: '/',
      name: 'inbox',
      component: Inbox
   },
   {
    path: '/archive',
    name: 'archive',
    component: Archive
 },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})
export default router