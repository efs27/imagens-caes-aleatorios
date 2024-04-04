import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import DogImageView from '@/views/DogImageView.vue';

const routes = [
  { path: '/', name: 'login', component: LoginPage },
  { path: '/dog-image', name: 'dogImage', component: DogImageView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
