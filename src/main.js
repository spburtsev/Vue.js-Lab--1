import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import GreetingContainer from './pages/GreetingContainer.vue';
import BreedsPage from './pages/BreedsPage.vue';
import ListActions from './pages/ListActions.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/greeting',
      component: GreetingContainer,
    },
    {
      path: '/breeds',
      component: BreedsPage,
    },
    {
      path: '/list-actions',
      component: ListActions,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
