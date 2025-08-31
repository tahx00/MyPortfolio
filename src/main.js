import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from "@iconify/vue";
import "flag-icons/css/flag-icons.min.css";
createApp(App).component("Icon", Icon).use(store).use(router).mount("#app");
