import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Catalog from "@/views/Catalog";
import Cart from "@/views/Cart";
import Registry from "@/views/Registry";
import Product from "@/views/Product";

const routes = [
  { path: "/", component: Home },
  { path: "/catalog", component: Catalog },
  { path: "/product", component: Product },
  {
    path: "/cart",
    component: Cart,
    meta: {
      layout: "base-layout"
    }
  },
  {
    path: "/registry",
    component: Registry,
    meta: {
      layout: "base-layout"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
