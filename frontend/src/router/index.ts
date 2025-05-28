import { createRouter, createWebHistory } from 'vue-router';
import RevenueAnalysis from '../pages/RevenueAnalysis.vue';
import Inventory from '../pages/Inventory.vue';
import AddProduct from '../pages/AddProduct.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: RevenueAnalysis },
  { path: '/inventory', component: Inventory },
  { path: '/add-product', component: AddProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
