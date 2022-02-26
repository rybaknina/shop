import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseLayout from "@/BaseLayout";
import MainLayout from "@/MainLayout";

const app = createApp(App);
app.component("base-layout", BaseLayout)
  .component("main-layout", MainLayout);
app.use(store).use(router).mount("#app");
